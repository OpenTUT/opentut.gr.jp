import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import OpenTUTLogo from '../assets/opentut_logo_large.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="p-4 flex bg-white justify-between items-center relative border-b-4 border-b-tut-red">
      <a href="/" className="font-medium hover:text-gray-300">
        <div className="flex items-center">
          <img
            src={OpenTUTLogo.src}
            alt="OpenTUT Logo"
            className="logo h-16 mr-2"
          />
        </div>
      </a>
      <div className="sm:hidden z-30">
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
          isOpen ? 'transform -translate-y-0' : 'transform -translate-y-full'
        } absolute top-0 left-0 w-full sm:static sm:w-auto sm:block sm:transform-none transition-transform duration-300 ease-out z-20 bg-white`}
      >
        <ul className="flex flex-col sm:flex-row justify-around sm:items-center">
          <li>
            <a
              href="/"
              className="font-medium hover:text-gray-300 block px-4 py-2 mt-6 sm:px-0 sm:mt-0"
              onClick={closeMenu}
            >
              トップページ
            </a>
          </li>
          <li>
            <a
              href="/activities"
              className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0"
              onClick={closeMenu}
            >
              活動内容・スケジュール
            </a>
          </li>
          <li>
            <a
              href="/members"
              className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0"
              onClick={closeMenu}
            >
              部員の活動
            </a>
          </li>
          <li>
            <a
              href="/tutility"
              className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0"
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
              className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-2 sm:mr-2"
              onClick={closeMenu}
            >
              𝕏(旧Twitter)
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
