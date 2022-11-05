import Link from "next/link";
import React from "react";
import { AiOutlineHome as Home } from "react-icons/ai";
import { AiOutlineBell as Notification } from "react-icons/ai";
import { AiOutlineAppstoreAdd as AppStoreAdd } from "react-icons/ai";
import { AiOutlineBarChart as BarChart } from "react-icons/ai";
import { AiOutlineScan as Scan } from "react-icons/ai";
import { AiOutlineUser as User } from "react-icons/ai";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className="shadow-lg bg-white sticky top-0 z-50 ">
      {/* Header Size */}
      <div className="max-w-[1360px] mx-auto">
        {/* Header Wrapper */}
        <div className="flex items-center justify-between h-16 sm:px-6 xl:px-2">
          {/* Left Icon */}
          <Link href={'/'}>
            <div className="">ALGOTRADE</div>
          </Link>
          {/* Menu */}
          <div className="h-full flex items-center ">
            <ul className="flex items-center gap-x-3 h-full">
              <li className="menu__icons link after:scale-x-100 text-blue-600">
                <a className="" href="#">
                  <Home size={30} />
                </a>
              </li>
              <li className="menu__icons link">
                <a className="" href="#">
                  <AppStoreAdd size={30} />
                </a>
              </li>
              <li className="menu__icons link">
                <a className="" href="#">
                  <BarChart size={30} />
                </a>
              </li>
              <li className="menu__icons link">
                <a className="" href="#">
                  <Scan size={30} />
                </a>
              </li>
              <li className="menu__icons link">
                <a className="" href="#">
                  <User size={30} />
                </a>
              </li>
            </ul>
          </div>
          {/* Right Profile */}
          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <div className="relative">
              <Notification className="-rotate-12 z-10" size={30} />
              <div className="absolute -top-1 z-0 bg-opacity-80 animate-pulse -right-1 h-5 w-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                5
              </div>
            </div>
            {/* Profile */}
            <img
              className="w-10 h-10 rounded-full cursor-pointer object-cover"
              src="https://th.bing.com/th/id/OIP.Qdgnl8QbAFqxyzIj6OqrDwHaFL?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
