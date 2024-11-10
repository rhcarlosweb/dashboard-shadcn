'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="border-b border-[#262626] bg-[#0A0A0A] fixed w-full z-50">
      <div className="flex h-16 items-center px-4 justify-between">
        <img
          src="https://www.pornocarioca.com/wp-content/themes/pornocarioca/images/logo/novembro-azul/header-logo.png"
          alt="Logo"
          className="h-12"
        />
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 hover:bg-[#1C1C1C] p-2 rounded-md transition-colors"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User avatar"
              className="h-8 w-8 rounded-full bg-[#1C1C1C]"
            />
            <ChevronDown className={cn(
              "h-4 w-4 text-gray-400 transition-transform duration-200",
              isOpen && "rotate-180"
            )} />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-[#1A1A1A] shadow-lg ring-1 ring-black ring-opacity-5 py-1 animate-in fade-in slide-in-from-top-5">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#262626] transition-colors">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#262626] transition-colors">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#262626] transition-colors">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
