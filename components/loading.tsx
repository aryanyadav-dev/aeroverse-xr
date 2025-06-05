"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(1)
  useEffect(() => {
    let frame: number
    if (progress < 100) {
      frame = window.setTimeout(() => setProgress(progress + 1), 15)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => clearTimeout(frame)
  }, [progress])

  // Generate a simple starfield
  const stars = Array.from({ length: 40 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5,
    key: i,
  }))

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          {/* Starfield */}
          <div className="absolute inset-0 overflow-hidden">
            {stars.map(star => (
              <div
                key={star.key}
                style={{
                  position: 'absolute',
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: star.size,
                  height: star.size,
                  borderRadius: '50%',
                  background: 'white',
                  opacity: star.opacity,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}
          </div>
          
          {/* Progress Ring - Centered */}
          <div className="relative flex items-center justify-center">
            <svg width="120" height="120" className="block">
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
                opacity="0.2"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                stroke="#60a5fa"
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={2 * Math.PI * 52 * (1 - progress / 100)}
                strokeLinecap="round"
                initial={false}
                animate={{
                  strokeDashoffset: 2 * Math.PI * 52 * (1 - progress / 100),
                }}
                transition={{ duration: 0.1, ease: 'linear' }}
                style={{ filter: 'drop-shadow(0 0 8px #60a5fa)' }}
              />
            </svg>
            <span className="absolute text-4xl font-bold text-blue-200 drop-shadow-lg font-mono">
              {progress}
            </span>
          </div>
          
          {/* Text centered at bottom */}
          <div className="absolute bottom-12 left-0 right-0 text-center">
            <span className="text-blue-300 tracking-widest text-xs font-mono opacity-80 animate-pulse">
              Initializing Space Systems...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}