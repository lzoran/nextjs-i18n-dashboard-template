import React, { Suspense } from "react";

import Spinner from "@/components/Spinner";

import { getIntl } from "@/lib/intl";
import { getReports } from "@/lib/data";
import { Locale } from "@/lib/definitions";

interface Props {
  params: {
    lang: Locale;
  };
}

export default function Page({ params: { lang: locale } }: Props) {
  return (
    <Suspense fallback={<Spinner />}>
      <PageContent locale={locale} />
    </Suspense>
  );
}

interface PageContentProps {
  locale: Locale;
}

async function PageContent({ locale }: PageContentProps) {
  const intl = await getIntl(locale);
  const reports = await getReports();

  const isReportListEmpty = reports.length === 0;

  return (
    <div>
      <div>
        {isReportListEmpty && (
          <p className="text-base text-gray-700 italic">{intl.formatMessage({ id: "page.reports.no-data" })}</p>
        )}
      </div>
    </div>
  );
}
