"use client"

import { motion } from "framer-motion"
import { Bot, Globe, Workflow, MessageSquare, LayoutDashboard, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational AI that handles customer inquiries 24/7 with natural language understanding.",
    features: ["WhatsApp Integration", "Multi-language Support", "Custom Training"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with smart automation that saves time and reduces human error.",
    features: ["Process Optimization", "API Integrations", "Real-time Monitoring"],
  },
  {
    icon: MessageSquare,
    title: "AI Assistants",
    description: "Custom AI assistants tailored to your business needs, from sales to support operations.",
    features: ["Context Awareness", "Knowledge Base", "Seamless Handoff"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
    features: ["Next.js & React", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description: "Data-rich dashboards that provide actionable insights and real-time analytics.",
    features: ["Interactive Charts", "Real-time Data", "Custom Reports"],
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description: "Full-stack web applications with seamless user experiences and robust functionality.",
    features: ["Progressive Web Apps", "Cloud Native", "Scalable Architecture"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            From AI-powered automation to stunning web experiences, we provide
            comprehensive digital solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
