import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Input from "@/components/ui/Input";
import TableSkeleton from "@/components/ui/Table/TableSkeleton";
import {
  AdminPanelTabContent,
  AdminPanelTabItem,
  AdminPanelTableContainer,
  AdminPanelTabsContainer,
} from "./styled";

const AdminPanelSkeleton = () => (
  <Flex
    $flexDirection="column"
    $gap={{
      default: 30,
      lg: 60,
    }}
  >
    <Flex
      $flexDirection={{
        default: "column",
        lg: "row",
      }}
      $justifyContent="space-between"
    >
      <Typography $variant="h2">Панель администратора</Typography>
      <Input placeholder="Поиск" isSearch disabled />
    </Flex>
    <AdminPanelTableContainer>
      <AdminPanelTabsContainer>
        <AdminPanelTabItem $active disabled>
          Преподаватели
        </AdminPanelTabItem>
        <AdminPanelTabItem $active={false} disabled>
          Предметы
        </AdminPanelTabItem>
        <AdminPanelTabItem $active={false} disabled>
          Ученики
        </AdminPanelTabItem>
        <AdminPanelTabItem $active={false} disabled>
          Кураторы
        </AdminPanelTabItem>
        {/* <AdminPanelTabItem $active={false} disabled> */}
        {/*   Уроки */}
        {/* </AdminPanelTabItem> */}
      </AdminPanelTabsContainer>

      <AdminPanelTabContent $active>
        <TableSkeleton />
      </AdminPanelTabContent>
    </AdminPanelTableContainer>
  </Flex>
);

export default AdminPanelSkeleton;
