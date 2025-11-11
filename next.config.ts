import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,   // hides build activity (the "N" badge)
    appIsrStatus: false     // optional
  }, 
}

export default nextConfig

