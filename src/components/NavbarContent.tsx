"use client";

import React, { useState, useCallback, useRef, forwardRef } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import useOutsideClick from "@/hooks/useOutsideClick";
import { User, Locale } from "@/lib/definitions";

interface Props {
  user: User;
  locale: Locale;
  messages: Record<string, string>;
}

export default function NavbarContent({ user, locale, messages }: Props) {
  const pathname = usePathname();

  const appMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const langSwitcherMenuRef = useRef(null);

  const [appMenuOpen, setAppMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langSwitcherMenuOpen, setLangSwitcherMenuOpen] = useState(false);

  useOutsideClick(appMenuRef, () => {
    setAppMenuOpen(false);
  });

  useOutsideClick(userMenuRef, () => {
    setUserMenuOpen(false);
  });

  useOutsideClick(langSwitcherMenuRef, () => {
    setLangSwitcherMenuOpen(false);
  });

  const handleAppMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAppMenuOpen(!appMenuOpen);
  };

  const handleUserMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLangSwitcherMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLangSwitcherMenuOpen(!langSwitcherMenuOpen);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <nav className="sticky top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center mx-2">
            <div className="relative mx-1 lg:hidden">
              <button
                type="button"
                className="rounded-full p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
                id="app-menu-button"
                aria-haspopup="true"
                aria-expanded={appMenuOpen}
                onClick={handleAppMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {appMenuOpen && (
                <Menu ref={appMenuRef} aria-labelledby="app-menu-button" align="left">
                  <MenuItem href={`/${locale}/home`}>
                    <FormattedMessage id="common.navigation.home" />
                  </MenuItem>
                  <MenuItem href={`/${locale}/reports`}>
                    <FormattedMessage id="common.navigation.reports" />
                  </MenuItem>
                  <MenuItem href={`/${locale}/discover`}>
                    <FormattedMessage id="common.navigation.discover" />
                  </MenuItem>
                </Menu>
              )}
            </div>
          </div>

          <div className="flex items-center mx-2">
            <div className="relative mx-1">
              <button
                type="button"
                className="rounded-full p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
                id="lang-switcher-menu-button"
                aria-haspopup="true"
                aria-expanded={langSwitcherMenuOpen}
                onClick={handleLangSwitcherMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </button>

              {langSwitcherMenuOpen && (
                <Menu ref={langSwitcherMenuRef} aria-labelledby="lang-switcher-menu-button">
                  <MenuItem href={`/de/${pathname.split("/").slice(2).join("/")}`} active={locale === "de"}>
                    <FormattedMessage id="common.language-switcher" values={{ locale: "de" }} />
                  </MenuItem>
                  <MenuItem href={`/en/${pathname.split("/").slice(2).join("/")}`} active={locale === "en"}>
                    <FormattedMessage id="common.language-switcher" values={{ locale: "en" }} />
                  </MenuItem>
                  <MenuItem href={`/fr/${pathname.split("/").slice(2).join("/")}`} active={locale === "fr"}>
                    <FormattedMessage id="common.language-switcher" values={{ locale: "fr" }} />
                  </MenuItem>
                </Menu>
              )}
            </div>

            <div className="relative mx-1">
              <button
                type="button"
                className="rounded-full p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>

            <div className="relative mx-1">
              <button
                type="button"
                className="rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
                id="user-menu-button"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
                onClick={handleUserMenuClick}
              >
                <Image src={user.profileImage} alt="Profile image" className="rounded-full" width={24} height={24} />
              </button>

              {userMenuOpen && (
                <Menu ref={userMenuRef} aria-labelledby="user-menu-button">
                  <MenuItem href="#">
                    <FormattedMessage id="common.user-menu.your-profile" />
                  </MenuItem>
                  <MenuItem href="#">
                    <FormattedMessage id="common.user-menu.settings" />
                  </MenuItem>
                  <MenuItem href="#">
                    <FormattedMessage id="common.user-menu.sign-out" />
                  </MenuItem>
                </Menu>
              )}
            </div>
          </div>
        </div>
      </nav>
    </IntlProvider>
  );
}

interface MenuProps {
  align: "left" | "right";
  children: React.ReactNode;
  [x: string]: any;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu({ align = "right", children, ...rest }, ref) {
  return (
    <div
      ref={ref}
      role="menu"
      className={clsx(
        "absolute z-10 w-48 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        { "left=0": align === "left", "right-0": align === "right" }
      )}
      aria-orientation="vertical"
      tabIndex={-1}
      {...rest}
    >
      {children}
    </div>
  );
});

interface MenuItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

function MenuItem({ href, active, children }: MenuItemProps) {
  return (
    <Link
      href={href}
      tabIndex={-1}
      role="menuitem"
      className={clsx("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200", { "bg-gray-200": active })}
    >
      {children}
    </Link>
  );
}
