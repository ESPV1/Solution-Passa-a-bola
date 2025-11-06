"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart"

const chartData = [
  { stat: "Ritmo", points: 200 },
  { stat: "Finalização", points: 250 },
  { stat: "Passe", points: 230 },
  { stat: "Dribles", points: 200 },
  { stat: "Defesa", points: 50 },
  { stat: "Físico", points: 180 },
]

const chartConfig = {
  points: {
    label: "Pontos",
    color: "var(--chart-5)",
  },
}

export function ChartRadar() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Desempenho</CardTitle>
        <CardDescription>
          Pontos fortes e pontos fracos
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="stat" />
            <PolarGrid />
            <Radar
              dataKey="points"
              fill="var(--color-points)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          O desempenho melhorou 5.2% nesse mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Janeiro - Junho de 2024
        </div>
      </CardFooter>
    </Card>
  )
}