"use client";

import { FC } from "react";
import Link from "next/link";

import { Button } from "@mantine/core";

const NotFound: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-lg font-bold">404</h1>
        <p className="text-sm">Page Not Found</p>
        <Button color="inherit" component={Link} href="/">
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
