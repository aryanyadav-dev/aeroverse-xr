"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { User } from "lucide-react"

const papers = [
  {
    title: "Real Time Aerospace Simulation in Spatial Computing",
    authors: "Aryan Yadav and Chinmay Sawant",
    // link removed because download button is removed
    abstract: `A gamified XR training system for aerospace applications, combining ORB-SLAM2 for user localization, Unity 3D for simulation, and AR Foundation for interactivity. Multi-user alignment is achieved using monocular RGB tracking and shared virtual reference points. A central server synchronizes user positions with avatar representations. Deep learning-based depth estimation ensures realistic occlusion handling, while ML/DL algorithms support real-time troubleshooting. GPU acceleration and Firebase networking enable efficient, immersive aerospace training.`,
  },
]

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section id="research" className="py-20 ">
        <Container>
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-zodiak mb-4">
              Future Solutions, Fueled by Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-figtree">
              Along with developing our application, we are also working on our research paper exploring SLAM algorithms and spatial technology.
              The research is still underway but our core abstract is
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

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card border rounded-lg p-6 flex flex-col w-full max-w-xs sm:max-w-sm md:w-[22.5rem] hover:shadow-md transition-shadow mx-auto"
      >
        <h3 className="text-xl font-zodiak font-bold mb-3 line-clamp-2">{paper.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-4 font-figtree">
        <span className="flex items-center">
          <User className="h-3 w-3 mr-1" />
          {paper.authors}
        </span>
        </div>

        {/* Abstract as markdown quote style */}
        <blockquote className="relative -mx-6 border-l-4 border-blue-950 pl-6 italic text-blue-950 font-mono text-sm leading-relaxed">
          {paper.abstract}
        </blockquote>
      </motion.div>
  )
}
