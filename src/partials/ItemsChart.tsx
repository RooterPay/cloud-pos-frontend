'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { HeaderWithSelector } from '@/components/time-selector';
import { TrendLabel } from '@/components/trend-label';
const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function ItemsChart({
  className,
  timePeriod,
}: {
  className?: string;
  timePeriod: string;
}) {
  return (
    <Card className={className}>
      <HeaderWithSelector title='Sales by Items' description={timePeriod} />
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={8}>
              <LabelList
                position='top'
                offset={12}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <TrendLabel value={12} description='' />
    </Card>
  );
}
