import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu } from "react-icons/md";

import { div, path, ul } from "framer-motion/client";
import { NavList } from "./NavList";

const Lists = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "My Projects", path: "/projects" },
  { name: "Contact", path: "contact" },
];

export const Navbar = () => {
  const [selectList, setSelectList] = useState("Home");

  const handleSelect = (selectedList) => {
    setSelectList(selectedList);
    console.log(selectList);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <nav className="fixed flex w-full bg-black py-4 px-10 z-50">
          <div className="flex-1 flex items-center text-gray-200 italic font-bold">
            <Link to={"/"} className="text-center text-2xl">
              Jake Russel's Portfolio
            </Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <ul className="flex gap-6">
              {Lists.map((list, index) => {
                return (
                  <NavList
                    key={index}
                    isSelected={selectList === list.name}
                    onSelect={() => handleSelect(list.name)}
                    listName={list.name}
                    path={list.path}
                  />
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Slidebar */}
      <div className="sm:hidden fixed flex justify-end items-end w-screen bg-black z-50 pr-4">
        <MdMenu className="text-3xl z-50 text-gray-200" />
      </div>

      {/* <div className="relative w-screen ">
        <div className="absolute bg-blue-900 top-0 right-0 h-screen w-7/12 z-50">
          qweqweqwqwe
        </div>
      </div> */}
    </>
  );
};
