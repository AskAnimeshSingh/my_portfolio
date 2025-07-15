"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AskAnimeshSingh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/askanimeshsingh/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:askanimeshsingh@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:8795087016", label: "Phone" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-400 text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Animesh
              </span>
              <br />
              <span className="text-white">Singh</span>
            </motion.h1>

            <motion.div
              className="text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "Laravel Developer",
                  2000,
                  "API Designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-purple-400"
              />
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Highly motivated and adaptable software developer with experience in full-stack development, API design,
              and server deployment. Passionate about creating efficient, scalable, and secure web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </span>
              </motion.button>

              <a
                href="/Animesh_Singh_2025..pdf"
                download="Animesh_Singh_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 relative z-10"
                style={{ textDecoration: 'none' }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-full text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 relative z-10 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Coding Illustration */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              {/* Animated Border */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-lg opacity-75"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Main Illustration Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border-4 border-white/10 overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                    "0 0 40px rgba(236, 72, 153, 0.4)",
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {/* Animated SVG Illustration */}
                <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#grid)" />

                  {/* Desk */}
                  <motion.rect
                    x="50"
                    y="280"
                    width="300"
                    height="80"
                    rx="10"
                    fill="url(#deskGradient)"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />

                  {/* Monitor */}
                  <motion.rect
                    x="120"
                    y="180"
                    width="160"
                    height="100"
                    rx="8"
                    fill="url(#monitorGradient)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />

                  {/* Monitor Screen */}
                  <motion.rect
                    x="130"
                    y="190"
                    width="140"
                    height="80"
                    rx="4"
                    fill="#0f172a"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />

                  {/* Code Lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <motion.rect
                      x="135"
                      y="200"
                      width="60"
                      height="3"
                      fill="#8b5cf6"
                      animate={{ width: [0, 60, 60] }}
                      transition={{ delay: 1.5, duration: 1 }}
                    />
                    <motion.rect
                      x="135"
                      y="210"
                      width="80"
                      height="3"
                      fill="#ec4899"
                      animate={{ width: [0, 80, 80] }}
                      transition={{ delay: 1.7, duration: 1 }}
                    />
                    <motion.rect
                      x="135"
                      y="220"
                      width="45"
                      height="3"
                      fill="#06b6d4"
                      animate={{ width: [0, 45, 45] }}
                      transition={{ delay: 1.9, duration: 1 }}
                    />
                    <motion.rect
                      x="135"
                      y="230"
                      width="70"
                      height="3"
                      fill="#10b981"
                      animate={{ width: [0, 70, 70] }}
                      transition={{ delay: 2.1, duration: 1 }}
                    />
                    <motion.rect
                      x="135"
                      y="240"
                      width="55"
                      height="3"
                      fill="#f59e0b"
                      animate={{ width: [0, 55, 55] }}
                      transition={{ delay: 2.3, duration: 1 }}
                    />
                  </motion.g>

                  {/* Keyboard */}
                  <motion.rect
                    x="140"
                    y="300"
                    width="120"
                    height="40"
                    rx="6"
                    fill="url(#keyboardGradient)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />

                  {/* Keyboard Keys */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    {[...Array(24)].map((_, i) => (
                      <motion.rect
                        key={i}
                        x={145 + (i % 8) * 13}
                        y={305 + Math.floor(i / 8) * 10}
                        width="10"
                        height="8"
                        rx="2"
                        fill="rgba(255, 255, 255, 0.1)"
                        animate={{
                          fill: ["rgba(255, 255, 255, 0.1)", "rgba(139, 92, 246, 0.3)", "rgba(255, 255, 255, 0.1)"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.g>

                  {/* Coffee Cup */}
                  <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                  >
                    <ellipse cx="320" cy="320" rx="15" ry="8" fill="url(#cupGradient)" />
                    <rect x="305" y="300" width="30" height="25" rx="3" fill="url(#cupGradient)" />
                    <path
                      d="M 335 310 Q 345 310 345 320 Q 345 330 335 330"
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.6)"
                      strokeWidth="2"
                    />

                    {/* Steam */}
                    <motion.path
                      d="M 315 295 Q 315 285 320 285 Q 325 285 325 295"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="1.5"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.path
                      d="M 320 295 Q 320 285 325 285 Q 330 285 330 295"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="1.5"
                      animate={{ opacity: [0.8, 0.4, 0.8] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    />
                  </motion.g>

                  {/* Floating Code Symbols */}
                  <motion.g>
                    <motion.text
                      x="80"
                      y="150"
                      fill="#8b5cf6"
                      fontSize="24"
                      fontFamily="monospace"
                      animate={{
                        y: [150, 140, 150],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {"</>"}
                    </motion.text>

                    <motion.text
                      x="320"
                      y="200"
                      fill="#ec4899"
                      fontSize="20"
                      fontFamily="monospace"
                      animate={{
                        y: [200, 190, 200],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      {"{}"}
                    </motion.text>

                    <motion.text
                      x="60"
                      y="250"
                      fill="#06b6d4"
                      fontSize="18"
                      fontFamily="monospace"
                      animate={{
                        y: [250, 240, 250],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      {"()"}
                    </motion.text>

                    <motion.text
                      x="340"
                      y="160"
                      fill="#10b981"
                      fontSize="16"
                      fontFamily="monospace"
                      animate={{
                        y: [160, 150, 160],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    >
                      {"[]"}
                    </motion.text>
                  </motion.g>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#374151" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>

                    <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>

                    <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6b7280" />
                      <stop offset="100%" stopColor="#4b5563" />
                    </linearGradient>

                    <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                ⚛️
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                animate={{
                  x: [0, -5, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              >
                💻
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-8 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{
                  x: [0, 5, 0],
                  y: [0, -8, 0],
                }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                ⚡
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}