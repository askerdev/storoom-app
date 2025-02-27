import Skeleton from "@/components/ui/Skeleton";
import { CuratorAccordionNavigationItemContainer } from "./styled";

const CuratorAccordionNavigationItemSkeleton = () => (
  <CuratorAccordionNavigationItemContainer $open={false}>
    <Skeleton $width="100%" $height={70} />
  </CuratorAccordionNavigationItemContainer>
);

export default CuratorAccordionNavigationItemSkeleton;
