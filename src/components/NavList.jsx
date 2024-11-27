import React from "react";
import { Link } from "react-router-dom";

export const NavList = ({ listName, onSelect, isSelected, path }) => {
  return (
    <Link
      to={path}
      onClick={onSelect}
      className={`hover:bg-zinc-200 hover:text-black sm:hover:text-zinc-400 sm:hover:bg-transparent py-2 sm:py-0 px-4 text-md font-medium ${
        isSelected
          ? "text-black bg-zinc-200 sm:text-zinc-400 sm:bg-transparent"
          : "text-zinc-200"
      }`}
    >
      {listName}
    </Link>
  );
};
