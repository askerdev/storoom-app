import { ChangeEvent, useEffect, useRef, useState } from "react";
import Flex from "@/components/ui/Flex";
import Input from "@/components/ui/Input";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Cross from "@/components/ui/icons/Cross";
import useTabs from "@/hooks/useTab";
import {
  AdminPanelTableCurators,
  AdminPanelTableLessons,
  AdminPanelTableStudents,
  AdminPanelTableSubjects,
  AdminPanelTableTeachers,
} from "./AdminPanelTables";
import {
  AdminPanelTabContent,
  AdminPanelTabItem,
  AdminPanelTableContainer,
  AdminPanelTabsContainer,
} from "./styled";
import Modal from "../../../../components/Modal";
import CuratorForm from "../../components/CuratorForm";
import SubjectForm from "../../components/SubjectForm";
import TeacherForm from "../../components/TeacherForm";
import useDebounce from "@/hooks/useDebounce";

type TTables = "subjects" | "teachers" | "students" | "lessons" | "curators";

const withoutSearch: TTables[] = ["subjects"];

const AdminPanel = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const { currentTab, getTriggerProps, getContentProps } =
    useTabs<TTables>("teachers");

  const [search, setSearch] = useState("");

  const handleSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  }, 300);

  useEffect(() => {
    setSearch("");
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  }, [currentTab]);

  return (
    <>
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
          <Flex $gap={16} $flexDirection={{ default: "column", lg: "row" }}>
            {!withoutSearch.includes(currentTab) && (
              <Input
                ref={searchRef}
                placeholder="Поиск"
                isSearch
                onChange={handleSearch}
              />
            )}
            {!["students", "lessons"].includes(currentTab) && (
              <Button
                $variant="outline"
                $padding="16px 32px"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Cross $rotateDeg={45} />
              </Button>
            )}
          </Flex>
        </Flex>
        <AdminPanelTableContainer>
          <AdminPanelTabsContainer>
            <AdminPanelTabItem {...getTriggerProps("teachers")}>
              Преподаватели
            </AdminPanelTabItem>
            <AdminPanelTabItem {...getTriggerProps("subjects")}>
              Предметы
            </AdminPanelTabItem>
            <AdminPanelTabItem {...getTriggerProps("students")}>
              Ученики
            </AdminPanelTabItem>
            <AdminPanelTabItem {...getTriggerProps("curators")}>
              Кураторы
            </AdminPanelTabItem>
            {/* <AdminPanelTabItem {...getTriggerProps("lessons")}> */}
            {/*   Уроки */}
            {/* </AdminPanelTabItem> */}
          </AdminPanelTabsContainer>

          <AdminPanelTabContent {...getContentProps("students")}>
            <AdminPanelTableStudents
              search={currentTab === "students" ? search : undefined}
            />
          </AdminPanelTabContent>
          <AdminPanelTabContent {...getContentProps("teachers")}>
            <AdminPanelTableTeachers
              search={currentTab === "teachers" ? search : undefined}
            />
          </AdminPanelTabContent>
          <AdminPanelTabContent {...getContentProps("curators")}>
            <AdminPanelTableCurators
              search={currentTab === "curators" ? search : undefined}
            />
          </AdminPanelTabContent>
          <AdminPanelTabContent {...getContentProps("lessons")}>
            <AdminPanelTableLessons
              search={currentTab === "lessons" ? search : undefined}
            />
          </AdminPanelTabContent>
          <AdminPanelTabContent {...getContentProps("subjects")}>
            <AdminPanelTableSubjects />
          </AdminPanelTabContent>
        </AdminPanelTableContainer>
      </Flex>
      <Modal open={open} onClose={() => setOpen(false)}>
        {currentTab === "curators" && (
          <CuratorForm onSuccess={() => setOpen(false)} />
        )}
        {currentTab === "subjects" && (
          <SubjectForm onSuccess={() => setOpen(false)} />
        )}
        {currentTab === "teachers" && (
          <TeacherForm onSuccess={() => setOpen(false)} />
        )}
      </Modal>
    </>
  );
};

export default AdminPanel;
