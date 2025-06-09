"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Twitter, Globe, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Aryan Yadav",
    role: "Team Member",
    bio: "Expert in software development and user experience",
    image: "/aryan.jpeg",
    social: {linkedin: "https://www.linkedin.com/in/-aryanyadav/", github: "https://github.com/aryanyadav-dev", website: "https://aryanyadav-portfolio.vercel.app/" },
  },
  {
    name: "Chinmay Sawant",
    role: "Team Member",
    bio: "Specializes in AR and immersive technology",
    image: "/chinmay.jpeg",
    social: {linkedin: "https://www.linkedin.com/in/chinmay-sawant-8b3282266/", github: "https://github.com/Chinmay-HS", website: "#" },
  },
  {
    name: "Om Awadhoot",
    role: "Team Member",
    bio: "Specializes in AR and immersive technology",
    image: "/om.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/om-awadhoot/", github: "https://github.com/omawadhoot", website: "#" },
  },
  {
    name: "Diya Pagdhal",
    role: "Team Member",
    bio: "Focuses on educational technology and innovation.",
    image: "/diya.jpeg",
    social: {linkedin: "https://www.linkedin.com/in/diya-paghdal-630951271/", github: "https://github.com/DiyaPaghdal2005", website: "#" },
  },
]

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="team" className="py-16 md:py-20 bg-white mt-20 md:mt-40 px-4 sm:px-6 md:px-0">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-zodiak mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-figtree">
            The brilliant minds behind Aeroverse XR, combining expertise in space technology,
            augmented reality, and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto font-figtree">
            Our team has experience in augmented reality, development, and educational technology. Together, we're revolutionizing how people learn about and interact with space technology.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [imgError, setImgError] = useState(false)

  // Helper to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border rounded-lg overflow-hidden group h-full flex flex-col"
    >
      <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-slate-100">
        {member.image && !imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-4xl font-bold text-slate-400">{getInitials(member.name)}</span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="font-bold font-zodiak text-lg">{member.name}</h3>
        <p className="text-sm text-muted-foreground mb-2 font-figtree font-semibold">{member.role}</p>
        <p className="text-sm mb-4 flex-grow font-figtree">{member.bio}</p>
        <div className="flex space-x-4 mt-auto">
          <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={member.social.github || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gray-800 transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href={member.social.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-600 transition-colors">
            <Globe className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}