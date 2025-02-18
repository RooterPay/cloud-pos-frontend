import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Space_Grotesk } from 'next/font/google';
import { AppContextProvider } from '@/context/AppContext';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { InventoryContextProvider } from '@/context/InventoryContext';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rooter - Cloud POS',
  description: '',
  robots: 'noindex,nofollow',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = true; // TODO fixme
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <html lang='en'>
      <body
        className={`${spaceGrotesk.className} antialiased scroll-smooth m-0 p-0 motion-reduce:transform-none`}
      >
          {loggedIn &&

        <AppContextProvider>
        <InventoryContextProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <BreadcrumbNav />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </InventoryContextProvider>
        </AppContextProvider>
}

{!loggedIn && <>{children}</>}
      </body>
    </html>
  );
}
