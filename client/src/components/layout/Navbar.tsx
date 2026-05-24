import { useState, useEffect } from 'react'
import { NAVIGATION } from '@utils/constants'
import { cn } from '@utils/math'
import { LogoNikoRua } from '@components/ui/LogoNikoRua'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-darker/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            <LogoNikoRua size="md" withText animated={false} />
          </a>
          <div className="hidden md:flex gap-6">
            {NAVIGATION.map(link => (
              <a key={link.id} href={link.href} className="text-slate-300 hover:text-primary transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-darker/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 space-y-3">
          {NAVIGATION.map(link => (
            <a key={link.id} href={link.href} onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-primary py-2">{link.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}