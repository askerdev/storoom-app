import Flex from "@/components/ui/Flex";
import Skeleton from "@/components/ui/Skeleton";
import { TableWrapper } from "@/components/ui/Table/styled";
import TableSkeleton from "@/components/ui/Table/TableSkeleton";
import {
  CuratorHomeworksTableContainer,
  CuratorHomeworksTabsContainer,
  CuratorHomeworksTabItem,
} from "./styled";

const CuratorHomeworksSkeleton = () => (
  <Flex $flexDirection="column" $gap={{ default: 32, lg: 64 }}>
    <Flex $flexDirection="column" $gap={{ default: 12, lg: 32 }}>
      <Skeleton
        $width="100%"
        $maxWidth={746}
        $height={{ default: 33, lg: 52 }}
      />
      <Skeleton $width="100%" $maxWidth={746} $height={44} />
    </Flex>

    <CuratorHomeworksTableContainer>
      <CuratorHomeworksTabsContainer>
        <CuratorHomeworksTabItem $active>В работе</CuratorHomeworksTabItem>
        <CuratorHomeworksTabItem $active={false}>
          Проверенные
        </CuratorHomeworksTabItem>
      </CuratorHomeworksTabsContainer>
      <TableWrapper>
        <TableSkeleton />
      </TableWrapper>
    </CuratorHomeworksTableContainer>
  </Flex>
);

export default CuratorHomeworksSkeleton;
