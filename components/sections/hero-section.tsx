"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
// @ts-ignore
import { scroller } from "react-scroll"
import localFont from "next/font/local"

// Add font imports with corrected paths
const awesome = localFont({ src: "../../fonts/Awesome Serif Desktop Fonts/Regular Fonts/Regular/AwesomeSerif-Regular.otf", variable: "--font-awesome" })
// const metrik = localFont({ src: "../../fonts/Metrik - Trial Font/MetrikTrial-Regular.otf", variable: "--font-metrik" }) // Metrik font removed

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
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-screen max-w-none object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/aerovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-600 bg-clip-text text-transparent drop-shadow-lg ${awesome.variable} font-awesome`}>Transforming the way we explore the sky</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className={`text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-sans`}>Revolutionizing aerospace technology education and exploration through immersive experiences.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <Button asChild size="lg" className="group">
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
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <Link href="#how-it-works" aria-label="Scroll to How It Works">
              <ArrowDown className="h-10 w-10 text-blue-500" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}