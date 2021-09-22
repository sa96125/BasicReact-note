import { useState } from "react";

export const useTabs = (initialIndex, data) => {
  const [index, setIndex] = useState(initialIndex);
  if (!data || !Array.isArray(data)) return;

  return {
    currentTab: data[index],
    currentIndex: setIndex,
  };
};
