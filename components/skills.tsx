"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "PHP", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "Python", level: 75, color: "from-green-400 to-green-600" },
        { name: "Java", level: 70, color: "from-red-400 to-red-600" },
        { name: "SQL", level: 85, color: "from-indigo-400 to-indigo-600" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 88, color: "from-gray-400 to-gray-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "Bootstrap", level: 85, color: "from-purple-400 to-purple-600" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 87, color: "from-green-400 to-green-600" },
        { name: "Laravel", level: 90, color: "from-red-400 to-red-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "PostgreSQL", level: 82, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
        { name: "REST APIs", level: 88, color: "from-purple-400 to-purple-600" },
      ],
    },
  ]

  const tools = [
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Stripe", icon: "💳" },
    { name: "PayPal", icon: "💰" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
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
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
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
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(168, 85, 247, 0.5)",
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + categoryIndex * 0.2 }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 1.4 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />

                      {/* Animated glow effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 1.4 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="bg-slate-800/20 rounded-2xl p-8 border border-slate-700/30"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Tools &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group flex flex-col items-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 2.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(100, 116, 139, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tool.icon}
                </motion.div>
                <span className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          {[
            {
              title: "Full Stack Development",
              description: "End-to-end web application development with modern frameworks",
              icon: "🚀",
            },
            {
              title: "API Design & Integration",
              description: "RESTful services, payment gateways, and third-party integrations",
              icon: "🔗",
            },
            {
              title: "Database Architecture",
              description: "Efficient database design and optimization for scalable applications",
              icon: "🗄️",
            },
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="text-center p-6 bg-gradient-to-br from-slate-800/40 to-slate-800/20 rounded-xl border border-slate-700/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.8 + index * 0.2 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(168, 85, 247, 0.5)",
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {highlight.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-3">{highlight.title}</h4>
              <p className="text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
