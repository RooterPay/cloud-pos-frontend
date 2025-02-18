'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { pathSplitter } from '@/lib/utils';

const BreadcrumbNav = () => {
  const path = usePathname();

  // Split the path into parts and accumulate paths for correct navigation
  const tags = useMemo(() => {
    const parts = pathSplitter(path);
    return parts.map((tag, index) => ({
      label: tag,
      href: '/' + parts.slice(0, index + 1).join('/'),
    }));
  }, [path]);

  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb>
          <BreadcrumbList>
            {tags.map((tag, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem className='hidden md:block capitalize'>
                  <BreadcrumbLink href={tag.href}>
                    {tag.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < tags.length - 1 && (
                  <BreadcrumbSeparator className='hidden md:block' />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export { BreadcrumbNav };
