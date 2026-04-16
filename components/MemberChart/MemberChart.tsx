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
  "#c3e9f7", // パステルブルー
  "#779ECB", // パステルパープル
  "#77DD77", // パステルグリーン
  "#FFB6C1", // パステルピンク
  "#FFB347", // パステルオレンジ
  "#FF6961", // パステルレッド
  "#FDFD96", // パステルイエロー
  "#CFCFC4", // パステルグレー
];
const grade_colors = [[
  "#c0e5ff", // 1. かなり薄い水色
  "#AED6F1", // 2. 少し明るい水色
  "#5DADE2", // 3. 鮮やかな水色
  "#2E86C1", // 4. スタンダードな青
  "#21618C", // 5. 濃い青
  "#154360", // 6. かなり濃いネイビー
],
[ 
  /*
  "#85C1E9", // 2. 明るい青
  
  "#3498DB", // 3. 鮮やかな青
  "#21618C", // 4. 濃いネイビー（ここで青が終わる）
  "#F39C12", // 5. 鮮やかなゴールドオレンジ
  "#FADBD8", // 6. 薄い赤（ピンク系）
  "#E74C3C", // 7. 鮮やかな赤
  "#943126", // 8. 濃い赤（えんじ色）
  "#d0dfe4", // パステルブルー
  "#D6EAF8", // 1. 薄い水色
 
  */
 "#CFCFC4", // パステルグレー
 "#a7f0c7", // 1. 薄いパステルグリーン
  "#58D68D", // 2. 明るく鮮やかな緑
  "#229954", // 3. スタンダードで落ち着いた緑
  "#145A32", // 4. かなり濃いダークグリーン
  //"#F39C12", // 5. 鮮やかなゴールドオレンジ
  "#FADBD8", // 6. 薄い赤（ピンク系）
  "#E74C3C", // 7. 鮮やかな赤
  //"#943126", // 8. 濃い赤（えんじ色）
  
]];
  


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
