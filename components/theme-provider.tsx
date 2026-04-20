"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    const currentTheme = root.classList.contains("light") ? "light" : "dark"
    setTheme(currentTheme)
  }, [])

  const toggleTheme = React.useCallback(() => {
    const root = document.documentElement
    const newTheme = theme === "dark" ? "light" : "dark"
    root.classList.remove("dark", "light")
    root.classList.add(newTheme)
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }, [theme])

  return { theme: mounted ? theme : "dark", toggleTheme }
}
