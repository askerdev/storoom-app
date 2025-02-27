import { memo } from "react";
import { v4 as uuid } from "uuid";
import Skeleton from "@/components/ui/Skeleton";

const LessonListSkeleton = memo(() =>
  Array(6)
    .fill(0)
    .map(() => (
      <Skeleton key={uuid()} $borderRadius={32} $width="100%" $height="54px" />
    )),
);

export default LessonListSkeleton;
