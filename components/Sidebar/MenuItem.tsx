import Link from "next/link";
import * as React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
export interface IMenuItemProps {
  title: string;
  href: string;
  subMenu?: any[];
  Dropdown?: boolean;
}

interface DataProps {
  Data: IMenuItemProps;
}

export default function MenuItem({ Data }: DataProps) {
  const [Active, setActive] = React.useState(false);
  return (
    <div className="flex flex-wrap bg-slate-800 rounded-lg p-2">
      <Link className="grow" href={Data.href}>
        {Data.title}
      </Link>
      {!Data.subMenu ? null : (
        <button
          onClick={() => setActive(!Active)}
          className="transition-all ease-in hover:text-slate-800 rounded-full hover:bg-white/75 p-1"
        >
          {!Active ? (
            <MdOutlineKeyboardArrowDown size={20} />
          ) : (
            <MdOutlineKeyboardArrowUp size={20} />
          )}
        </button>
      )}
      {!Active ? null : (
        <ul className="flex flex-row w-full">
          {Data.subMenu?.map((item: any) => (
            <li>
              <Link href={item.subHref}>{item.subTitle}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
