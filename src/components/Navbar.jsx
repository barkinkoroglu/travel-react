import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import React, { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 absolute z-10 text-white px-4">
      <div>
        <h1 className="cursor-pointer">BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex md:gap-3">
        <BiSearch size={20} className="" />
        <BsPerson size={20} />
      </div>
      <div
        onClick={() => handleNav()}
        className="md:hidden block cursor-pointer z-10 "
      >
        {openNav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobil Nav */}

      <div
        className={
          openNav
            ? 'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1 className="border-b ">BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>

        <div className="flex flex-col gap-6">
          <button>Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between mt-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
