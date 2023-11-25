import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  SquaresPlusIcon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:p-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="/assets/facebook.png"
          alt=""
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full p-2 bg-gray-100">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
          <input
            className="hidden lg:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook..."
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* PROFILE PICTURE */}
        <p className="font-semibold whitespace-normal">AASHIK</p>
        <SquaresPlusIcon className="icon" />
         <ChatBubbleOvalLeftEllipsisIcon className="icon" /> 
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" /> 
      </div>
    </header>
  );
};

export default Header;
