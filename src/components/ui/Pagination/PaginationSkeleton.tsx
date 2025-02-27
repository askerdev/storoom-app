import Skeleton from "@/components/ui/Skeleton";
import Flex from "@/components/ui/Flex";

const PaginationSkeleton = () => (
  <Flex $alignItems="center">
    <Skeleton $width={205} $height={21} />
  </Flex>
);

export default PaginationSkeleton;
