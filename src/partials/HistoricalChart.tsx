'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export const HistoricalChart = () => {
  const data = [
    { goal: 400 },
    { goal: 300 },
    { goal: 200 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 239 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 349 },
  ];

  return (
    <Card>
      <CardHeader>
        Move Goal
        <CardDescription>Set your daily activity goal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mt-3 h-[180px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
              <XAxis dataKey='goal' />
              <Tooltip />
              <Bar
                dataKey='goal'
                style={
                  {
                    fill: 'hsl(var(--foreground))',
                    opacity: 0.9,
                  } as React.CSSProperties
                }
                radius={4}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
