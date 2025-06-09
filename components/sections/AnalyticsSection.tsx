"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function AnalyticsSection() {
    return (
        <section id="analytics" className=" w-full px-4 sm:px-0 py-16 sm:py-20">
            <Container className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center gap-3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-zodiak">Analytics & Blogs</h2>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 md:grid-cols-2 font-figtree text-lg text-gray-700"
                >
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center relative overflow-hidden group transition-all">
                        <span className="text-lg md:text-xl font-bold text-slate-800 mb-2">Every Analytics Has A Story</span>
                        <span className="text-sm md:text-base text-gray-600">...and so does every application. We used the Android GPU Inspector to analyze and test our application's performance. Data is everything, and we believe that understanding every curve, every metric will help us optimize the application and help us bring it to a larger audience.</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center relative overflow-hidden group transition-all">
                        <span className="text-lg md:text-xl font-bold text-slate-800 mb-2">Our Technical Blogs</span>
                        <span className="text-sm md:text-base text-gray-600">These are some technical blogs written by our team talking about the analytics. We don't believe in gatekeeping our knowledge & experience, so we are in a continuous process of writing blogs related to the tech we work with — whether that's Unity game engine, Da Vinci Resolve for editing, or creating macro keyboards.</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col items-center text-center md:col-span-2 relative overflow-hidden group transition-all">
                        <span className="text-md text-gray-600">You can consider them as dev blogs, and these are available on{' '}
                            <a
                                href="https://medium.com/@pixellabs010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-600"
                            >
                                Medium
                            </a>
                            . We are eager to listen to your feedback as well.
                        </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
