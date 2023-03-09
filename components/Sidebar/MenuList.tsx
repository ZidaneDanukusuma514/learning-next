import * as React from "react";
import { menuData } from "./Data";
import MenuItem from "./MenuItem";

export interface IMenuListProps {}

export default function MenuList(props: IMenuListProps) {
  return (
    <div className="flex flex-col space-y-4">
      {menuData.map((item: any) => (
        <MenuItem Data={item} />
      ))}
    </div>
  );
}
