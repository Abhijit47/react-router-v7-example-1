import { Outlet } from 'react-router';

export function meta() {}

export function AppLayout() {
  return (
    <div className={'p-12 bg-red-600'}>
      APPLAYOUT <Outlet />
      {/* {children} */}
    </div>
  );
}
