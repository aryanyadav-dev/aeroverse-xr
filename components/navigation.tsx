"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
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

function handleSmoothScroll(target: string) {
  scroller.scrollTo(target.replace("#", ""), {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -80,
  })
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [compact, setCompact] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const isScrollingDown = currentY > lastScrollY.current

      setScrolled(currentY > 10)

      const hero = document.getElementById("hero")
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setPastHero(rect.bottom <= 0)
      }

      if (currentY < 10) {
        setShowNav(true)
        setCompact(false)
      } else if (isScrollingDown) {
        setShowNav(false)
      } else {
        setShowNav(true)
        setCompact(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <motion.header
          initial={{ y: 0 }}
          animate={{ y: showNav ? 0 : -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
              "fixed top-0 w-full z-50 transition-all duration-300",
              scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          )}
      >
        <Container>
          <nav
              className={cn(
                  "flex items-center justify-between transition-all duration-300 ease-in-out",
                  compact ? "py-2 md:py-2" : "py-3 md:py-4"
              )}
          >
            <Link
                href="/"
                className="flex items-center space-x-2 flex-shrink min-w-0 z-20"
            >
              <Image
                  src="/aero.png"
                  alt="Aeroverse XR Logo"
                  width={compact ? 28 : 36}
                  height={compact ? 28 : 36}
                  className="rounded-md flex-shrink-0 transition-all duration-300"
              />
              <span
                  className={cn(
                      "font-space-grotesk font-bold tracking-tight truncate transition-all duration-300",
                      compact ? "text-sm sm:text-base" : "text-base sm:text-lg",
                      pathname === "/download" || pastHero
                          ? "text-black"
                          : "text-white drop-shadow-md"
                  )}
              >
              Aeroverse XR
            </span>
            </Link>

            {/* Desktop Nav */}
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
                        className={cn(
                            "font-figtree transition-colors bg-transparent border-none outline-none cursor-pointer",
                            pathname === "/download" || pastHero
                                ? "text-gray-700 hover:text-gray-900"
                                : "text-gray-200 hover:text-white"
                        )}
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
