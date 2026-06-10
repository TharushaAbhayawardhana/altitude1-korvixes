import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
    $chatwoot?: {
      toggle: (state?: "open" | "toggle" | "close") => void
    }
  }
}

const CHATWOOT_CONFIG = {
  websiteToken: "tkYPgzF363TPvD9zhMY7EDqn",
  baseUrl: "https://app.chatwoot.com",
}

const EXCLUDED_ROUTES = ["/admin"]

export function ChatwootWidget() {
  const location = useLocation()
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current || window.chatwootSDK) return
    scriptLoaded.current = true

    const script = document.createElement("script")
    script.src = `${CHATWOOT_CONFIG.baseUrl}/packs/js/sdk.js`
    script.async = true
    script.onload = () => {
      window.chatwootSDK?.run(CHATWOOT_CONFIG)
    }

    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!window.$chatwoot) return

    const isExcluded = EXCLUDED_ROUTES.some((route) =>
      location.pathname.startsWith(route)
    )

    if (isExcluded) {
      window.$chatwoot.toggle("close")
    }
  }, [location.pathname])

  return null
}
