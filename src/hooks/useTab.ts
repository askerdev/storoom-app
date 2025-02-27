import { useCallback, useState } from "react";

const useTabs = <T extends string = string>(defaultValue: T) => {
  const [tab, setTab] = useState<T>(defaultValue);

  const getTriggerProps = useCallback(
    (value: T) => ({
      onClick: () => setTab(value),
      $active: tab === value,
    }),
    [tab],
  );

  const getContentProps = useCallback(
    (value: T) => ({
      $active: tab === value,
    }),
    [tab],
  );

  return {
    currentTab: tab,
    getTriggerProps,
    getContentProps,
  };
};

export default useTabs;
