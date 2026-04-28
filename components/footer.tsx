"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import WhatsappBusinessIcon from "./ui/whatsapp-icon";

const footerLinks = {
  services: [
    { name: "AI Chatbots", href: "#services" },
    { name: "Workflow Automation", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Custom Dashboards", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "FAQs", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/nexoredev/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61588689450931",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nexoredev/",
    label: "Instagram",
  },
  {
    icon: WhatsappBusinessIcon,
    href: "https://www.instagram.com/nexoredev/",
    label: "WhatsApp",
  },
  // { icon: , href: "#", label: "WhatsApp" },
];

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-1 mb-0"
              whileHover={{ scale: 1.02 }}
            >
              {/* <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-lg bg-primary" />
                <div className="absolute inset-1 rounded-md bg-background flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">N</span>
                </div>
              </div> */}
              {/* <span className="text-xl font-bold">Nexora</span> */}
              <motion.img
                key={theme}
                src="/logo.png"
                alt="Logo"
                style={theme === "light" ? { filter: "brightness(0.85)" } : {}}
                className="h-24 w-auto"
              />
            </motion.a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs text-pretty ml-3">
              Empowering businesses with AI automation and modern web solutions
              to scale faster and operate smarter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  target="_blank"
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with precision for the future of business.
          </p>
        </div>
      </div>
    </footer>
  );
}
