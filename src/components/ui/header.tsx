'use client';

import React, { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useScroll from '@/hooks/useScroll';
import useToggle from '@/hooks/useToggle';

import LanguageChanger from '../domain/LanguajeSelect';
import Menu from '../icons/Menu';

interface LinkHeader {
  name: string;
  url: string;
}

export interface HeaderProps {
  logo: ReactElement;
  links: LinkHeader[];
  homeLink?: string;
}

const Header = ({ logo, links, homeLink = '/' }: HeaderProps) => {
  const { hasScrolled } = useScroll();
  const { menuOpen, setMenuOpen, handleOpenMenu } = useToggle();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  return (
    <header
      className={`sticky top-0 bg-transparent  backdrop-blur-sm transition duration-200 ease-in-out ${hasScrolled ? 'border-b border-stone-800' : 'border-transparent'}`}
    >
      <nav className="border-gray-200 px-8 py-3 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link className="flex items-center" href={homeLink}>
            {logo}
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen}
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              data-collapse-toggle="mobile-menu-2"
              onClick={handleOpenMenu}
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <Menu />
            </button>
          </div>
          <div
            className={`w-full items-center justify-between  transition-opacity ${menuOpen ? 'md-block' : 'hidden'}   lg:order-1 lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {links?.map((link) => (
                <Link
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href={link.url}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
              <LanguageChanger />
              {/* <li>
                <a
                  aria-current="page"
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white dark:text-white lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Sobre mi
                </a>
              </li>
              <li>
                <a
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href="#"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  href="#"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
