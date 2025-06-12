"use client"

import { Container } from "@/components/ui/container"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle, Lightbulb } from "lucide-react"

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
          <h2 className="text-3xl md:text-4xl font-bold font-zodiak mb-6 text-center text-slate-900">
            Get in touch with us!
          </h2>

          <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground font-figtree text-lg">
            We believe that this application has a long way to go and one way to make this application better is to get feedback from actual users and people who have and are working in the field of aerospace. There are a lot of forums and subreddits related to various subfields of aerospace. We plan to share our app with a bug reporting form and a feature request form so that we can get valuable response from them.
          </p>

          <div className="flex justify-center items-center mb-8">
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ borderRadius: '1rem' }}
            >
              <motion.div
                  className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center overflow-hidden`}
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
                      width={200}
                      height={68}
                      style={{ filter: hovered ? 'drop-shadow(0 2px 8px #fff8)' : undefined }}
                  />
                </div>
              </motion.div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4">
            <a
                href="https://forms.gle/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-xs bg-white border border-slate-200 rounded-2xl shadow-md px-6 py-5 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <AlertCircle className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg text-slate-800 mb-1">Bug Report</span>
              <span className="text-sm text-slate-500 text-center">Found a bug? Help us improve by reporting it here.</span>
            </a>
            <a
                href="https://forms.gle/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-xs bg-white border border-slate-200 rounded-2xl shadow-md px-6 py-5 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <Lightbulb className="w-8 h-8 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg text-slate-800 mb-1">Feature Request</span>
              <span className="text-sm text-slate-500 text-center">Suggest a new feature or improvement for Aeroverse XR.</span>
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
