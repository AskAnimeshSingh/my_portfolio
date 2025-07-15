"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Database,
  CreditCard,
  Shield,
  Users,
  Car,
  Truck,
  GraduationCap,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Car Rental Platform",
      year: "2025",
      category: "Full Stack Web Application",
      description:
        "A comprehensive online car rental platform that manages driver and customer registrations with intelligent driver assignment based on availability. Features integrated payment processing and role-based admin dashboards.",
      longDescription:
        "Built a complete car rental ecosystem with user registration, driver management, and automated assignment algorithms. The platform includes secure payment processing through multiple gateways and comprehensive admin controls for managing the entire operation.",
      technologies: ["Laravel", "Ajax", "AUTH", "Breeze", "Stripe", "PayPal", "MySQL", "Bootstrap"],
      features: [
        "Driver and customer registration system",
        "Intelligent driver assignment algorithm",
        "Multi-gateway payment integration (Stripe, PayPal)",
        "Admin and Super-admin dashboards",
        "Role-based permissions management",
        "Real-time availability tracking",
        "Automated booking confirmations",
        "Revenue analytics and reporting",
      ],
      icon: Car,
      color: "from-blue-500 to-cyan-500",
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A showcase of my recent work and the technologies I've mastered
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span
                  className={`px-3 py-1 bg-gradient-to-r ${projects[activeProject].color} text-white rounded-full text-sm font-medium`}
                >
                  {projects[activeProject].category}
                </span>
                <span className="flex items-center space-x-1 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{projects[activeProject].year}</span>
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{projects[activeProject].longDescription}</p>
              
              {/* Download CV Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    try {
                      const link = document.createElement('a');
                      link.href = '/Animesh_Singh_2025..pdf';
                      link.download = 'Animesh_Singh_Resume_2025.pdf';
                      link.target = '_blank';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } catch (error) {
                      console.error('Download failed:', error);
                      // Fallback: open in new tab
                      window.open('/Animesh_Singh_2025..pdf', '_blank');
                    }
                  }}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
