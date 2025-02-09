import { TrendingDown, TrendingUp } from 'lucide-react';
import { CardFooter } from './ui/card';

const TrendLabel = ({
  value,
  description,
}: {
  value: number;
  description: string;
}) => {
  return (
    <CardFooter className='flex-col items-start gap-2 text-sm'>
      <div className='flex gap-2 font-medium leading-none'>
        Trending {value >= 0 ? 'up' : 'down'} by {value}%{' '}
        {value >= 0 ? (
          <TrendingUp className='h-4 w-4' />
        ) : (
          <TrendingDown className='h-4 w-4' />
        )}
      </div>
      <div className='leading-none text-muted-foreground'>{description}</div>
    </CardFooter>
  );
};

export { TrendLabel };
