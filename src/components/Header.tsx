import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import TUTIICIcon from '../assets/tut_iic.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="bg-tut-red text-white p-4 flex justify-between items-center relative">
                <Link to="/" className="font-medium hover:text-gray-300">
                    <div className="flex items-center">
                        <img src={TUTIICIcon} alt="TUTIIC Logo" className="logo w-16 h-16 mr-2" />
                        <h1 className="text-3xl font-bold ml-2 hidden sm:block">TUT - Information Infrastructure Club</h1>
                    </div>
                </Link>
                <div className="sm:hidden z-30">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                    </button>
                </div>
                <nav className={`${isOpen ? 'transform -translate-y-0' : 'transform -translate-y-full'} absolute top-0 left-0 w-full bg-tut-red sm:static sm:w-auto sm:block sm:transform-none transition-transform duration-300 ease-out z-20`}>
                    <ul className="flex flex-col sm:flex-row justify-around sm:items-center">
                        <li><Link to="/" className="font-medium hover:text-gray-300 block px-4 py-2 mt-6 sm:px-0 sm:mt-0" onClick={closeMenu}>トップページ</Link></li>
                        <li><Link to="/activities" className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0" onClick={closeMenu}>活動内容・スケジュール</Link></li>
                        <li><Link to="/members" className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0" onClick={closeMenu}>部員の活動</Link></li>
                        <li><Link to="/privacy" className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-5 sm:px-0" onClick={closeMenu}>プライバシーポリシー</Link></li>
                        <li><a href="https://twitter.com/TUT_IIC" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-gray-300 block px-4 py-2 sm:ml-2 sm:mr-2" onClick={closeMenu}>𝕏(旧Twitter)</a></li>
                    </ul>
                </nav>
                {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
            </header>
        </>
    );
}

export default Header;