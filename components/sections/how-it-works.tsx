"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, RefreshCw, TrendingUp } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover",
    description:
      "We get deep into your goals and users — so we build the right thing, not just any thing.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Ship Fast",
    description:
      "Working software in your hands within days. Short cycles mean you see real progress continuously.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Learn Together",
    description:
      "Your feedback shapes every iteration. Priorities adapt as we learn what actually moves the needle.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    description:
      "We scale what works, cut what doesn't — evolving the product as your business does.",
  },
];

const proof = [
  {
    label: "First delivery",
    value: "Week 1",
    sub: "Not a deck — working software you can click through.",
  },
  {
    label: "Feedback loops",
    value: "Every sprint",
    sub: "You shape priorities before each cycle, not after launch.",
  },
  {
    label: "Surprises",
    value: "Zero",
    sub: "Full visibility into what's built, what's next, and why.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            You See Progress. <span className="gradient-text">Every Week.</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            No black-box development. No months of waiting. We work in short
            focused cycles — so you stay in control, give feedback as we go, and
            always know what's being built next.
          </p>
        </motion.div>

        {/* Phase Cards */}
        <div className="relative max-w-5xl mx-auto">
          {/*<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" /> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 mb-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center glow">
                      <phase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      {phase.number}
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loop Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground border border-dashed border-primary/20 rounded-full px-3 py-1.5 sm:px-5 whitespace-normal sm:whitespace-nowrap text-center block sm:inline">
              ↻ &nbsp;Each cycle feeds the next — your product gets sharper
              every sprint
            </span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Proof Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            {proof.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-background/60 border border-border rounded-xl p-5"
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-2xl font-bold mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
