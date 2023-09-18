'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SwitchTheme from './themeSwitcher';

export default function Sider() {
  const pathname = usePathname();
  const router = useRouter();

  const handleAnchorClick = async (section: string) => {
    // If not on the home page, navigate there first
    if (pathname !== '/') {
      router.push('/');
    }

    // Find the element and scroll to it
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='drawer absolute z-50'>
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle absolute'
      />
      <div className='drawer-content'>
        <label
          htmlFor='my-drawer'
          className='btn btn-ghost btn-circle  swap swap-rotate absolute top-4 left-4 '
        >
          <input type='checkbox' />

          {/* hamburger icon */}
          <svg
            className='swap-off fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'
          >
            <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
          </svg>

          {/* close icon */}
          <svg
            className='swap-on fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'
          >
            <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
          </svg>
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-secondary-content text-base-content m-0'>
          <SwitchTheme />
          <li>
            <a onClick={() => handleAnchorClick('Home')}>Home</a>
          </li>
          <li>
            <a onClick={() => handleAnchorClick('AboutMe')}>About Me</a>
          </li>
          <li>
            <a onClick={() => handleAnchorClick('WorkHistory')}>Work History</a>
          </li>
          <li>
            <a onClick={() => handleAnchorClick('Contact')}>Contact</a>
          </li>
          <li>
            <Link href='/resume'>Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
