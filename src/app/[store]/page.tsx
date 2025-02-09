import React, { useMemo } from 'react';
import { getWeekLabel } from '@/lib/utils';
import { StatsLineChart } from '@/components/stats-linechart';
import { RecentSales } from '@/partials/RecentSales';
import { PageWrapper } from '@/partials/PageWrapper';
import { SalesOverview } from '@/partials/SalesOverview';
import { CategoriesChart } from '@/partials/CategoriesChart';
import { StoresChart } from '@/partials/StoresChart';
import { ItemSold } from '../../../types';
import { ItemsChart } from '@/partials/ItemsChart';

export default function Page() {
  const thisWeek = useMemo(() => getWeekLabel(), []);

  const data = [
    {
      revenue: 10400,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 9400,
      subscription: 200,
    },
    {
      revenue: 8200,
      subscription: 278,
    },
    {
      revenue: 7000,
      subscription: 189,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 11244,
      subscription: 278,
    },
    {
      revenue: 26475,
      subscription: 189,
    },
  ];

  return (
    <PageWrapper>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <StatsLineChart
          title='Net sales'
          value='111€'
          description={thisWeek}
          data={data}
        />
        <StatsLineChart
          title='Refunds'
          value='-9€'
          description={thisWeek}
          data={data}
        />
        <StatsLineChart
          title='Avg. Bill Size'
          value='+12%'
          description={thisWeek}
          data={data}
        />
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <SalesOverview className='col-span-4' />
        <StoresChart className='col-span-3' timePeriod={thisWeek} />
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <CategoriesChart timePeriod={thisWeek} />
        <ItemsChart timePeriod={thisWeek} />
      </div>
    </PageWrapper>
  );
}
