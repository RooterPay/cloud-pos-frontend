import Image from 'next/image';
import { MinusIcon, PlusIcon, ShoppingBagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Item } from '../../types';

const GoodsCard = ({
  item,
  quantity,
  add,
  remove,
}: {
  item: Item;
  quantity: number;
  add: (id: string) => void;
  remove: (id: string) => void;
}) => {
  return (
    <Card key={item.id} className='overflow-hidden'>
      <CardContent className='p-4'>
        <div className='flex mb-4'>
          <div className='hidden sm:block'>
            {item.image && (
              <Image
                height={200}
                width={200}
                src={item.image}
                alt={item.name}
                className='rounded-lg object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
              />
            )}
          </div>
          <div className='ml-0 sm:ml-3 flex-1'>
            <h3 className='font-medium text-lg'>{item.name}</h3>
            <p className='text-sm text-gray-500 line-clamp-2'>
              {item.description}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-lg font-semibold'>
            {item.price.toFixed(2)}€
          </span>
          <div className='flex items-center space-x-2'>
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8'
              onClick={() => remove(item.id)}
              disabled={quantity <= 0}
            >
              <MinusIcon className='h-4 w-4' />
            </Button>
            <span className='w-8 text-center'>
              {quantity}/{item.available}
            </span>
            <Button
              variant='default'
              size='icon'
              className='h-8 w-8'
              onClick={() => add(item.id)}
              disabled={quantity >= item.available}
            >
              <PlusIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { GoodsCard };
