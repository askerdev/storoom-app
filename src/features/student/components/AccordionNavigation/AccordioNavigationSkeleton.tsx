import { defaultPagination } from "@/constants/api";
import AccordionNavigationItemSkeleton from "./AccordionNavigationItemSkeleton";
import { AccordionNavigationContainer } from "./styled";

const AccordionNavigationSkeleton = () => (
  <AccordionNavigationContainer $height={520}>
    {Array(defaultPagination.pageSize)
      .fill(0)
      .map((_, index) => (
        <AccordionNavigationItemSkeleton key={index} />
      ))}
  </AccordionNavigationContainer>
);

export default AccordionNavigationSkeleton;
