"use client"
import {useState, useEffect} from "react"
import {FaSun, FaMoon} from "react-icons/fa"

const ThemeToggle = () => {
  const getSystemTheme = () => {
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }

  const [theme, setTheme] = useState("light") // Default to 'light' to avoid mismatch
  const [hydrated, setHydrated] = useState(false) // Hydration detection

  useEffect(() => {
    setHydrated(true)

    // Set the theme after hydration
    const systemTheme = getSystemTheme()
    setTheme(systemTheme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = (e: any) => {
      setTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [])

  useEffect(() => {
    if (hydrated) {
      document.documentElement.setAttribute("data-theme", theme)
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [theme, hydrated])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  if (!hydrated) return <></>

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full flex p-1 transition-colors duration-200 overflow-hidden ease-in-out outline-none ${
        theme === "light" ? "bg-gray-200  border-2 border-blue-600" : "bg-gray-800  border-none"
      }`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`w-6 h-6 rounded-full duration-200 ease-in-out ${theme === "dark" ? "bg-white" : "bg-white"} flex items-center justify-center`}
        style={{transform: theme === "light" ? "translateX(0)" : "translateX(2rem)"}}
      >
        {theme === "dark" ? <FaMoon className='w-4 h-4 text-blue-600' /> : <FaSun className='w-4 h-4 text-yellow-500' />}
      </div>
    </button>
  )
}

export default ThemeToggle
