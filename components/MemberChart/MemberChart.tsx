"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { data } from "./data";
import styles from "./MemberChart.module.css";

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

  return (
    <div className={styles.chartContainer}>
      {data.map((item, index) => (
        <div key={item.name}>
          <h3>
            {item.name} - 全体の人数: {item.total}
          </h3>
          <ResponsiveContainer minHeight={150} width="100%">
            <BarChart
              data={[item]}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <>
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(tick) => `${tick.toFixed(2)}%`}
                />
                <YAxis dataKey="name" type="category" />
              </>
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
              <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                  />
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default MemberChart;
