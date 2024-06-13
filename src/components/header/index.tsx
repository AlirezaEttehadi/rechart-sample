"use client";

import { NavLink } from "@mantine/core";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import Container from "../container";

const Header = () => {
  const activeSegment = useSelectedLayoutSegments();

  return (
    <header className="flex items-center bg-gray-300 h-16">
      <Container className="flex items-center gap-4">
        <NavLink
          component={Link}
          href="/overview"
          label="Overview"
          className="w-fit"
          active={activeSegment.includes("overview")}
          variant="subtle"
        />
        <NavLink
          component={Link}
          href="/campaigns"
          label="Campaigns"
          className="w-fit"
          active={activeSegment.includes("campaigns")}
          variant="subtle"
        />
        <NavLink
          component={Link}
          href="/create"
          label="Create"
          className="w-fit"
          active={activeSegment.includes("create")}
          variant="subtle"
        />
      </Container>
    </header>
  );
};

export default Header;
