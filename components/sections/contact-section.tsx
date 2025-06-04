"use client"

import { Container } from "@/components/ui/container"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

// Helper to generate a matrix of dots with white/blue/gray pixel effect
const DOT_ROWS = 20;
const DOT_COLS = 20;
const DOTS = Array.from({ length: DOT_ROWS * DOT_COLS });
const pixelPalette = [
  "#fff",    
  "#e5e7eb", 
  "#3b82f6", 
  "#2563eb", 
  "#1e40af", 
  "#60a5fa", 
  "#a5b4fc", 
];

function getRandomPixelColor() {
  return pixelPalette[Math.floor(Math.random() * pixelPalette.length)];
}

function getRandomOpacity() {
  return 0.12 + Math.random() * 0.7;
}

export default function ContactSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white flex flex-col items-center justify-center">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center text-slate-900">Contact Us</h2>
        <div className="flex justify-center items-center">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            style={{ borderRadius: '1rem' }}
          >
            <motion.div
              className={`relative w-80 h-80 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center overflow-hidden`}
              style={{
                background: hovered ? "#22272b" : "#fff",
                transition: 'background 0.3s',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 500, damping: 60 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Pixel grid background only on hover */}
              {hovered && (
                <div className="absolute inset-0 z-0 grid grid-cols-20 grid-rows-20 pointer-events-none">
                  {DOTS.map((_, i) => (
                    <span
                      key={i}
                      className="block w-[7%] h-[7%] rounded-full"
                      style={{
                        background: getRandomPixelColor(),
                        opacity: getRandomOpacity(),
                      }}
                    />
                  ))}
                </div>
              )}
              {/* Logo on top, always visible */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <Image
                  src={hovered ? "/pixellabs_white.png" : "/pixellabs_black.png"}
                  alt="PixelLabs Logo"
                  width={120}
                  height={40}
                  style={{ filter: hovered ? 'drop-shadow(0 2px 8px #fff8)' : undefined }}
                />
              </div>
            </motion.div>
          </a>
        </div>
      </Container>
      <style jsx>{`
        .grid-cols-20 { grid-template-columns: repeat(20, minmax(0, 1fr)); }
        .grid-rows-20 { grid-template-rows: repeat(20, minmax(0, 1fr)); }
      `}</style>
    </section>
  )
} 