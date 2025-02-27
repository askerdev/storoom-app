import Box from "@/components/ui/Box";
import Skeleton from "@/components/ui/Skeleton";

const CourseCardSkeleton = () => (
  <Box $flexShrink={0}>
    <Skeleton
      $width={{ default: 320, lg: 370 }}
      $height={{ default: 226, lg: 254 }}
    />
  </Box>
);

export default CourseCardSkeleton;
