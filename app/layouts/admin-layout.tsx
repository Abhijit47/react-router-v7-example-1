import { NavLink, Outlet } from 'react-router';
import DashboardFooter from '~/components/dahboard-footer';

import { AppSidebar } from '~/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { Separator } from '~/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar';

export default function AdminLayout() {
  return (
    <>
      {/* <header className={'bg-slate-700'}>
        <nav className={'py-4 px-4'}>
          <ul className={'flex w-full items-center justify-center gap-4'}>
            <li>
              <NavLink to='/' viewTransition>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/dashboard' viewTransition>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/settings' viewTransition>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/projects' viewTransition>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/users' viewTransition>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </header> */}

      {/* <!-- component --> */}
      {/* <!-- Foooter --> */}

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
            <div className='flex items-center gap-2 px-4'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 h-4' />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className='hidden md:block'>
                    <BreadcrumbLink asChild>
                      <NavLink to='/' viewTransition>
                        Building Your Application
                      </NavLink>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className='hidden md:block' />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <Outlet />
          <DashboardFooter />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
