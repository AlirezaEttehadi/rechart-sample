"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { FC, ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

type Props = {
  children: ReactNode;
};
const ProgressContext: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <>
      <AppProgressBar
        height="4px"
        color={theme.colors.blue[6]}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default ProgressContext;
