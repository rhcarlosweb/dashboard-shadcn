import { Search, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TopNav() {
  return (
    <div className="border-b border-[#262626] bg-[#0A0A0A] fixed w-full z-50">
      <div className="flex h-16 items-center px-4 gap-4">
        <img
          src="https://www.pornocarioca.com/wp-content/themes/pornocarioca/images/logo/novembro-azul/header-logo.png"
          alt="Logo"
          className="h-8"
        />
        
        <div className="flex-1 ml-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Buscar..."
              className="w-full max-w-[400px] bg-[#1C1C1C] text-white border-[#262626] rounded-md pl-8 p-2 focus:outline-none focus:ring-1 focus:ring-[#D80000]"
            />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-[#1C1C1C] py-2 px-3 rounded-md">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-[#1C1C1C] border-[#262626] text-white">
            <DropdownMenuItem className="hover:bg-[#262626] cursor-pointer">
              Meu Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#262626] cursor-pointer text-red-500">
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
