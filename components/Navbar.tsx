import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-800">
      <div></div>
      <div className="flex items-center">
        <Image
          className="rounded-full h-8 w-8 mr-2"
          src="https://i.pravatar.cc/300"
          width={300}
          height={300}
          alt="avatar"
        />
        <span className="text-white">Username</span>
      </div>
    </nav>
  );
};

export default Navbar;
