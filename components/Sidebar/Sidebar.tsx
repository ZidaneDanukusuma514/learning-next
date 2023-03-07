import * as React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

export interface ISidebarProps {
  title?: string;
}

export default function Sidebar({ title = "title here" }: ISidebarProps) {
  return (
    <div className="flex flex-col gap-y-2 h-screen w-[200px] bg-slate-700 p-4 ">
      <div>
        <h1 className="font-mono text-2xl">{title}</h1>
      </div>
      <ul className="flex flex-col space-y-2">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/Dynamic"}>Random</Link>
        </li>
      </ul>
    </div>
  );
}
