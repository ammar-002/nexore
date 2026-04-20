"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with automation.",
    price: "1,499",
    period: "project",
    features: [
      "Single AI Chatbot",
      "Basic Web Development",
      "Email Support",
      "1 Month Support",
      "Basic Analytics",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with complex needs.",
    price: "3,999",
    period: "project",
    features: [
      "Multiple AI Integrations",
      "Advanced Web Application",
      "Priority Support",
      "3 Months Support",
      "Advanced Analytics",
      "Custom Workflows",
      "API Integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring custom solutions.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited AI Solutions",
      "Full-Stack Development",
      "24/7 Dedicated Support",
      "12 Months Support",
      "Custom Analytics Dashboard",
      "Dedicated Account Manager",
      "SLA Guarantee",
      "On-premise Option",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Transparent Pricing for{" "}
            <span className="gradient-text">Every Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Choose a plan that fits your needs. All plans include our commitment to quality
            and customer satisfaction.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? "lg:-mt-4 lg:mb-4" : ""}
            >
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? "border-primary bg-card shadow-xl shadow-primary/10"
                    : "bg-card/50 border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && (
                      <span className="text-lg text-muted-foreground">$</span>
                    )}
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
