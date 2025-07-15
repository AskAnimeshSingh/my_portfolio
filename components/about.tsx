"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Smartphone, Globe, Zap } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React.js, Next.js, and modern JavaScript frameworks with responsive design.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Proficient in Node.js, Laravel, and API development with secure authentication systems.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experience with PostgreSQL, MongoDB, and MySQL for efficient data management.",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end web application development with modern tech stacks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach with Tailwind CSS and Bootstrap for all device compatibility.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Focus on scalable, efficient, and high-performance web applications.",
    },
  ]

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
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
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate full-stack developer with a strong foundation in modern web technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crafting Digital Experiences
            </motion.h3>

            <motion.p
              className="text-gray-400 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I'm a dedicated software developer with expertise in full-stack development, specializing in creating
              efficient, scalable, and secure web applications. My journey in technology has equipped me with a diverse
              skill set spanning frontend frameworks, backend technologies, and database management.
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Currently working at Xcrino Business Solutions, I focus on developing robust CRUD operations, implementing
              secure authentication systems, and integrating payment gateways. I thrive in both independent and
              collaborative environments, always aiming to drive business performance and increase service value.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-purple-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(100, 116, 139, 0.1)",
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="bg-slate-800/20 rounded-2xl p-8 border border-slate-700/30"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Education
          </motion.h3>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="flex items-start space-x-4">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">🎓</span>
              </motion.div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">B. Tech in Computer Science and Engineering</h4>
                <p className="text-purple-400 font-medium mb-2">Babu Banarsi Das University, Lucknow</p>
                <p className="text-gray-400 mb-4">Aug 2019 - Jun 2023</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Object Oriented Programming",
                    "Databases",
                    "Data Structures",
                    "Algorithms",
                    "Computer Networks",
                    "Machine Learning",
                    "Robotics",
                  ].map((course, index) => (
                    <motion.span
                      key={course}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
