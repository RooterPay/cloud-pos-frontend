import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CardHeader, CardTitle, CardDescription } from './ui/card';

const TimeSelector = () => {
  return (
    <Select defaultValue='day'>
      <SelectTrigger className='w-[120px] h-8'>
        <SelectValue placeholder='Day' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time Period</SelectLabel>
          <SelectItem value='day'>Last 24h</SelectItem>
          <SelectItem value='week'>Last Week</SelectItem>
          <SelectItem value='month'>Last Month</SelectItem>
          <SelectItem value='year'>Last Year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const HeaderWithSelector = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
      <div>
        <CardTitle className='text-xl font-semibold'>{title}</CardTitle>
        <CardDescription className='text-sm text-muted-foreground mt-1'>
          {description}
        </CardDescription>
      </div>
      <TimeSelector />
    </CardHeader>
  );
};

export { TimeSelector, HeaderWithSelector };
