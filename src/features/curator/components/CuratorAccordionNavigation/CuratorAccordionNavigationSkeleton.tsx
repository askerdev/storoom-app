import { defaultPagination } from "@/constants/api";
import CuratorAccordionNavigationItemSkeleton from "./CuratorAccordionNavigationItemSkeleton";
import { CuratorAccordionNavigationContainer } from "./styled";

const AccordionNavigationSkeleton = () => (
  <CuratorAccordionNavigationContainer $height={520}>
    {Array(defaultPagination.pageSize)
      .fill(0)
      .map((_, index) => (
        <CuratorAccordionNavigationItemSkeleton key={index} />
      ))}
  </CuratorAccordionNavigationContainer>
);

export default AccordionNavigationSkeleton;
