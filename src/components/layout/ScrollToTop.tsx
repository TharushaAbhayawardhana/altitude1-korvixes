import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const sectionRoutes = new Set(["/features", "/solutions", "/testimonials", "/faq"])

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevHash = useRef(hash)

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    } else if (!sectionRoutes.has(pathname)) {
      window.scrollTo(0, 0)
    }
    prevHash.current = hash
  }, [pathname, hash])

  return null
}
