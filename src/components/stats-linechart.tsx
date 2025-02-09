'use client';

import { Line, LineChart } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChartContainer } from './ui/chart';

const StatsLineChart = ({
  title,
  value,
  description,
  data,
}: {
  title: string;
  value: string;
  description: string;
  data: {}[];
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
      <CardContent className='pb-0'>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
        <ChartContainer config={chartConfig} className='h-[80px] w-full'>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Line
              type='monotone'
              strokeWidth={2}
              dataKey='revenue'
              stroke='var(--color-revenue)'
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { StatsLineChart };
