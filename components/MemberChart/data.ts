export const rawData = [
  {
    name: "学年比",
    学部1年: 2,
    学部2年: 2,
    学部3年: 9,
    学部4年: 5,
    修士1年: 2,
    修士2年: 6,
  },
  {
    name: "学科比",
    未配属: 2,
    情報工学科: 13,
    知能工学科: 7,
    システム工学科: 0,
    医用情報科学科: 1,
    デザイン工芸学科: 3,
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
