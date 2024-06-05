import "server-only";

import { createIntl } from "@formatjs/intl";
import type { Locale } from "@/lib/definitions";

export async function getIntl(locale: Locale) {
  return createIntl({
    locale: locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}
