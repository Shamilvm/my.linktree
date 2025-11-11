'use client'

import Image from 'next/image'
import LinkButton from '@/components/LinkButton'
import SocialIcons from '@/components/SocialIcons'
import { links } from '@/data/links'
import profile from '@/assets/shaaa.jpg'

export default function Home() {
  // Get social media links from the links data
  const socialMediaLinks = links.find(section => section.id === 'social-media')?.items || []

  return (
    <main className="min-h-screen bg-black pb-16">
      <div className="mx-auto w-full max-w-md px-5 pt-12 sm:pt-20">
        {/* Profile Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:border-white/30 hover:shadow-xl sm:h-32 sm:w-32">
            <Image
              src={profile}
              alt="Shamil Vm"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Shamil Vm
          </h1>
          <p className="max-w-sm text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            Full-Stack Developer | Turning ideas into Experience
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
              {/* <h2 className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                {section.title}
              </h2> */}
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
          <SocialIcons links={socialMediaLinks} />
        </div>
      </div>
    </main>
  )
}

