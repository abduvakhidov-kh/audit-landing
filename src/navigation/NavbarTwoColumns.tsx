import { ReactNode, useState } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 cursor-pointer HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-primary-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary-600"></span>
          </div>
          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer CROSS-ICON"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="w-8 h-8 text-gray-600 hover:text-primary-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {props.children}
            </ul>
          </div>
        </section>
        <ul className="items-center hidden space-x-1 text-xl font-medium text-gray-800 DESKTOP-MENU lg:flex navbar">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
