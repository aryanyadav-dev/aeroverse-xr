"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"

const components = [
  {
    name: "James Webb Telescope",
    description: "Explore the engineering marvel of the James Webb Space Telescope in AR.",
    image: "/james-webb-telescope.jpeg",
  },
  {
    name: "Starlink",
    description: "Understand the Starlink satellite and its global internet mission.",
    image: "/starlink.jpeg",
  },
  {
    name: "Curiosity Rover",
    description: "Simulate the Mars Curiosity Rover and its scientific instruments.",
    image: "/curiosityrover.jpeg",
  },
  {
    name: "Turbofan Engine",
    description: "See the inner workings of a modern turbofan engine in 3D.",
    image: "/turbofanjetengine.jpg",
  },
]

export default function ComponentsOfferSection() {
  const [active, setActive] = useState(0) // Start with the first card
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="w-full py-16 sm:py-20 pb-2 bg-white mb-0 overflow-hidden">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-center mb-12 md:mb-16 text-slate-900">Components We Offer</h2>
        <div className="relative flex items-center justify-center h-[380px] sm:h-[420px] md:h-[450px]">
          {/* Carousel */}
          <div className="flex w-full justify-center items-center overflow-visible" style={{ perspective: 1200 }}>
            {components.map((comp, idx) => {
              const offset = idx - active
              const scale = offset === 0 ? 1 : 0.85 // Slightly larger side cards
              const rotateY = offset * -25 // Reduced rotation for a softer look
              const z = -Math.abs(offset) * 80 // Reduced depth effect
              const x = offset * (isMobile ? 140 : 180) // Responsive x offset
              const opacity = Math.abs(offset) > 2 ? 0 : 1
              return (
                <motion.div
                  key={comp.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%', // Center vertically
                    width: isMobile ? 260 : 300,  // Responsive card width
                    height: isMobile ? 340 : 380, // Responsive card height
                    marginLeft: isMobile ? -130 : -150, // Half of width
                    marginTop: isMobile ? -170 : -190,  // Half of height
                    zIndex: components.length - Math.abs(offset),
                    opacity,
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                  }}
                  animate={{
                    scale,
                    x,
                    rotateY,
                    z,
                    filter: offset === 0 ? 'brightness(1)' : 'brightness(0.65) blur(1px)', // Adjusted inactive brightness
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 25 }} // Adjusted spring
                  onClick={() => setActive(idx)}
                >
                  <div className={`rounded-2xl shadow-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 flex flex-col items-center justify-start h-full p-4 sm:p-6 transition-all duration-300 ${offset === 0 ? 'ring-4 ring-blue-500/40 shadow-blue-500/20' : 'hover:shadow-md'}`}>
                    <div className="w-40 h-40 sm:w-52 sm:h-52 bg-slate-200/70 rounded-xl mt-2 mb-4 sm:mb-5 flex items-center justify-center overflow-hidden relative">
                      {comp.image ? (
                        <Image
                          src={comp.image}
                          alt={comp.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 208px"
                        />
                      ) : (
                        <span className="text-5xl sm:text-6xl text-blue-400">🛰️</span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-1 text-center">{comp.name}</h3>
                    <p className="text-slate-600 text-center text-xs sm:text-sm leading-relaxed">{comp.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          {/* Navigation Arrows - styled to be more prominent */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-full shadow-lg p-2 sm:p-3 text-blue-600 hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setActive(a => Math.max(0, a - 1))}
            disabled={active === 0}
            aria-label="Previous Component"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-full shadow-lg p-2 sm:p-3 text-blue-600 hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setActive(a => Math.min(components.length - 1, a + 1))}
            disabled={active === components.length - 1}
            aria-label="Next Component"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  )
} 