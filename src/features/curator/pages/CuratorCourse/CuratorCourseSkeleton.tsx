import Flex from "@/components/ui/Flex";
import Skeleton from "@/components/ui/Skeleton";

const CuratorCourseSkeleton = () => (
  <Flex
    $flexDirection="column"
    $gap={{ default: 12, lg: 30 }}
    $alignItems={{ default: "center", lg: "start" }}
  >
    <Skeleton $width={134} $height={39} />
    <Skeleton $width="100%" $height={44} />

    <Skeleton $width={299} $height={62} />
  </Flex>
);

export default CuratorCourseSkeleton;
