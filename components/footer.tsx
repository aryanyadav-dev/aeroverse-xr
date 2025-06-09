"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Github, PenTool, Youtube } from "lucide-react"
import Image from "next/image"
// @ts-ignore
import { scroller } from "react-scroll"

function handleFooterSmoothScroll(target: string) {
  scroller.scrollTo(target.replace('#', ''), {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -80,
  })
}

export default function Footer() {
  return (
      <footer className="bg-muted/30 border-t py-8 md:py-12 mt-12 md:mt-16 px-4 sm:px-6 md:px-0">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="space-y-3 md:space-y-4 flex-1">
              <div className="flex items-center space-x-2">
                <Image src="/aero.png" alt="Aeroverse XR Logo" width={28} height={28} className="rounded-md" />
                <span className="font-space-grotesk text-lg font-bold tracking-tight">
                Aeroverse XR
              </span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Bringing the wonders of flight to your room.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <h3 className="font-medium text-lg mb-3 md:mb-4">Links</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 justify-items-start">

                {/* Smooth Scroll Buttons */}
                <button onClick={() => handleFooterSmoothScroll('#hero')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Home</button>
                <button onClick={() => handleFooterSmoothScroll('#research')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Research</button>
                <button onClick={() => handleFooterSmoothScroll('#how-it-works')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">How It Works</button>
                <button onClick={() => handleFooterSmoothScroll('#faq')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">FAQ</button>
                <button onClick={() => handleFooterSmoothScroll('#team')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Team</button>

                {/* External Links with Icons */}
                <a
                    href="https://github.com/aryanyadav-dev/aeroverse-xr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                    href="https://medium.com/@pixellabs010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <PenTool className="w-4 h-4" />
                  <span>Medium</span>
                </a>

                <a
                    href="https://www.youtube.com/watch?v=1m1GuY210U8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>

                {/* Internal Link to Blogs Page */}
                <button
                    onClick={() => handleFooterSmoothScroll('#analytics')}
                    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left"
                >
                  <span>Blogs</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </footer>
  )
}
