"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
  { month: "Janeiro", goals: 10, assists: 6 },
  { month: "Fevereiro", goals: 5, assists: 5 },
  { month: "Março", goals: 13, assists: 4 },
  { month: "Abril", goals: 17, assists: 7 },
  { month: "Maio", goals: 5, assists: 8 },
  { month: "Junho", goals: 9, assists: 10 },
]

const chartConfig = {
  goals: {
    label: "Gols",
    color: "var(--chart-5)",
  },
  assists: {
    label: "Assistências",
    color: "var(--chart-5)",
  },
}

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gols e Assistências</CardTitle>
        <CardDescription>Janeiro - Junho de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="goals" fill="var(--color-goals)" radius={4} />
            <Bar dataKey="assists" fill="var(--color-assists)" opacity={0.5} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none text-center">
          Gols e assistências nos últimos seis meses
        </div>
      </CardFooter>
    </Card>
  )
}