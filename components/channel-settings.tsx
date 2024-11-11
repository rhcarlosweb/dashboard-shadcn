'use client'

import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { Trash2, Upload, Plus, Instagram, Facebook, Twitter, Youtube, Twitch, TikTok, Globe } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { SideMenu } from "@/components/SideMenu"
import { TopNav } from "@/components/TopNav"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0A0A0A;
    color: white;
  }
`

type SocialLink = {
  id: string
  platform: string
  url: string
}

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  twitch: Twitch,
  tiktok: TikTok,
  website: Globe
}

export function ChannelSettingsComponent() {
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [avatar, setAvatar] = useState<string | null>(null)
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])

  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      { id: Math.random().toString(), platform: 'instagram', url: '' }
    ])
  }

  const removeSocialLink = (id: string) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id))
  }

  const updateSocialLink = (id: string, field: 'platform' | 'url', value: string) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ))
  }

  return (
    <>
      <GlobalStyle />
      <TopNav />
      <div className="flex pt-16">
        <SideMenu />
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 dark bg-[#0A0A0A] text-white">
          <div className="flex items-start justify-between space-y-2 flex-col sm:flex-row sm:items-center mb-4">
            <h2 className="text-3xl font-bold tracking-tight">Configurações do Canal</h2>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-[#262626] bg-[#0A0A0A]">
                <CardHeader>
                  <CardTitle>Imagem de Capa</CardTitle>
                  <CardDescription className="text-gray-400">
                    Imagem que aparecerá no topo do seu canal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {coverImage && (
                      <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        className="hidden"
                        id="cover-upload"
                      />
                      <Label
                        htmlFor="cover-upload"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] text-white rounded-md cursor-pointer hover:bg-[#262626] transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Upload Capa
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#262626] bg-[#0A0A0A]">
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Imagem de perfil do seu canal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {avatar && (
                      <div className="relative w-32 h-32 bg-gray-800 rounded-full overflow-hidden">
                        <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                        id="avatar-upload"
                      />
                      <Label
                        htmlFor="avatar-upload"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] text-white rounded-md cursor-pointer hover:bg-[#262626] transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Upload Avatar
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-[#262626] bg-[#0A0A0A]">
              <CardHeader>
                <CardTitle>Links Plataformas</CardTitle>
                <CardDescription className="text-gray-400">
                  Adicione links para suas outras platafo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.platform as keyof typeof socialIcons]
                    return (
                      <div key={link.id} className="flex items-center gap-4">
                        <Icon className="size-5" />
                        <Input
                          type="text"
                          placeholder={`Link da ${link.platform}`}
                          value={link.url}
                          onChange={(e) => updateSocialLink(link.id, 'url', e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeSocialLink(link.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )
                  })}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={addSocialLink}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
