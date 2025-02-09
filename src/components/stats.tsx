import { JSX } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const Stats = ({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon?: JSX.Element;
}) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
};

export { Stats };
