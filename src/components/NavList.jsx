import React from "react";
import { Link } from "react-router-dom";

export const NavList = ({ listName, onSelect, isSelected, path }) => {
  return (
    <Link
      to={path}
      onClick={onSelect}
      className={` hover:text-zinc-400 px-4 rounded-lg text-md font-medium ${
        isSelected ? "text-zinc-400" : "text-gray-200"
      }`}
    >
      {listName}
    </Link>
  );
};
