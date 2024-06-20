import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import OpenTUTLogo from '../assets/opentut_logo_large.svg';
import { SITE_TITLE } from '../consts';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative flex items-center justify-between border-b-4 border-b-tut-red bg-white p-4">
      <h2>
        <a href="/">
          <img src={OpenTUTLogo.src} alt={SITE_TITLE} className="mr-2 h-16" />
        </a>
      </h2>
      <div className="z-30 sm:hidden">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? '-translate-y-0 transform' : '-translate-y-full transform'
        } absolute left-0 top-0 z-20 w-full bg-white transition-transform duration-300 ease-out sm:static sm:block sm:w-auto sm:transform-none`}
      >
        <ul className="flex flex-col justify-around sm:flex-row sm:items-center">
          <li>
            <a
              href="/"
              className="mt-6 block px-4 py-2 font-medium hover:text-gray-300 sm:mt-0 sm:px-0"
              onClick={closeMenu}
            >
              トップページ
            </a>
          </li>
          <li>
            <a
              href="/activities"
              className="block px-4 py-2 font-medium hover:text-gray-300 sm:ml-5 sm:px-0"
              onClick={closeMenu}
            >
              活動内容・スケジュール
            </a>
          </li>
          <li>
            <a
              href="/members"
              className="block px-4 py-2 font-medium hover:text-gray-300 sm:ml-5 sm:px-0"
              onClick={closeMenu}
            >
              部員の活動
            </a>
          </li>
          <li>
            <a
              href="/tutility"
              className="block px-4 py-2 font-medium hover:text-gray-300 sm:ml-5 sm:px-0"
              onClick={closeMenu}
            >
              TUTility
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/OpenTUT_info"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 font-medium hover:text-gray-300 sm:ml-2 sm:mr-2"
              onClick={closeMenu}
            >
              𝕏(旧Twitter)
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
