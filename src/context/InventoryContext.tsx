'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Category, Item } from '../../types';

interface InventoryContextProps {
  categories: Category[];
  items: Item[];
}

const InventoryContext = createContext<InventoryContextProps>(
  {} as InventoryContextProps
);

export const InventoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const testCategories: Category[] = [
    { id: '1', icon: '🍳', name: 'Breakfast' },
    { id: '2', icon: '🍔', name: 'Lunch' },
    { id: '3', icon: '🍽️', name: 'Dinner' },
    { id: '4', icon: '🥣', name: 'Soup' },
    { id: '5', icon: '🍨', name: 'Desserts' },
    { id: '6', icon: '🍱', name: 'Side Dish' },
    { id: '7', icon: '🥗', name: 'Appetizer' },
  ];

  const testItems: Item[] = [
    {
      id: '1',
      categoryId: '1',
      name: 'Pasta Bolognese',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 50.5,
      image: 'https://picsum.photos/200/200',
      available: 2,
    },
    {
      id: '2',
      categoryId: '1',
      name: 'Spicy Fried Chicken',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 45.7,
      image: 'https://picsum.photos/200/200',
      available: 2,
    },
    {
      id: '3',
      categoryId: '1',
      name: 'Grilled Steak',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 80.0,
      image: 'https://picsum.photos/200/200',
      available: 0,
    },
    {
      id: '4',
      categoryId: '1',
      name: 'Fish And Chips',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 90.4,
      available: 0,
    },
    {
      id: '5',
      categoryId: '2',
      name: 'Beef Bourguignon',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 75.5,
      available: 0,
    },
    {
      id: '6',
      categoryId: '2',
      name: 'Spaghetti Carbonara',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 35.3,
      image: 'https://picsum.photos/200/200',
      available: 2,
    },
    {
      id: '7',
      categoryId: '3',
      name: 'Ratatouille',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 26.7,
      image: 'https://picsum.photos/200/200',
      available: 0,
    },
    {
      id: '8',
      categoryId: '3',
      name: 'Kimchi Jjigae',
      description: 'Delicious beef lasagna with double chili Delicious beef',
      price: 45.7,
      image: 'https://picsum.photos/200/200',
      available: 0,
    },
  ];

  const [categories, setCategories] = useState<Category[]>(testCategories);
  const [items, setItems] = useState<Item[]>(testItems);

  const values = useMemo(
    () => ({
      categories,
      items,
    }),
    [categories, items]
  );

  return (
    <InventoryContext.Provider value={values}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = (): InventoryContextProps => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryContext');
  }
  return context;
};
