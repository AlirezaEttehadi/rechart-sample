import type { Metadata } from "next";

import NotFound from "@techsiro/components/not-found";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "404 - Not Found",
};

export default function NotFoundPage() {
  return <NotFound />;
}
