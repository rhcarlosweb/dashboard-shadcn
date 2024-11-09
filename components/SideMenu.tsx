'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  ChevronLeft, 
  LayoutDashboard, 
  Video, 
  Users, 
  Settings, 
  BarChart3,
  LogOut
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Video, label: 'Vídeos', href: '/videos' },
  { icon: Users, label: 'Assinantes', href: '/subscribers' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Configurações', href: '/settings' },
]

export function SideMenu() {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={cn(
      "h-screen sticky top-0 bg-[#0A0A0A] border-r border-[#262626] flex flex-col transition-all duration-300 relative",
      expanded ? "w-64" : "w-16"
    )}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setExpanded(prev => !prev)}
        className={cn(
          "absolute -right-3 top-4 hover:bg-[#1C1C1C] bg-[#0A0A0A] border border-[#262626]",
          "h-6 w-6 p-0"
        )}
      >
        <ChevronLeft className={cn(
          "h-4 w-4 text-white transition-all",
          !expanded && "rotate-180"
        )} />
      </Button>

      <div className="p-4 pb-2 flex justify-center">
        <img
          src="https://www.pornocarioca.com/wp-content/themes/pornocarioca/images/logo/novembro-azul/header-logo.png"
          alt="Logo"
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "w-32" : "w-0"
          )}
        />
      </div>

      <nav className="flex-1 p-2 flex flex-col gap-1">
        {menuItems.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            className={cn(
              "flex items-center px-3 py-2 text-sm text-white hover:bg-[#1C1C1C] rounded-md transition-colors",
              href === '/' && "bg-[#1C1C1C]",
              expanded ? "justify-start gap-4" : "justify-center"
            )}
          >
            <Icon className="h-4 w-4 text-white flex-shrink-0" />
            <span className={cn(
              "overflow-hidden transition-all",
              expanded ? "w-52 opacity-100" : "w-0 opacity-0"
            )}>
              {label}
            </span>
          </a>
        ))}
      </nav>

      <div className="p-2">
        <button className={cn(
          "flex items-center px-3 py-2 text-white hover:bg-[#1C1C1C] rounded-md transition-colors w-full",
          expanded ? "justify-start gap-4" : "justify-center"
        )}>
          <LogOut className="h-4 w-4 text-white" />
          <span className={cn(
            "overflow-hidden transition-all",
            expanded ? "w-52 opacity-100" : "w-0 opacity-0"
          )}>
            Sair
          </span>
        </button>
      </div>
    </aside>
  )
}
