import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '../../types';

const CategoryCard = ({
  category,
  count,
  active,
  click,
}: {
  category: Category;
  count: number;
  active: boolean;
  click: () => void;
}) => {
  return (
    <Card
      className={`cursor-pointer ${
        active ? 'bg-black/80 text-white' : 'bg-white'
      }`}
      onClick={click}
    >
      <CardContent className='flex items-center p-2 md:p-4'>
        <div className='flex justify-between w-full'>
          <h3 className='font-medium text-sm md:text-lg'>{category.name}</h3>
          <p className='font-light text-xs md:text-sm opacity-75'>{count}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryCardAdd = () => {
  return (
    <Card className='cursor-pointer'>
      <CardContent className='flex flex-col items-center justify-center p-4'>
        <span className='text-2xl mb-2'>
          <Plus />
        </span>
        <h3 className='font-medium text-lg text-center'>Add one</h3>
      </CardContent>
    </Card>
  );
};

export { CategoryCard, CategoryCardAdd };
