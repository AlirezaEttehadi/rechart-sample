"use client";

import useSWR from "swr";
import { ComboboxItem, Select } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Container from "@techsiro/components/container";
import ApiKeys from "@techsiro/api";
import { CampaignsModel } from "@techsiro/models";

export default function Campaigns() {
  const { data } = useSWR<CampaignsModel>(ApiKeys.CAMPAIGNS_API);
  const [selectedCampaign, setSelectedCampaign] = useState<ComboboxItem | null>(
    null
  );

  useEffect(() => {
    if (data) {
      setSelectedCampaign({
        value: data[0].id,
        label: data[0].name,
      });
    }
  }, [data]);

  const selectedCampaignChartData = useMemo(() => {
    return data?.find((item) => item.id === selectedCampaign?.value);
  }, [data, selectedCampaign?.value]);

  console.log(selectedCampaignChartData);

  return (
    <Container className="flex flex-col gap-8">
      <Select
        label="Select a campaign"
        placeholder="Choose one"
        className="w-fit"
        data={data?.map((item) => ({ value: item.id, label: item.name }))}
        clearable
        value={selectedCampaign ? selectedCampaign.value : null}
        onChange={(_value, option) => setSelectedCampaign(option)}
      />
      <div>
        <h2 className="text-purple-400">Installs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={1000}
            height={300}
            data={selectedCampaignChartData?.installs}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
}
