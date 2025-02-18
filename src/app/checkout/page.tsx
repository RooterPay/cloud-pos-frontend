'use client';

import React, { useState } from 'react';
import { ShoppingBasket } from 'lucide-react';
import { CategoryCard } from '@/components/category-card';
import { GoodsCard } from '@/components/goods-card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination';
import { useInventory } from '@/context/InventoryContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageWrapper } from '@/partials/PageWrapper';

export default function Page() {
  const { categories, items } = useInventory();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    (categories && categories[0]?.id) || ''
  );
  const [cart, setCart] = useState<Record<string, number>>({});

  const addItem = (itemId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeItem = (itemId: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  return (
    <PageWrapper>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 mb-8'>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            click={() => setSelectedCategoryId(category.id)}
            count={items.filter((i) => i.categoryId === category.id).length}
            category={category}
            active={selectedCategoryId === category.id}
          />
        ))}
      </div>

      <h2 className='text-xl md:text-2xl font-bold mb-6 flex justify-between items-center'>
        Add To Cart
        {Object.keys(cart).length > 0 && (
          <Button className='aspect-square max-sm:p-0'>
            <ShoppingBasket
              className='opacity-60 sm:-ms-1 sm:me-2'
              size={16}
              strokeWidth={2}
              aria-hidden='true'
            />
            <span className='max-sm:sr-only'>Checkout</span>
          </Button>
        )}
      </h2>
      <Input type='text' placeholder='Search for an item' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items
          .filter((item) => item.categoryId == selectedCategoryId)
          .map((item, index) => (
            <GoodsCard
              key={index}
              item={item}
              quantity={Object.keys(cart).reduce(
                (acc, i) => (i === item.id ? acc + cart[i] : acc),
                0
              )}
              add={addItem}
              remove={removeItem}
            />
          ))}
      </div>

      <div className='flex justify-center mt-8'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </PageWrapper>
  );
}
