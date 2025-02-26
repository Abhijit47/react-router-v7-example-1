import type { Route } from './+types/users';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Dashboard | Users',
      description: 'Users',
    },
  ];
}

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <p>Manage your users here.</p>
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
          <div className='aspect-video rounded-xl bg-muted/50' />
          <div className='aspect-video rounded-xl bg-muted/50' />
          <div className='aspect-video rounded-xl bg-muted/50' />
        </div>
        <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
      </div>
    </div>
  );
}
