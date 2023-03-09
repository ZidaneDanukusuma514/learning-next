import * as React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import MenuList from "./MenuList";
export interface ISidebarProps {
  title?: string;
}

const handleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

export default function Sidebar({ title = "title here" }: ISidebarProps) {
  const [Sidebar, setSidebar] = React.useState(false);
  const [Dropdown, setDropdown] = React.useState(false);
  return (
    <div
      className={`flex flex-col sticky transition-all ease-in ${
        !Sidebar ? "w-[200px]" : "w-[150px]"
      } h-screen top-0 left-0 gap-y-2 bg-slate-600 p-4 `}
    >
      <div>
        <h1 className="float-left font-mono text-2xl text-white">{title}</h1>
        <button className="float-right" onClick={() => setSidebar(!Sidebar)}>
          {!Sidebar ? (
            <MdOutlineKeyboardArrowLeft size={30} />
          ) : (
            <MdOutlineKeyboardArrowRight size={30} />
          )}
        </button>
      </div>
      <ul className="flex flex-col space-y-2 text-white">
        <MenuList />
      </ul>
    </div>
  );
}
