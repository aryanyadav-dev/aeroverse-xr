"use client"

import { motion } from "framer-motion"
import { DownloadCloud, BarChart, Cpu, CheckCircle } from "lucide-react"
import { Container } from "@/components/ui/container"

const steps = [
  {
    title: "Scan & Explore in XR",
    heading: "Scan & Explore in XR",
    description:
      "Users launch the app and select or scan an aerospace component or vehicle. The app places a detailed, interactive 3D exploded view of the component in their real-world environment using markerless XR.",
    icon: DownloadCloud,
  },
  {
    title: "Instant AI Explanations",
    heading: "Instant AI Explanations",
    description: "When a user taps or focuses on a part, the Gemini API generates a concise, technical explanation of that component—covering its function, materials, and operation—right inside the XR scene.",
    icon: BarChart,
  },
  {
    title: "Real-Time Multilingual Translation",
    heading: "Real-Time Multilingual Translation",
    description: "Using ML Kit, the app instantly translates both spoken instructions and on-screen XR labels into the user's preferred language, all on-device and in real time. This ensures accessibility and seamless collaboration, even in multiplayer sessions.",
    icon: Cpu,
  },
  {
    title: "Collaborative Learning & Feedback",
    heading: "Collaborative Learning & Feedback",
    description: "Multiple users can join the same XR session, interact with components, and receive synchronized explanations and translations. Users can also share feedback or complete training tasks, with progress tracked for continuous improvement.",
    icon: CheckCircle,
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white w-full px-4 sm:px-0 py-16 sm:py-20">
      <Container className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold font-space-grotesk text-slate-800"
          >
            How It Works
          </motion.h2>
        </div>
        
        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block relative w-full">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-3 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 rounded-full -translate-x-1/2 z-0" />
          <div className="flex flex-col w-full gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex w-full min-h-0">
                {/* Left side */}
                <div className={`flex-1 flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} items-center min-h-0`}> 
                  {idx % 2 === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="bg-white border border-blue-100 rounded-lg shadow-sm px-4 sm:px-6 md:px-10 py-6 w-full max-w-[46rem] flex items-center gap-4 md:gap-6 mr-4"
                    >
                      <step.icon className="h-7 w-7 text-blue-500 shrink-0" />
                      <div className="text-left">
                        <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider leading-tight">{step.title}</div>
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">{step.heading}</div>
                        <div className="text-sm text-slate-500 leading-tight mt-1">{step.description}</div>
                      </div>
                    </motion.div>
                  )}
                </div>
                {/* Center dot */}
                <div className="flex flex-col items-center min-w-[40px]">
                  <motion.div
                    className="w-7 h-7 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center shadow"
                    animate={{ boxShadow: [
                      "0 0 0 0 #60a5fa55",
                      "0 0 0 12px #60a5fa22",
                      "0 0 0 0 #60a5fa55"
                    ] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  >
                    <step.icon className="h-4 w-4 text-blue-500" />
                  </motion.div>
                  {/* Connector except for last */}
                  {idx < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-blue-200 to-blue-100" style={{ minHeight: 16, height: 48 }} />
                  )}
                </div>
                {/* Right side */}
                <div className={`flex-1 flex ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'} items-center min-h-0`}>
                  {idx % 2 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="bg-white border border-blue-100 rounded-lg shadow-sm px-4 sm:px-6 md:px-10 py-6 w-full max-w-[46rem] flex items-center gap-4 md:gap-6 ml-4"
                    >
                      <step.icon className="h-7 w-7 text-blue-500 shrink-0" />
                      <div className="text-left">
                        <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider leading-tight">{step.title}</div>
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">{step.heading}</div>
                        <div className="text-sm text-slate-500 leading-tight mt-1">{step.description}</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline (vertical, shown only on mobile) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 rounded-full z-0" />
          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex">
                {/* Left timeline dot */}
                <div className="relative flex flex-col items-center mr-4">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-white border-3 border-blue-400 flex items-center justify-center shadow z-10"
                    animate={{ boxShadow: [
                      "0 0 0 0 #60a5fa55",
                      "0 0 0 8px #60a5fa22",
                      "0 0 0 0 #60a5fa55"
                    ] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  >
                    <step.icon className="h-3 w-3 text-blue-500" />
                  </motion.div>
                  {/* Connector except for last */}
                  {idx < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-blue-200 to-blue-100 absolute top-6 bottom-0 left-1/2 -translate-x-1/2" />
                  )}
                </div>
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white border border-blue-100 rounded-lg shadow-sm p-4 flex-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-blue-500 shrink-0" />
                    <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">{step.title}</div>
                  </div>
                  <div className="text-xl font-bold text-blue-600 leading-tight mb-1">{step.heading}</div>
                  <div className="text-sm text-slate-500">{step.description}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

