"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { scroller } from "react-scroll"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Team", href: "#team" },
  { name: "Research", href: "#research" },
  { name: "FAQ", href: "#faq" },
]

// Smooth scroll handler
function handleSmoothScroll(target: string) {
  scroller.scrollTo(target.replace('#', ''), {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -80, // adjust for navbar height
  })
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const pathname = usePathname()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      // Detect if past hero section
      const hero = document.getElementById('hero')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setPastHero(rect.bottom <= 0)
      }
      // Hide/show navbar based on scroll direction
      if (window.scrollY < 10) {
        setShowNav(true)
      } else if (window.scrollY > lastScrollY.current) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 35 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center space-x-2 flex-shrink min-w-0 z-20">
            <Image src="/aero.png" alt="Aeroverse XR Logo" width={36} height={36} className="rounded-md flex-shrink-0" />
            <span className={`font-space-grotesk text-base sm:text-lg font-bold tracking-tight truncate ${pathname === "/download" || pastHero ? "text-black" : "text-white drop-shadow-md"}`}>
              Aeroverse XR
            </span>
          </Link>

          {/* Desktop Navigation - Only visible on desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleSmoothScroll(link.href)}
                  className={`font-medium hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer ${pathname === "/download" || pastHero ? "text-gray-700 hover:text-gray-900" : "text-gray-200 hover:text-white"}`}
                  style={{ background: 'none' }}
                >
                  {link.name}
                </button>
              </motion.div>
            ))}
          </div>
        </nav>
      </Container>
    </motion.header>
  )
}