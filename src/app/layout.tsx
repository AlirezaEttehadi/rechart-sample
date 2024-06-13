import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import Header from "@techsiro/components/header";

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
          <Header />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
