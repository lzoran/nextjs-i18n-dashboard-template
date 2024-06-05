"use client";

import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SidebarLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={clsx("flex items-center px-4 py-2 my-1 text-base text-gray-200 hover:text-white hover:bg-gray-700", {
          "text-white bg-gray-700": pathname === href,
        })}
      >
        {children}
      </div>
    </Link>
  );
}
