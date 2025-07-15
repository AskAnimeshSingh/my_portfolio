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
  Building,
  HardHat,
  FileText,
  Smartphone,
} from "lucide-react"

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
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Construction Approval & Inspection Management System",
      year: "2025",
      category: "Multi-Panel Management System",
      description:
        "A comprehensive Laravel-based system that streamlines the end-to-end construction project approval process with five distinct panels for builders, engineers, municipal corporation, inspectors, and superadmin.",
      longDescription:
        "This Laravel-based multi-panel system streamlines the end-to-end construction project approval process. It includes five distinct panels: Builder & Engineer Panels for project submission, Municipal Corporation (MCD) Panel for compliance review, Inspector Mobile App for physical inspections, and Superadmin Panel for administrative control. The workflow ensures seamless collaboration between stakeholders, real-time status updates across all panels, and digitized inspection reporting for enhanced transparency and efficiency.",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Mobile App", "Bootstrap", "jQuery", "AJAX"],
      features: [
        "Builder & Engineer collaboration panels",
        "Municipal Corporation (MCD) review system",
        "Mobile app for field inspections",
        "Real-time status tracking",
        "Digital inspection reporting",
        "Multi-role permission system",
        "API-driven mobile integration",
        "Comprehensive admin dashboard",
      ],
      icon: Building,
      color: "from-orange-500 to-red-500",
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

        {/* Project Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex space-x-4 bg-slate-800/50 rounded-full p-2 border border-slate-700/50">
            {projects.map((project, index) => (
              <motion.button
                key={project.title}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeProject === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.title.split(" ")[0]} {project.title.split(" ")[1]}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50">
              {/* Animated Project Illustration */}
              <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid */}
                <defs>
                  <pattern id="projectGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
                  </pattern>
                  
                  {/* Gradients */}
                  <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  
                  <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  
                  <linearGradient id="constructionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                  
                  <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  
                  <linearGradient id="adminGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                
                <rect width="600" height="400" fill="url(#projectGrid)" />
                
                {activeProject === 0 ? (
                  // Car Rental Platform Animation
                  <>
                    {/* Main Building/Platform */}
                    <motion.rect
                      x="200"
                      y="150"
                      width="200"
                      height="120"
                      rx="15"
                      fill="url(#buildingGradient)"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    
                    {/* Platform Windows */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <rect x="220" y="170" width="30" height="20" rx="3" fill="#1e293b" />
                      <rect x="270" y="170" width="30" height="20" rx="3" fill="#1e293b" />
                      <rect x="320" y="170" width="30" height="20" rx="3" fill="#1e293b" />
                      <rect x="220" y="200" width="30" height="20" rx="3" fill="#1e293b" />
                      <rect x="270" y="200" width="30" height="20" rx="3" fill="#1e293b" />
                      <rect x="320" y="200" width="30" height="20" rx="3" fill="#1e293b" />
                    </motion.g>
                    
                    {/* Cars */}
                    <motion.g>
                      {/* Car 1 - Moving */}
                      <motion.rect
                        x="50"
                        y="300"
                        width="60"
                        height="25"
                        rx="8"
                        fill="url(#carGradient)"
                        animate={{ x: [50, 500, 50] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <motion.circle
                        cx="65"
                        cy="325"
                        r="8"
                        fill="#374151"
                        animate={{ x: [0, 450, 0] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <motion.circle
                        cx="95"
                        cy="325"
                        r="8"
                        fill="#374151"
                        animate={{ x: [0, 450, 0] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      
                      {/* Car 2 - Stationary */}
                      <motion.rect
                        x="450"
                        y="320"
                        width="50"
                        height="20"
                        rx="6"
                        fill="url(#carGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      />
                      <motion.circle
                        cx="465"
                        cy="340"
                        r="6"
                        fill="#374151"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      />
                      <motion.circle
                        cx="485"
                        cy="340"
                        r="6"
                        fill="#374151"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                      />
                    </motion.g>
                    
                    {/* Users */}
                    <motion.g>
                      {/* User 1 */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="15"
                        fill="url(#mobileGradient)"
                        animate={{ y: [100, 80, 100] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.rect
                        x="85"
                        y="120"
                        width="30"
                        height="40"
                        rx="15"
                        fill="url(#mobileGradient)"
                        animate={{ y: [120, 100, 120] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      
                      {/* User 2 */}
                      <motion.circle
                        cx="500"
                        cy="120"
                        r="12"
                        fill="url(#mobileGradient)"
                        animate={{ y: [120, 100, 120] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                      <motion.rect
                        x="488"
                        y="135"
                        width="24"
                        height="35"
                        rx="12"
                        fill="url(#mobileGradient)"
                        animate={{ y: [135, 115, 135] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                    </motion.g>
                    
                    {/* Payment Icons */}
                    <motion.g>
                      {/* Credit Card */}
                      <motion.rect
                        x="80"
                        y="200"
                        width="40"
                        height="25"
                        rx="4"
                        fill="url(#adminGradient)"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      
                      {/* PayPal */}
                      <motion.rect
                        x="480"
                        y="180"
                        width="35"
                        height="20"
                        rx="3"
                        fill="url(#adminGradient)"
                        animate={{ 
                          rotate: [0, -3, 3, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                    </motion.g>
                    
                    {/* Platform Title */}
                    <motion.text
                      x="300"
                      y="50"
                      fill="#ffffff"
                      fontSize="16"
                      fontFamily="Arial, sans-serif"
                      textAnchor="middle"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      Car Rental Platform
                    </motion.text>
                  </>
                ) : (
                  // Construction Management System Animation
                  <>
                    {/* Main Construction Building */}
                    <motion.rect
                      x="180"
                      y="120"
                      width="240"
                      height="140"
                      rx="15"
                      fill="url(#constructionGradient)"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    
                    {/* Building Windows */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <rect x="200" y="140" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="240" y="140" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="280" y="140" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="320" y="140" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="360" y="140" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="200" y="175" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="240" y="175" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="280" y="175" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="320" y="175" width="25" height="25" rx="3" fill="#1e293b" />
                      <rect x="360" y="175" width="25" height="25" rx="3" fill="#1e293b" />
                    </motion.g>
                    
                    {/* Construction Crane */}
                    <motion.g>
                      <motion.rect
                        x="50"
                        y="80"
                        width="8"
                        height="120"
                        fill="#6b7280"
                        animate={{ y: [80, 60, 80] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.rect
                        x="30"
                        y="60"
                        width="48"
                        height="8"
                        fill="#6b7280"
                        animate={{ x: [30, 50, 30] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.circle
                        cx="54"
                        cy="70"
                        r="3"
                        fill="#f59e0b"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.g>
                    
                    {/* Mobile App */}
                    <motion.g>
                      <motion.rect
                        x="450"
                        y="280"
                        width="40"
                        height="60"
                        rx="6"
                        fill="url(#mobileGradient)"
                        animate={{ 
                          y: [280, 270, 280],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.rect
                        x="455"
                        y="285"
                        width="30"
                        height="40"
                        rx="2"
                        fill="#1e293b"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.g>
                    
                    {/* Admin Panel */}
                    <motion.g>
                      <motion.rect
                        x="80"
                        y="200"
                        width="60"
                        height="40"
                        rx="4"
                        fill="url(#adminGradient)"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 1, -1, 0]
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.rect
                        x="85"
                        y="205"
                        width="50"
                        height="30"
                        rx="2"
                        fill="#1e293b"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.g>
                    
                    {/* Construction Workers */}
                    <motion.g>
                      {/* Worker 1 */}
                      <motion.circle
                        cx="120"
                        cy="320"
                        r="12"
                        fill="url(#mobileGradient)"
                        animate={{ x: [120, 140, 120] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.rect
                        x="108"
                        y="335"
                        width="24"
                        height="35"
                        rx="12"
                        fill="url(#mobileGradient)"
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      
                      {/* Worker 2 */}
                      <motion.circle
                        cx="480"
                        cy="340"
                        r="10"
                        fill="url(#mobileGradient)"
                        animate={{ y: [340, 330, 340] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                      <motion.rect
                        x="470"
                        y="350"
                        width="20"
                        height="30"
                        rx="10"
                        fill="url(#mobileGradient)"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                    </motion.g>
                    
                    {/* Floating Icons */}
                    <motion.g>
                      <motion.text
                        x="50"
                        y="80"
                        fill="#f97316"
                        fontSize="20"
                        fontFamily="monospace"
                        animate={{
                          y: [80, 70, 80],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {"🏗️"}
                      </motion.text>
                      
                      <motion.text
                        x="520"
                        y="90"
                        fill="#10b981"
                        fontSize="18"
                        fontFamily="monospace"
                        animate={{
                          y: [90, 80, 90],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      >
                        {"📱"}
                      </motion.text>
                      
                      <motion.text
                        x="30"
                        y="150"
                        fill="#f59e0b"
                        fontSize="16"
                        fontFamily="monospace"
                        animate={{
                          y: [150, 140, 150],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      >
                        {"👷"}
                      </motion.text>
                      
                      <motion.text
                        x="550"
                        y="160"
                        fill="#dc2626"
                        fontSize="14"
                        fontFamily="monospace"
                        animate={{
                          y: [160, 150, 160],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                      >
                        {"📋"}
                      </motion.text>
                    </motion.g>
                    
                    {/* Data Flow Lines */}
                    <motion.g>
                      <motion.path
                        d="M 150 200 Q 200 150 250 200"
                        fill="none"
                        stroke="rgba(249, 115, 22, 0.6)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        animate={{ strokeDashoffset: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      
                      <motion.path
                        d="M 450 280 Q 400 250 350 280"
                        fill="none"
                        stroke="rgba(16, 185, 129, 0.6)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        animate={{ strokeDashoffset: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                    </motion.g>
                    
                    {/* Platform Title */}
                    <motion.text
                      x="300"
                      y="50"
                      fill="#ffffff"
                      fontSize="14"
                      fontFamily="Arial, sans-serif"
                      textAnchor="middle"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      Construction Management
                    </motion.text>
                  </>
                )}
                
                {/* Data Flow Particles */}
                <motion.g>
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={150 + i * 50}
                      cy={200 + Math.sin(i) * 15}
                      r="2"
                      fill={activeProject === 0 ? "#8b5cf6" : "#f97316"}
                      animate={{
                        cx: [150 + i * 50, 350 + i * 50, 150 + i * 50],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.g>
              </svg>
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
              
              {/* Technologies */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
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
