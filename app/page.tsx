'use client'

import LinkButton from '@/components/LinkButton'
import SocialIcons from '@/components/SocialIcons'
import { links } from '@/data/links'

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-16">
      <div className="mx-auto w-full max-w-md px-5 pt-12 sm:pt-20">
        {/* Profile Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:border-white/30 hover:shadow-xl sm:h-32 sm:w-32">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Your Name
          </h1>
          <p className="max-w-sm text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            Your bio or description goes here
          </p>
        </div>

        {/* Link Tree Style Buttons */}
        <div className="space-y-10">
          {links.map((section, sectionIndex) => (
            <div 
              key={section.id} 
              className="space-y-4 animate-fadeInUp"
              style={{ 
                animationDelay: `${sectionIndex * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <h2 className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((link, linkIndex) => (
                  <div
                    key={link.id}
                    className="animate-fadeInUp"
                    style={{ 
                      animationDelay: `${(sectionIndex * 0.1) + (linkIndex * 0.05) + 0.3}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <LinkButton {...link} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div 
          className="mt-14 animate-fadeInUp"
          style={{ 
            animationDelay: '0.8s',
            animationFillMode: 'both',
          }}
        >
          <SocialIcons />
        </div>
      </div>
    </main>
  )
}

