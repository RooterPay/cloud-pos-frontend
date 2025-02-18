'use client';

import { JSX, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BadgePercent,
  Blocks,
  BookCheck,
  Dock,
  Home,
  Settings,
  ShoppingBag,
} from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const MenuItem = ({
  title,
  url,
  icon,
  path,
}: {
  title: string;
  url: string;
  icon: JSX.Element;
  path: string;
}) => {
  const active = useMemo(() => {
    if (url === '/') {
      return path === url;
    }
    return path.startsWith(url);
  }, [path, url]);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={active}>
        <Link href={url}>
          {icon}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarGroupLabel>Store</SidebarGroupLabel>
        <MenuItem title='Dashboard' url='/' icon={<Home />} path={pathname} />
        <MenuItem
          title='Checkout'
          url='/checkout'
          icon={<ShoppingBag />}
          path={pathname}
        />
        <MenuItem
          title='Inventory'
          url='/inventory'
          icon={<Blocks />}
          path={pathname}
        />
        <MenuItem
          title='Transactions'
          url='/transactions'
          icon={<Dock />}
          path={pathname}
        />
        <MenuItem
          title='Promotions'
          url='/promotions'
          icon={<BadgePercent />}
          path={pathname}
        />
        <SidebarGroupLabel>Extra</SidebarGroupLabel>
        <div className='group-data-[collapsible=icon]:hidden'>
          <MenuItem
            title='Settings'
            url='/settings'
            icon={<Settings />}
            path={pathname}
          />
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='https://docs.rooterpay.com'>
                <BookCheck />
                <span>Docs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
