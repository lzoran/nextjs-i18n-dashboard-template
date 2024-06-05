import NavbarContent from "@/components/NavbarContent";

import { User, Locale } from "@/lib/definitions";

async function getMessages(locale: string) {
  return (await import(`../lang/${locale}.json`)).default;
}

interface Props {
  locale: Locale;
  user: User;
}

export default async function Navbar({ locale, user }: Props) {
  const messages = await getMessages(locale);

  return <NavbarContent locale={locale} messages={messages} user={user} />;
}
