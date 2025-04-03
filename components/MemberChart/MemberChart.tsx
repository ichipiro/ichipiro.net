"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { data } from "./data";

const colors = [
  "#AEC6CF", // パステルブルー
  "#779ECB", // パステルパープル
  "#77DD77", // パステルグリーン
  "#FFB6C1", // パステルピンク
  "#FFB347", // パステルオレンジ
  "#FF6961", // パステルレッド
  "#FDFD96", // パステルイエロー
  "#CFCFC4", // パステルグレー
];

const MemberChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const chartWidth = isMobile ? 400 : 800;
  const chartHeight = isMobile ? 150 : 200;
  const layout = isMobile ? "vertical" : "vertical";

  return (
    <div>
      {data.map((item, index) => (
        <div key={item.name}>
          <h3>
            {item.name} - 全体の人数: {item.total}
          </h3>
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={[item]}
            layout={layout}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {isMobile ? (
              <>
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(tick) => `${tick.toFixed(2)}%`}
              />
              <YAxis dataKey="name" type="category" />
            </>
            ) : (
              <>
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(tick) => `${tick.toFixed(2)}%`}
                />
                <YAxis dataKey="name" type="category" />
              </>
            )}
            <Tooltip
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Legend />
            {Object.keys(item).map((key, i) => {
              if (key.includes("_percentage")) {
                const originalKey = key.replace("_percentage", "");
                return (
                  <Bar
                    key={key}
                    dataKey={key}
                    name={originalKey}
                    stackId="a"
                    fill={colors[i % colors.length]}
                  />
                );
              }
              return null;
            })}
          </BarChart>
        </div>
      ))}
    </div>
  );
};

export default MemberChart;
