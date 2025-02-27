import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import Header from "@techsiro/components/header";
import ProgressContext from "@techsiro/context/progress.context";
import SWRContext from "@techsiro/context/swr.context";

import "@mantine/core/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techsiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <ProgressContext>
            <SWRContext>
              <Header />
              <main>{children}</main>
            </SWRContext>
          </ProgressContext>
        </MantineProvider>
      </body>
    </html>
  );
}
