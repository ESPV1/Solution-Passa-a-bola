"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A line chart"

const chartData = [
  { month: "Janeiro", minutes: 186 },
  { month: "Fevereiro", minutes: 305 },
  { month: "Março", minutes: 237 },
  { month: "Abril", minutes: 73 },
  { month: "Maio", minutes: 209 },
  { month: "Junho", minutes: 214 },
]

const chartConfig = {
  minutes: {
    label: "Minutos",
    color: "var(--chart-5)",
  },
}

export function ChartLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Minutos em campo</CardTitle>
        <CardDescription>Janeiro - Junho de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="minutes"
              type="natural"
              stroke="var(--color-minutes)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none text-center">
          Veja a quantidade de minutos jogados em cada mês
        </div>
      </CardFooter>
    </Card>
  )
}
