import { ReactNode } from 'react';

import { Navbar } from 'flowbite-react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="mb-auto bg-transparent header-bg drop-shadow-xl"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto bg-transparent ">
        <Navbar.Brand href="/" className="bg-transparent \">
          <a>{props.logo}</a>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-transparent " />
        <Navbar.Collapse className="bg-transparent">
          <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {props.children}
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export { NavbarTwoColumns };
