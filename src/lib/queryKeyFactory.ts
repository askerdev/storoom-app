export const queryKeyFactory = (name: string) => {
  const keys = {
    all: [name] as const,
    infinite: ["infinite"] as const,
    lists: () => [...keys.all, "list"] as const,
    list: (filter?: unknown) => [...keys.lists(), filter] as const,
    lessonsInfiniteList: (course: string, filter?: unknown) =>
      [...keys.list(filter), course, ...keys.infinite] as const,
    infiniteList: (filter?: unknown) =>
      [...keys.list(filter), ...keys.infinite] as const,
    details: () => [...keys.all, "detail"] as const,
    detail: (id: unknown) => [...keys.details(), id] as const,
  };
  return keys;
};
