'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  title: string;
  description: string;
  url: string;
  close?: () => void;
}

const Banner = ({ title, description, url, close }: BannerProps) => {
  return (
    <section className='w-full border-b bg-white px-4 py-3 shadow-sm'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex-1 text-center'>
          <span className='text-sm'>
            <span className='font-medium'>{title}</span>{' '}
            <span className='text-muted-foreground'>
              <a
                href={url}
                className='underline underline-offset-4 hover:text-foreground'
                target='_blank'
              >
                {description}
              </a>
            </span>
          </span>
        </div>

        {close && (
          <Button
            variant='ghost'
            size='icon'
            className='-mr-2 h-8 w-8 flex-none'
            onClick={close}
          >
            <X className='h-4 w-4' />
          </Button>
        )}
      </div>
    </section>
  );
};

export { Banner };
