"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
  routes: any[];
}

export function Links({ routes }: Props) {
  const [focus, setFocus] = useState<number | null>();

  const changeFocus = (index: number) => {
    setFocus(index);
  };
  return (
    <ul className="flex justify-between items-center font-bold uppercase gap-x-4 text-sm tracking-widest">
      {routes.map((route, index) => (
        <li
          key={index}
          className={`h-full inline-flex relative before:transition-all before:duration-500 ${
            focus === index
              ? "before:w-full before:h-[2px] before:bg-black before:absolute before:bottom-0 before:left-0"
              : "before:w-0 before:h-[2px] before:bg-black before:absolute before:bottom-0 before:left-2/4 before:-translate-x-2/4"
          }`}
          onMouseEnter={() => changeFocus(index)}
          onMouseLeave={() => setFocus(null)}
        >
          <Link className="p-3" href={route.path}>
            {route.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Link;
