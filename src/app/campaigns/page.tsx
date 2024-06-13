"use client";

import useSWR from "swr";

import Container from "@techsiro/components/container";
import ApiKeys from "@techsiro/api";
import { CampaignsModel } from "@techsiro/models";

export default function Campaigns() {
  const { data } = useSWR<CampaignsModel>(ApiKeys.CAMPAIGNS_API);
  console.log(data);
  return (
    <Container>
      <h1>Campaigns</h1>
    </Container>
  );
}
