import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ItemSold } from '../../types';

const SaleRecord = ({ item }: { item: ItemSold }) => {
  return (
    <div className='flex items-center'>
      <div className='ml-4 space-y-1'>
        <p className='text-xl font-medium leading-none'>{item.name}</p>
        <p className='text-sm text-muted-foreground'>{item.category}</p>
      </div>
      <div className='ml-auto font-bold'>{item.price}€</div>
    </div>
  );
};

export function RecentSales({
  className,
  items,
}: {
  className?: string;
  items: ItemSold[];
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className='text-xl font-semibold'>Recent Sales</CardTitle>
        <CardDescription className='text-sm text-muted-foreground mt-1'>
          You made 265 sales this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {items.map((item, index) => (
            <SaleRecord key={index} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
