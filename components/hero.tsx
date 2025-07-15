"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/askanimeshsingh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/animesh", label: "LinkedIn" },
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

              <motion.button
                className="group px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
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
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </span>
              </motion.button>
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
                  className="p-3 bg-slate-800/50 rounded-full text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              {/* Animated Border */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-lg opacity-75"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                    "0 0 40px rgba(236, 72, 153, 0.4)",
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Animesh Singh"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                💻
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                🚀
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
