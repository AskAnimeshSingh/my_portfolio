"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building, Code, Database, CreditCard, Mail, Shield, Users } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Xcrino Business Solutions Pvt. Ltd",
      position: "ReactJS and Laravel Developer",
      location: "Delhi",
      duration: "Oct 2024 - Present",
      type: "Full-time",
      description:
        "Leading full-stack development initiatives with focus on scalable web applications and secure payment integrations.",
      achievements: [
        "Developed multiple CRUD operations with server-side validations",
        "Designed various pages using ReactJS with modern UI/UX principles",
        "Implemented authentication and authorization systems using Laravel middleware",
        "Integrated payment gateways (Stripe, PayPal) for seamless transactions",
        "Developed email notification systems for automated updates",
        "Created dynamic and responsive UI components using ReactJS, Tailwind CSS, and Bootstrap",
      ],
      technologies: ["ReactJS", "Laravel", "MySQL", "Stripe", "PayPal", "Tailwind CSS", "Bootstrap"],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Cosmo Info Solutions",
      position: "Software Development Engineer",
      location: "Lucknow",
      duration: "May 2024 - Oct 2024",
      type: "Full-time",
      description:
        "Focused on developing robust authentication systems and internal dashboards for business applications.",
      achievements: [
        "Architected multi-user login system with middleware for role-based access",
        "Implemented different dashboard redirections based on user roles",
        "Designed email notification system for car rental project approval workflow",
        "Developed company portal UI for internal dashboard management",
        "Created Super-Admin approval system for Admin permissions",
        "Built responsive interfaces using ReactJS and Laravel",
      ],
      technologies: ["ReactJS", "Laravel", "PHP", "MySQL", "JavaScript", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const skills = [
    { icon: Code, name: "Full Stack Development", description: "End-to-end application development" },
    { icon: Database, name: "Database Design", description: "Efficient data architecture and optimization" },
    { icon: CreditCard, name: "Payment Integration", description: "Stripe, PayPal gateway implementations" },
    { icon: Shield, name: "Security & Auth", description: "Secure authentication and authorization" },
    { icon: Mail, name: "Email Systems", description: "Automated notification and communication" },
    { icon: Users, name: "User Management", description: "Role-based access control systems" },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            scale: [1.2, 1, 1.2],
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
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
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
            My professional journey in software development and the impact I've made
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.8 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative flex items-start space-x-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.3, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Building className="w-8 h-8 text-white" />

                  {/* Pulse Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full opacity-30`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="flex-1 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.3 }}
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.div
                        className="flex items-center space-x-4 text-purple-400 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.3 }}
                      >
                        <span className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex flex-col lg:items-end"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2 + index * 0.3 }}
                    >
                      <span className="flex items-center space-x-1 text-gray-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-400 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.2 + index * 0.3 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.4 + index * 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 2.6 + index * 0.3 + achIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.8 + index * 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 3 + index * 0.3 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Gained */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 3.7 }}
          >
            Core{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Competencies
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.9 + index * 0.1 }}
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
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
