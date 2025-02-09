import { cookies } from 'next/headers';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { InventoryContextProvider } from '@/context/InventoryContext';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <InventoryContextProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <BreadcrumbNav />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </InventoryContextProvider>
  );
}
