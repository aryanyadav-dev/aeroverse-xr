"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, User } from "lucide-react"

const papers = [
  {
    title: "Real Time Aerospace Simulation in Spatial Computing",
    authors: "Aryan Yadav and Chinmay Sawant",
    link: "https://drive.google.com/your-google-drive-link-here",
    abstract: "A fast, immersive approach to aerospace simulation using spatial computing and AR/VR for education and research.",
  },
]

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" className="py-20 bg-muted/20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Research Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest academic publications on space technology,
            augmented reality, and educational innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-center">
          {papers.map((paper, index) => (
            <ResearchCard key={index} paper={paper} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ResearchCard({ paper, index }: { paper: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDownload = () => {
    window.open(paper.link, '_blank')
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border rounded-lg p-4 md:p-6 flex flex-col w-full max-w-xs sm:max-w-sm md:w-[22.5rem] aspect-square hover:shadow-md transition-shadow mx-auto"
    >
      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{paper.title}</h3>
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <span className="flex items-center">
          <User className="h-3 w-3 mr-1" />
          {paper.authors}
        </span>
      </div>
      <p className="text-muted-foreground mb-4 text-sm flex-grow overflow-hidden">{paper.abstract}</p>
      <div className="flex justify-end items-center mt-auto pt-4 border-t">
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </motion.div>
  )
}