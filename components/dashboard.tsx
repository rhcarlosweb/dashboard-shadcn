'use client'

import { createGlobalStyle } from 'styled-components'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Line, LineChart, Area, AreaChart } from "recharts"
import { ArrowDown, ArrowUp, CalendarIcon, DollarSign, Eye, PlayCircle, TrendingUp, Users, Video } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { SideMenu } from "@/components/SideMenu"
import { TopNav } from "@/components/TopNav"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0A0A0A;
    color: white;
  }
  
  table {
    background-color: transparent !important;
  }
`

export function DashboardComponent() {
  // Função auxiliar para gerar números aleatórios
  const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

  // Dados aleatórios para o gráfico de receita
  const revenueData = [
    { name: "Jan", total: randomNumber(800, 2000) },
    { name: "Fev", total: randomNumber(1000, 2500) },
    { name: "Mar", total: randomNumber(1500, 3000) },
    { name: "Abr", total: randomNumber(2000, 3500) },
    { name: "Mai", total: randomNumber(2500, 4000) },
    { name: "Jun", total: randomNumber(3000, 4500) },
  ]

  // Dados aleatórios para os mini gráficos dos cards
  const generateRandomChartData = () => {
    return Array.from({ length: 7 }, (_, i) => ({
      name: (i + 1).toString(),
      value: randomNumber(200, 800)
    }))
  }

  const revenueChartData = generateRandomChartData()
  const premiumViewsChartData = generateRandomChartData()
  const freeViewsChartData = generateRandomChartData()
  const videosChartData = generateRandomChartData()

  return (
    <>
      <GlobalStyle />
      <TopNav />
      <div className="flex pt-16">
        <SideMenu />
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 dark bg-[#0A0A0A] text-white">
          <div className="flex items-start justify-between space-y-2 flex-col sm:flex-row sm:items-center mb-4">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <select className="bg-[#1C1C1C] text-white border-[#262626] rounded-md p-2 text-base">
                <option value="week">Semana</option>
                <option value="month">Mês</option>
                <option value="year">Ano</option>
                <option value="all">Todo Período</option>
                <option value="custom">Personalizado</option>
              </select>
              <Button variant="outline" className="bg-[#0A0A0A] text-white border-[#262626] hover:bg-[#1C1C1C] text-base">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Filtrar Período
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-[#262626] bg-[#0A0A0A]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 15.231,89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% em relação ao mês passado
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueChartData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D80000" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#D80000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#D80000" fillOpacity={1} fill="url(#colorRevenue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#262626] bg-[#0A0A0A]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visualizações Vídeos Premium</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.234.567</div>
                <p className="text-xs text-muted-foreground">
                  +18% em relação ao mês passado
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={premiumViewsChartData}>
                      <defs>
                        <linearGradient id="colorPremiumViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D80000" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#D80000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#D80000" fillOpacity={1} fill="url(#colorPremiumViews)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#262626] bg-[#0A0A0A]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visualizações Vídeos Gratuitos</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.456.789</div>
                <p className="text-xs text-muted-foreground">
                  +25% em relação ao mês passado
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={freeViewsChartData}>
                      <defs>
                        <linearGradient id="colorFreeViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D80000" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#D80000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#D80000" fillOpacity={1} fill="url(#colorFreeViews)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#262626] bg-[#0A0A0A]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vídeos Enviados</CardTitle>
                <Video className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">
                  12 vídeos enviados este mês
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={videosChartData}>
                      <defs>
                        <linearGradient id="colorVideos" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D80000" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#D80000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#D80000" fillOpacity={1} fill="url(#colorVideos)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 border-[#262626] bg-[#0A0A0A]">
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={revenueData}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `R$${value}`}
                    />
                    <Bar dataKey="total" fill="#d82525" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-4 border-[#262626] bg-[#0A0A0A] lg:col-span-3">
              <CardHeader>
                <CardTitle>Vídeos em Destaque</CardTitle>
                <CardDescription className="text-gray-400">
                  Seus vídeos mais populares este mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-8">
                  {[
                    { title: "Como Ganhar Dinheiro com Vídeos", views: 450000, revenue: 2500, type: "Premium" },
                    { title: "Dicas de Edição de Vídeo", views: 302000, revenue: 1800, type: "Gratuito" },
                    { title: "Segredos do YouTube", views: 280000, revenue: 1600, type: "Premium" },
                  ].map((video, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="relative w-full sm:w-24 sm:h-18 bg-gray-700 rounded">
                        <img
                          src={`https://placehold.co/192x144`}
                          alt={video.title}
                          className="object-cover aspect-[4/3] rounded w-full h-full"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none line-clamp-2">{video.title}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-muted-foreground">
                            {video.views >= 1000000
                              ? `${(video.views / 1000000).toFixed(1)}M`
                              : video.views >= 1000
                              ? `${(video.views / 1000).toFixed(1)}K`
                              : video.views} visualizações
                          </p>
                        </div>
                        
                        <span className={`px-2 py-0.5 text-xs rounded-full inline-block ${
                          video.type === "Premium" ? "bg-yellow-500/10 text-yellow-500" : "bg-zinc-500/10 text-zinc-500"
                        }`}>
                          {video.type}
                        </span>
                      </div>
                      <div className="font-medium sm:text-right w-full sm:w-auto">R$ {video.revenue.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-8 border-[#262626] bg-[#0A0A0A]">
              <CardHeader>
                <CardTitle>Vídeos Recentes</CardTitle>
                <CardDescription className="text-gray-400">
                  Você publicou 12 vídeos este mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="border-b-[#262626]">
                      <TableHead className="w-[50%] sm:w-[300px] text-gray-400">Vídeo</TableHead>
                      <TableHead className="text-gray-400 hidden sm:table-cell">Visualizações</TableHead>
                      <TableHead className="text-gray-400 hidden sm:table-cell">Receita</TableHead>
                      <TableHead className="text-right text-gray-400">Tipo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { title: "Dicas de SEO", views: 45000, revenue: 350, type: "Gratuito" },
                      { title: "Curso Avançado", views: 12000, revenue: 1200, type: "Premium" },
                      { title: "Entrevista Especial", views: 78000, revenue: 620, type: "Gratuito" },
                      { title: "Tutorial Rápido", views: 28000, revenue: 180, type: "Gratuito" },
                      { title: "Análise de Produto", views: 35000, revenue: 450, type: "Premium" },
                    ].map((video, index) => (
                      <TableRow key={index} className="border-b-[#262626]">
                        <TableCell className="font-medium text-gray-300">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-16 h-12 bg-gray-700 rounded hidden sm:block">
                              <img
                                src={`https://placehold.co/64x48`}
                                alt={video.title}
                                className="object-cover rounded"
                              />
                            </div>
                            <span className="line-clamp-2">{video.title}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300 hidden sm:table-cell">
                          {video.views >= 1000000
                            ? `${(video.views / 1000000).toFixed(1)}M`
                            : video.views >= 1000
                            ? `${(video.views / 1000).toFixed(1)}K`
                            : video.views}
                        </TableCell>
                        <TableCell className="text-gray-300 hidden sm:table-cell">R$ {video.revenue.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            video.type === "Premium" ? "bg-yellow-500/10 text-yellow-500" : "bg-zinc-500/10 text-zinc-500"
                          }`}>
                            {video.type}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
          </div>
      </div>
    </div>
  </>
)
}