"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"
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
    <footer className="bg-muted/30 border-t py-12 mt-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="space-y-4 flex-1">
            <div className="flex items-center space-x-2">
              <Image src="/aero.png" alt="Aeroverse XR Logo" width={28} height={28} className="rounded-md" />
              <span className="font-space-grotesk text-lg font-bold tracking-tight">
                Aeroverse XR
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Pioneering space technology through immersive augmented reality experiences.
            </p>
          </div>

          <div className="w-full md:w-auto md:ml-auto">
            <h3 className="font-medium text-lg mb-4 text-left md:text-left">Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 justify-items-start">
              <button onClick={() => handleFooterSmoothScroll('#hero')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Home</button>
              <button onClick={() => handleFooterSmoothScroll('#research')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Research</button>
              <button onClick={() => handleFooterSmoothScroll('#how-it-works')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">How It Works</button>
              <button onClick={() => handleFooterSmoothScroll('#faq')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">FAQ</button>
              <button onClick={() => handleFooterSmoothScroll('#team')} className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none outline-none cursor-pointer p-0 text-left">Team</button>
              <span />
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aeroverse XR. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}