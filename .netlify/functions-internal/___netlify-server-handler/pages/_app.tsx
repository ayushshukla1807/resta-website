import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

// Emergency inline styles as fallback
const emergencyStyles = `
  body { 
    background: #000 !important; 
    color: #fff !important;
    font-family: system-ui, sans-serif;
  }
  .glass {
    background: rgba(255,255,255,0.05) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
  }
  .gradient-text {
    background: linear-gradient(135deg, #22c55e, #3b82f6) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Inject emergency styles if needed
    if (!document.querySelector('#emergency-styles')) {
      const styleElement = document.createElement('style')
      styleElement.id = 'emergency-styles'
      styleElement.textContent = emergencyStyles
      document.head.appendChild(styleElement)
    }
  }, [])

  return <Component {...pageProps} />
}