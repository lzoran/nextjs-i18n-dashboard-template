import React, { Suspense } from "react";

import Image from "next/image";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import CardBody from "@/components/CardBody";
import Spinner from "@/components/Spinner";

import { getIntl } from "@/lib/intl";
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

  return (
    <div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <div className="flex justify-center items-center">
            <Image src="/images/deploy-nextjs-on-vercel.png" alt="Deploy Next.js on Vercel" width={300} height={203} />
          </div>

          <CardHeader>{intl.formatMessage({ id: "page.discover.deploy-on-vercel.title" })}</CardHeader>

          <CardBody>
            <p className="text-base text-gray-700">
              {intl.formatMessage({ id: "page.discover.deploy-on-vercel.subtitle" })}
            </p>

            <div className="mt-5">
              <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flzoran%2Fnextjs-i18n-dashboard-template">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://vercel.com/button" alt="Deploy with Vercel" />
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
