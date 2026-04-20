"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description: "We dive deep into your business needs, goals, and challenges to create a tailored strategy.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Build",
    description: "Our team designs and develops your solution using cutting-edge technologies and best practices.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description: "We launch your solution with comprehensive testing, training, and ongoing support.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            How We Bring Your{" "}
            <span className="gradient-text">Vision to Life</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            A streamlined process designed to deliver exceptional results
            efficiently and transparently.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center glow">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
