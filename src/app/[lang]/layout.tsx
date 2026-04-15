import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";

import { getUser } from "@/lib/data";
import { Locale } from "@/lib/definitions";

import { i18n } from "../../../i18n-config";

import "@/app/globals.css";

export const metadata = {
  title: "Next.js i18n Dashboard Template",
  description: "How to create internationalized dasboard with Next.js",
};

interface Props {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}

export default async function Root(props: Props) {
  const { lang } = await props.params;

  const { children } = props;

  const user = await getUser();

  return (
    <html lang={lang}>
      <body className="relative min-h-screen overflow-y-auto bg-gray-50">
        <Navbar locale={lang as Locale} user={user} />

        <Content>{children}</Content>

        <Sidebar locale={lang as Locale} />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
