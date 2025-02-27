import Skeleton from "@/components/ui/Skeleton";
import { AccordionNavigationItemContainer } from "./styled";

const AccordionNavigationItemSkeleton = () => (
  <AccordionNavigationItemContainer $open={false}>
    <Skeleton $width="100%" $height={70} />
  </AccordionNavigationItemContainer>
);

export default AccordionNavigationItemSkeleton;
