'use client';

import { LabelList, Pie, PieChart } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { HeaderWithSelector } from '@/components/time-selector';

const chartData = [
  { store: 'store1', customers: 275, fill: 'var(--chart-1)' },
  { store: 'store2', customers: 200, fill: 'var(--chart-2)' },
  { store: 'store3', customers: 187, fill: 'var(--chart-3)' },
];

const chartConfig = {
  customers: {
    label: 'Customers',
  },
  store1: {
    label: 'Store 1',
    color: 'hsl(var(--chart-1))',
  },
  store2: {
    label: 'Store 2',
    color: 'hsl(var(--chart-2))',
  },
  store3: {
    label: 'Store 3',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function StoresChart({
  className,
  timePeriod,
}: {
  className?: string;
  timePeriod: string;
}) {
  return (
    <Card className={className}>
      <HeaderWithSelector title='Sales by Store' description={timePeriod} />
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background'
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey='customers' hideLabel />}
            />
            <Pie data={chartData} dataKey='customers'>
              <LabelList
                dataKey='store'
                className='fill-background'
                stroke='none'
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
