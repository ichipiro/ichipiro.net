export const rawData = [
  {
    name: "学年比",
    学部1年: 1,
    学部2年: 7,
    学部3年: 4,
    学部4年: 5,
    修士: 7,
  },
  {
    name: "学科比",
    情報工学科: 12,
    知能工学科: 5,
    システム工学科: 0,
    医用情報科学科: 3,
  },
];

export const normalizeData = (data: any[]) => {
  return data.map((item) => {
    const total: any = Object.values(item).reduce(
      (sum: any, value) => (typeof value === "number" ? sum + value : sum),
      0
    );
    const normalizedItem = { ...item, total };
    Object.keys(item).forEach((key) => {
      if (key !== "name" && key !== "total") {
        normalizedItem[`${key}_percentage`] =
          ((item[key] as number) / total) * 100;
      }
    });
    return normalizedItem;
  });
};

export const data = normalizeData(rawData);
