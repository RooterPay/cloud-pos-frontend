'use client';

import { EuroIcon, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import InputWithIcon from '@/components/input-icon';
import NumberRange from '@/components/number-range';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export const TriggerButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateProductModal open={open} setOpen={setOpen} />
      <Button onClick={() => setOpen(true)}>
        <Plus className='h-4 w-4 mr-2' />
        Add
      </Button>
    </>
  );
};

export const CreateProductModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (status: boolean) => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold'>
            Create New Product
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-2 mt-2'>
            <Label htmlFor='name' className='text-sm font-medium'>
              Product Name
            </Label>
            <Input
              id='name'
              placeholder='Enter product name'
              className='w-full'
            />
          </div>

          <div className='space-y-2 mt-2'>
            <Label htmlFor='description' className='text-sm font-medium'>
              Description
            </Label>
            <Textarea
              id='description'
              placeholder='Enter product description'
              className='w-full min-h-[100px] resize-none'
            />
          </div>

          <div className='space-y-2 mt-2'>
            <Label htmlFor='category' className='text-sm font-medium'>
              Category
            </Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value='food'>Food</SelectItem>
                  <SelectItem value='garment'>Garment</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='flex gap-2'>
            <div className='space-y-2 mt-2'>
              <Label htmlFor='price' className='text-sm font-medium'>
                Price
              </Label>
              <InputWithIcon
                id='price'
                type='number'
                placeholder='0.00'
                CustomIcon={EuroIcon}
                className='w-full'
              />
            </div>

            <div className='space-y-2 mt-2'>
              <Label htmlFor='stock' className='text-sm font-medium'>
                Stock Quantity
              </Label>
              <NumberRange
                id='stock'
                className='w-full'
                defaultValue={1}
                minValue={0}
              />
            </div>
          </div>

          <div className='mt-8 flex justify-center gap-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => setOpen(false)}
              className='hover:bg-secondary/80'
            >
              Cancel
            </Button>
            <Button type='submit' className='hover:bg-primary/90'>
              Create Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
