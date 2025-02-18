'use client';

import { useState } from 'react';
import { Calendar, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HistoricalChart } from '@/partials/HistoricalChart';
import { PageWrapper } from '@/partials/PageWrapper';
import { RecentSales } from '@/partials/RecentSales';
import { ItemSold } from '../../../types';
import { DatePicker } from '@/components/date-picker';
import { today, getLocalTimeZone } from '@internationalized/date';
import { DateRange } from 'react-aria-components';

export default function Page() {
  const items: ItemSold[] = [
    {
      id: '1',
      name: 'test',
      category: 'food',
      price: 200,
      timestamp: new Date().getTimezoneOffset(),
    },
  ];

  const [show, setShow] = useState<boolean>(false);
  const now = today(getLocalTimeZone());
  const [date, setDate] = useState<DateRange | null>({
    start: now,
    end: now.add({ days: 3 }),
  });

  return (
    <PageWrapper>
      <div className='grid gap-4 grid-col-1'>
        <div className='flex gap-2 md:gap-4 items-center justify-left'>
          <div className='flex items-center gap-2'>
            <Button
              className='aspect-square max-sm:p-0'
              onClick={() => setShow(true)}
            >
              <Calendar
                className='opacity-60 sm:-ms-1 sm:me-2'
                size={16}
                strokeWidth={2}
                aria-hidden='true'
              />
              <span className='max-sm:sr-only'>
                {date
                  ? `${date.start.toDate('utc').toLocaleDateString()} - ${date.end.toDate('utc').toLocaleDateString()}`
                  : 'Date Range'}
              </span>
            </Button>
            {show && <DatePicker date={date} setDate={setDate} />}
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='outline' className='aspect-square max-sm:p-0'>
              <FileDown
                className='opacity-60 sm:-ms-1 sm:me-2'
                size={16}
                strokeWidth={2}
                aria-hidden='true'
              />
              <span className='max-sm:sr-only'>Export</span>
            </Button>
          </div>
        </div>
        <HistoricalChart />
        <RecentSales items={items} />
      </div>
    </PageWrapper>
  );
}
