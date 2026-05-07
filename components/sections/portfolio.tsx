"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ZoomIn, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Jogkar Shoe Store",
    description:
      "Modern e-commerce platform for footwear with smart recommendations and seamless checkout flow.",
    image: "/jogkar.webp",
    url: "https://e-commerce-store-clientside.vercel.app/",
  },
  {
    title: "Fabrico T-shirt Store",
    description:
      "Clean and scalable apparel store focused on sustainability, user experience, and smooth shopping journey.",
    image: "/fabrico.webp",
    url: "https://fabrico-mens-wear.vercel.app/",
  },
  {
    title: "CEMS-Warehouse Management System",
    description:
      "Role-based warehouse system where admins oversee operations, bookers create orders, and suppliers manage fulfillment.",
    image: "/cemsfull.webp",
    url: "https://cems-rose.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "Feature-rich job platform with advanced search, streamlined applications, and efficient tracking system.",
    image: "/portal.webp",
    url: "https://job-portal-by-ammar.vercel.app/",
  },
]

const MotionImage = motion(Image)

type SelectedImage = {
  src: string
  title: string
}

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Our Work
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projects That <span className="gradient-text">Drive Results</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Explore a selection of our recent work, showcasing modern digital solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card">

                {/* IMAGE (Next.js optimized) */}
                <div className="relative h-64 overflow-hidden">

                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">

                    {/* Zoom */}
                    <button
                      onClick={() =>
                        setSelectedImage({
                          src: project.image,
                          title: project.title,
                        })
                      }
                      className="p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:scale-110 transition"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>

                    {/* Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:scale-110 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Title */}
            <div className="absolute bottom-6 text-white/60 text-sm">
              {selectedImage.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}