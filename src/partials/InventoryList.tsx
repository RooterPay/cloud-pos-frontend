import React from 'react';
import {
  Box,
  TrendingUp,
  ShoppingBag,
  TrendingDown,
  BadgePercent,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

type ProductCardProps = {
  name: string;
  category: string;
  image?: string;
  sales: number;
  trend: number;
  stock: number;
  price: string;
  offer?: number;
};

function ProductCard({
  name,
  category,
  image,
  sales,
  trend,
  stock,
  price,
  offer,
}: ProductCardProps) {
  return (
    <Card>
      <CardContent className='flex flex-col sm:flex-row items-center gap-4 py-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className='flex flex-col flex-1 text-center sm:text-left'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className='text-sm text-muted-foreground'>{category}</p>
        </div>

        <div className='flex flex-col flex-1 items-center'>
          <p className='text-sm text-muted-foreground'>Performance</p>
          <div className='flex items-center gap-2 text-sm'>
            {trend > 0 ? (
              <TrendingUp className='w-4 h-4 text-muted-foreground' />
            ) : (
              <TrendingDown className='w-4 h-4 text-muted-foreground' />
            )}
            <span className='font-medium'>{trend}%</span>
            <p>|</p>
            <ShoppingBag className='w-4 h-4 text-muted-foreground' />
            <span className='font-medium'>{(sales / 1000).toFixed(1)}k</span>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center'>
          <p className='text-sm text-muted-foreground'>Stock</p>
          <div className='flex items-center gap-1'>
            <Box className='w-4 h-4 text-muted-foreground' />
            <span className='font-medium'>{stock}</span>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center'>
          <p className='text-sm text-muted-foreground'>Price</p>
          <div className='flex items-center gap-1'>
            {offer ? (
              <>
                <BadgePercent className='w-4 h-4 text-muted-foreground' />
                <span className='font-medium line-through'>{price}€</span>
                <p>|</p>
                <span className='font-medium'>{offer}€</span>
              </>
            ) : (
              <span className='font-medium'>{price}€</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InventoryList() {
  const products = [
    {
      name: 'test',
      category: 'food',
      image: '',
      sales: 100,
      trend: -10,
      stock: 0,
      price: 100,
      offer: 90,
    },
  ];

  return (
    <>
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <ProductCard
            name={product.name}
            category={product.category}
            image={product.image}
            sales={product.sales}
            trend={product.trend}
            stock={product.stock}
            price={product.price.toString()}
            offer={product.offer}
          />
          <Separator className='mt-2 md:mt-4' />
        </React.Fragment>
      ))}
    </>
  );
}

export { ProductCard, InventoryList };
