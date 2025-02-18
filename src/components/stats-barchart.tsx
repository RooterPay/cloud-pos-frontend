'use client';

import { Bar, BarChart } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChartContainer } from './ui/chart';

const StatsBarChart = ({
  title,
  value,
  description,
  data,
}: {
  title: string;
  value: string;
  description: string;
  data: object[];
}) => {
  const chartConfig = {
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--primary))',
    },
    subscription: {
      label: 'Subscriptions',
      color: 'hsl(var(--primary))',
    },
  };

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-normal'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
        <ChartContainer config={chartConfig} className='mt-2 h-[80px] w-full'>
          <BarChart data={data}>
            <Bar
              dataKey='subscription'
              fill='var(--color-subscription)'
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { StatsBarChart };
