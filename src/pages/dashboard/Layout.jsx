import { AppSidebar } from '@/components/shared/sidebar/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

const Layout = ({children}) => {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="flex-1 w-full">
        <SidebarTrigger />
        <div className='p-4'>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout