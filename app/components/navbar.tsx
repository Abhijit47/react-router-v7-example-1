import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { NavLink, useLocation } from 'react-router';
import { navigation } from '~/constants';
import { classNames } from '~/utils';
import LocalSpinner from './local-spinner';
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <header className={'sticky top-0 left-0 w-full z-50'}>
      <Popover as='nav' className='bg-gray-800'>
        <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <PopoverButton className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <HiBars3
                  aria-hidden='true'
                  className='block size-6 group-data-open:hidden'
                />
                <HiXMark
                  aria-hidden='true'
                  className='hidden size-6 group-data-open:block'
                />
              </PopoverButton>
            </div>
            <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
              <div className='flex items-center shrink-0'>
                <NavLink to='/' className='flex items-center' viewTransition>
                  <img
                    alt='Country Flags'
                    src='/globe.svg'
                    className='w-auto h-16'
                  />
                </NavLink>
              </div>
              <div className='items-center hidden sm:ml-6 sm:flex'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      viewTransition
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.href === pathname
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}>
                      {({ isPending }) => (
                        <span className='inline-flex items-center gap-2'>
                          {item.name} {isPending && <LocalSpinner />}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <ModeToggle />

              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <MenuButton className='relative flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      className='rounded-full size-8'
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className='absolute right-0 z-10 w-48 py-1 mt-2 transition origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'>
                  <MenuItem>
                    <NavLink
                      to='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                      Settings
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>
                      Sign out
                    </NavLink>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <PopoverPanel className='absolute inset-x-0 p-2 transition origin-top-right transform bg-gray-800 sm:hidden top-16 data-enter:duration-200 data-enter:ease-out data-enter:delay-100 data-enter:origin-top-right data-leave:duration-100 data-leave:ease-in data-leave:origin-top-right'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navigation.map((item) => (
              <NavLink
                viewTransition
                key={item.name}
                to={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.href === pathname
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}>
                {({ isPending }) => (
                  <span className='inline-flex items-center gap-2'>
                    {item.name} {isPending && <LocalSpinner />}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
    </header>
  );
}
