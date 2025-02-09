'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX, useMemo } from 'react';
import {
  BadgePercent,
  Blocks,
  BookCheck,
  Bot,
  Coins,
  Dock,
  Home,
  Settings,
  ShoppingBag,
  Users,
} from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { pathSplitter } from '@/lib/utils';

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
  const tags = useMemo(() => {
    return pathSplitter(path);
  }, [path]);

  const storeId = useMemo(() => {
    return tags[0];
  }, [path]);

  const active = useMemo(() => {
    if (title === 'Dashboard') return tags.length === 1;
    return tags.length > 1 && tags[1].includes(url);
  }, [path]);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={active}>
        <Link href={`/${storeId}/${url}`}>
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
        <MenuItem title='Dashboard' url='' icon={<Home />} path={pathname} />
        <MenuItem
          title='Sell'
          url='sell'
          icon={<ShoppingBag />}
          path={pathname}
        />
        <MenuItem
          title='Inventory'
          url='inventory'
          icon={<Blocks />}
          path={pathname}
        />
        <MenuItem
          title='Transactions'
          url='transactions'
          icon={<Dock />}
          path={pathname}
        />
        <MenuItem
          title='Promotions'
          url='promotions'
          icon={<BadgePercent />}
          path={pathname}
        />
        <MenuItem title='AI' url='ai' icon={<Bot />} path={pathname} />
        <SidebarGroupLabel>Extra</SidebarGroupLabel>
        <div className='group-data-[collapsible=icon]:hidden'>
          <MenuItem
            title='Accounts'
            url='accounts'
            icon={<Users />}
            path={pathname}
          />
          <MenuItem
            title='Settings'
            url='settings'
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
