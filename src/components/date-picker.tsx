'use client';

import { RangeCalendar } from '@/components/ui/calendar-rac';
import type { DateRange } from 'react-aria-components';

const DatePicker = ({
  date,
  setDate,
}: {
  date: DateRange | null;
  setDate: (d: DateRange | null) => void;
}) => {
  return (
    <RangeCalendar
      className='rounded-lg border border-border p-2'
      value={date}
      onChange={setDate}
    />
  );
};

export { DatePicker };
