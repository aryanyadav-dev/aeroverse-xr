"use client"

import { motion } from "framer-motion"
import { DownloadCloud, BarChart, Cpu, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Scan & Explore in AR",
    heading: "Scan & Explore in AR",
    description:
      "Users launch the app and select or scan an aerospace component or vehicle. The app places a detailed, interactive 3D exploded view of the component in their real-world environment using markerless AR.",
    icon: DownloadCloud,
  },
  {
    title: "Instant AI Explanations",
    heading: "Instant AI Explanations",
    description: "When a user taps or focuses on a part, the Gemini API generates a concise, technical explanation of that component—covering its function, materials, and operation—right inside the AR scene.",
    icon: BarChart,
  },
  {
    title: "Real-Time Multilingual Translation",
    heading: "Real-Time Multilingual Translation",
    description: "Using ML Kit, the app instantly translates both spoken instructions and on-screen AR labels into the user's preferred language, all on-device and in real time. This ensures accessibility and seamless collaboration, even in multiplayer sessions.",
    icon: Cpu,
  },
  {
    title: "Collaborative Learning & Feedback",
    heading: "Collaborative Learning & Feedback",
    description: "Multiple users can join the same AR session, interact with components, and receive synchronized explanations and translations. Users can also share feedback or complete training tasks, with progress tracked for continuous improvement.",
    icon: CheckCircle,
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white w-full px-0 mt-12 mb-20">
      <div className="max-w-none w-full mx-0">
        <div className="text-center mb-8 mt-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold font-space-grotesk text-slate-800"
          >
            How It Works
          </motion.h2>
        </div>
        <div className="relative w-full flex flex-col items-center">
          {/* Central vertical line - increased width */}
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
                      className="bg-white border border-blue-100 rounded-lg shadow-sm px-10 py-6 w-full max-w-3xl flex items-center gap-6 md:ml-0 ml-2"
                      style={{ margin: 0 }}
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
                      className="bg-white border border-blue-100 rounded-lg shadow-sm px-10 py-6 w-full max-w-3xl flex items-center gap-6 md:mr-0 mr-2"
                      style={{ margin: 0 }}
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
      </div>
    </section>
  )
}

