"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Menu, X, Rocket } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const pathname = usePathname()
  const heroRef = useRef<HTMLElement | null>(null)
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
          ? "bg-transparent"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/aero.png" alt="Aeroverse XR Logo" width={40} height={40} className="rounded-md" />
            <span className={`font-space-grotesk text-xl font-bold tracking-tight ${pathname === "/download" || pastHero ? "text-black" : "text-white drop-shadow-md"}`}>
              Aeroverse XR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleSmoothScroll(link.href)}
                  className="font-medium text-muted-foreground hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none' }}
                >
                  {link.name}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <Container className="py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    <button
                      onClick={() => {
                        handleSmoothScroll(link.href)
                        setIsOpen(false)
                      }}
                      className="font-medium text-foreground hover:text-white py-2 block bg-transparent border-none outline-none cursor-pointer w-full text-left"
                      style={{ background: 'none' }}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}