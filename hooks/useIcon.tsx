import { useEffect, useState } from 'react'
import * as LucideIcons from 'lucide-react'

type IconType = (props: { className?: string }) => JSX.Element

const toPascalCase = (str: string): string => {
  // Primeiro, trata possíveis formatos (kebab-case, snake_case, etc)
  const words = str
    .replace(/[-_]+/g, ' ') // Substitui hífens e underscores por espaços
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Separa camelCase
    .split(' ')
    .filter(word => word.length > 0)

  // Converte para PascalCase
  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export function useIcon(name: string): IconType {
  const [CustomIcon, setCustomIcon] = useState<IconType | null>(null)
  
  useEffect(() => {
    // Tenta carregar o ícone SVG personalizado
    fetch(`/icons/${name}.svg`)
      .then(response => {
        if (response.ok) {
          setCustomIcon(() => ({ className }: { className?: string }) => (
            <img 
              src={`/icons/${name}.svg`} 
              className={className} 
              alt={name}
            />
          ))
        }
      })
      .catch(() => {
        // Silently fail - will use fallback
      })
  }, [name])

  // Tenta encontrar o ícone Lucide correspondente
  const lucideIconName = toPascalCase(name)
  const LucideIcon = (LucideIcons as Record<string, IconType>)[lucideIconName]

  // Retorna o ícone personalizado se existir, senão o ícone Lucide, ou um fallback
  return CustomIcon || LucideIcon || (({ className }) => (
    <LucideIcons.HelpCircle className={className} />
  ))
}
