"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
// @ts-ignore
import { scroller } from "react-scroll"

export default function HeroSection() {
  function handleSmoothScrollToFaq() {
    scroller.scrollTo("faq", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    })
  }

  return (
      <section
          id="hero"
          className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
              src="/earth2.jpg"
              alt="Earth Background"
              className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        {/* Video Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-screen max-w-none object-cover -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <source src="/aerovid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <Container className="relative z-20 px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-36">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-7xl mb-2 sm:mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-600 bg-clip-text text-transparent drop-shadow-lg font-zodiak font-bold leading-tight"
            >
              Transforming the way we explore the sky
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-figtree mb-6 sm:mb-8"
            >
              Revolutionizing aerospace technology education and exploration through immersive experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download the App
                </Link>
              </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-12 sm:mt-16"
            >
              <Link href="#how-it-works" aria-label="Scroll to How It Works">
                <ArrowDown className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
  )
}
