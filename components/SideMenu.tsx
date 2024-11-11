'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  ChevronLeft, 
  LayoutDashboard, 
  Video, 
  Users, 
  Settings, 
  BarChart3,
} from "lucide-react"
import { usePathname } from 'next/navigation'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  // { icon: Video, label: 'Vídeos', href: '/videos' },
  // { icon: Users, label: 'Assinantes', href: '/subscribers' },
  // { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  // { icon: Settings, label: 'Configurações', href: '/settings' },
  { icon: Settings, label: 'Canal', href: '/settings/channel' },
]

export function SideMenu() {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setExpanded(false)
      } else {
        setExpanded(true)
      }
    }

    // Set initial state
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <aside className={cn(
      "h-[calc(100vh-64px)] sticky top-16 bg-[#0A0A0A] border-r border-[#262626] flex flex-col transition-all duration-300",
      expanded ? "w-64" : "w-16",
      "lg:w-auto" // Responsive width
    )}>
      <nav className="flex-1 py-4 p-2 flex flex-col gap-1">
        {menuItems.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            className={cn(
              "flex items-center px-3 py-2 text-white hover:bg-[#1C1C1C] rounded-md transition-colors",
              pathname === href && "bg-[#1C1C1C]",
              expanded ? "justify-start gap-4" : "justify-center"
            )}
          >
            <Icon className="h-4 w-4 text-white flex-shrink-0" />
            <span className={cn(
              "overflow-hidden transition-all whitespace-nowrap",
              expanded ? "w-52 opacity-100" : "w-0 opacity-0"
            )}>
              {label}
            </span>
          </a>
        ))}
      </nav>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(prev => !prev)}
          className={cn(
            "absolute left-[calc(100%-12px)] bottom-4 hover:bg-[#1C1C1C] bg-[#0A0A0A] border border-[#262626]",
            "h-6 w-6 p-0",
            "lg:flex" // Only show on larger screens
          )}
        >
          <ChevronLeft className={cn(
            "h-4 w-4 text-white transition-all",
            !expanded && "rotate-180"
          )} />
        </Button>
      </div>
    </aside>
  )
}
