"use client";

import { FC, ReactNode } from "react";
import { SWRConfig } from "swr";

import { createAbsoluteURL } from "@techsiro/utils/url.utils";

type Props = {
  children: ReactNode;
};

const SWRContext: FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        focusThrottleInterval: 30000,
        revalidateOnFocus: false,
        fetcher: (url: string) =>
          fetch(
            createAbsoluteURL(process.env.NEXT_PUBLIC_API_URL as string, url)
          ).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRContext;
