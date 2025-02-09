import React from 'react';
import { PlusCircle, Store } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Store as StoreType } from '../../types';
import Image from 'next/image';

const SelectStore = ({
  stores,
  select,
}: {
  stores: StoreType[];
  select: (id: string) => void;
}) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4'>
      {/* Header Section */}
      <header className='mb-8 text-center'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Select a Store to manage
        </h1>
        <p className='text-gray-600 mt-2'>
          Choose one of your stores to get started.
        </p>
      </header>

      {stores.length > 0 ? (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {stores.map((store, index) => {
            return (
              <Card
                key={index}
                className='cursor-pointer transition transform hover:scale-102 duration-200 hover:shadow-lg p-6 bg-white border border-gray-200 rounded-lg flex flex-col items-center'
                onClick={() => select(store.id)}
              >
                {store.image ? (
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={48}
                    height={48}
                  />
                ) : (
                  <Store className='h-12 w-12 mb-4' aria-hidden='true' />
                )}
                <h2 className='text-xl font-semibold text-gray-800'>
                  {store.name}
                </h2>
                <p className='text-gray-500'>{store.location}</p>
              </Card>
            );
          })}
          <Card className='cursor-pointer transition transform hover:scale-102 duration-200 hover:shadow-lg p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center'>
            <PlusCircle className='h-12 w-12 mb-4' aria-hidden='true' />
            <h2 className='text-xl font-semibold'>Add Store</h2>
          </Card>
        </div>
      ) : (
        <p className='text-gray-500'>No stores available. Please add one.</p>
      )}
    </div>
  );
};

export { SelectStore };
