import { Link } from 'react-router-dom';

import TUTIICIcon from '../assets/TUT_IIC_icon_tmp.jpg'

function Header() {
    return (
        <>
            <header className="bg-tut-red text-white p-4 flex justify-between items-center">
            <Link to="/" className="font-medium hover:text-gray-300">
                <div className="flex items-center">
                    <img src={TUTIICIcon} className="logo w-16 h-16 mr-2" />
                    <h1 className="text-3xl font-bold ml-2">Toyohashi University of Technology - Information Infrastructure Club</h1>
                </div>
            </Link>
            <nav>
            <ul className="flex justify-around">
                <li><Link to="/" className="font-medium hover:text-gray-300">トップページ</Link></li>
                <li><Link to="/activities" className="font-medium hover:text-gray-300 ml-5">活動内容・スケジュール</Link></li>
                <li><Link to="/members" className="font-medium hover:text-gray-300 ml-5">部員の活動</Link></li>
                <li><Link to="/privacy" className="font-medium hover:text-gray-300 ml-5">プライバシーポリシー</Link></li>
                <li><a href="https://twitter.com/TUT_IIC" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-gray-300 ml-5 mr-2">𝕏(旧Twitter)</a></li>
            </ul>
            </nav>
            </header>
        </>
    );
}

export default Header;