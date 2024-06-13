"use client";

import useSWR from "swr";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Container from "@techsiro/components/container";
import { OverViewModel } from "@techsiro/models";
import ApiKeys from "@techsiro/api";

export default function Overview() {
  const { data } = useSWR<OverViewModel>(ApiKeys.OVER_VIEW_API);
  return (
    <Container>
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-purple-400">Installs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart width={1000} height={300} data={data?.installs}>
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

        <div className="flex flex-col w-full gap-4">
          <h2 className="text-green-400">Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart width={1000} height={300} data={data?.revenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  );
}
