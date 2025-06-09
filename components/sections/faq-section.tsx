"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What devices support the Aeroverse XR app?",
    answer: "Our application has support for android 9.0 + smartphones & tablets. We do offer a trial demo for iOS & iPad OS, since we are not a part of the \"Apple Developer Program\" yet.",
  },
  {
    question: "Do I need any additional hardware to use the app?",
    answer: "No you will not need any specific and additional hardware to run Aeroverse XR on android & iOS/iPad OS but to experience VR features you will definitely need a VR headset. Right now we have successfully tested on Meta Quest 3, we plan to test it on more VR headsets and bring more support :)",
  },
  {
    question: "Is Aeroverse XR suitable for classroom use?",
    answer: "Yes! It is meant to empower and strengthen students' concepts for various subfields of aerospace. Students can experience key structures visually than going through static black/white diagrams from manuals and textbooks. They can virtually have access to all these components. This application in no way tries to replace teachers or promotes having a full time virtual teacher. In this field of aerospace engineering there are a lot of intricate details and internal workings, which only a field expert or an experienced teacher can explain. The \"Gemini ai\" features used in this application act as a mere helpline to understand basic concepts.",
  },
  {
    question: "How accurate are the space technology models?",
    answer: "The models used in the current application are taken from an online 3D asset store called \"SketchFab\" & NASA's 3D Model library. We tried our best to find the manuals and various detailed about the selected models and that's how developed the model-specific features. Some of these examples are : Visualisation of hot/cold air, antenna transmission, etc. Since we are not great at modelling 3D assets yet this was our solution. We do plan on bridging this gap by collaborating with 3D modellers in the future.",
  },
  {
    question: "Can I use Aeroverse XR offline?",
    answer: "Yes you can! Although some user specific features like using the \"Gemini API\" might not be available and neither will multiplayer be available.",
  },
  {
    question: "Do you offer enterprise solutions for space industry training?",
    answer: "Not yet, but if we see potential in this we will definitely try to explore that. Right not there are various immersive edutech platforms on the internet, but they are not accessible to the general student body at a very low cost. We will try to be that. Our goal is to bring this technology to the common people very easily and not gatekeep it.",
  },
]

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="faq" className="py-20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-zodiak mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-figtree">
            Find answers to common questions about Aeroverse XR and our VR platform.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FaqItem({ faq, index }: { faq: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex justify-between items-center w-full text-left p-4 rounded-lg transition-colors",
          isOpen
            ? "bg-primary/10 text-primary"
            : "bg-card hover:bg-muted/50"
        )}
      >
        <span className="font-figtree">{faq.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-2 text-muted-foreground font-figtree">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}