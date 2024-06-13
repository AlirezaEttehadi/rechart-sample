"use client";

import useSWR from "swr";

import Container from "@techsiro/components/container";
import { OverViewModel } from "@techsiro/models";
import ApiKeys from "@techsiro/api";

export default function Overview() {
  const { data } = useSWR<OverViewModel>(ApiKeys.OVER_VIEW_API);
  console.log(data);
  return (
    <Container>
      <h1>Overview</h1>
    </Container>
  );
}
