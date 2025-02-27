import { useState } from "react";
import Table from "@/components/ui/Table";
import useGetCourses from "@/api/queries/courses/useGetCourses";
import useGetSubjects from "@/api/queries/subjects/useGetSubjects";
import useGetUsers from "@/api/queries/user/useGetUsers";
import { AllRoles } from "@/constants/enums";
import { defaultPagination } from "@/constants/api";
import {
  curatorColumns,
  lessonColumns,
  studentColumns,
  subjectColumns,
  teacherColumns,
} from "./cols";
import {
  ICuratorProfileRes,
  IStudentProfileRes,
  ITeacherProfileRes,
} from "@/types/response.api";

type TAdminPanelTableProps = {
  search?: string;
};

export const AdminPanelTableStudents = ({ search }: TAdminPanelTableProps) => {
  const [pagination, setPagination] = useState(defaultPagination);
  const { data, isPending } = useGetUsers<IStudentProfileRes>({
    ...pagination,
    name: search,
    role: AllRoles.student,
  });

  return (
    <Table
      data={data}
      isLoading={isPending}
      columns={studentColumns}
      pagination={pagination}
      setPagination={setPagination}
      $borderRadius="0 6px 6px 6px"
    />
  );
};

export const AdminPanelTableTeachers = ({ search }: TAdminPanelTableProps) => {
  const [pagination, setPagination] = useState(defaultPagination);
  const { data, isPending } = useGetUsers<ITeacherProfileRes>({
    ...pagination,
    name: search,
    role: AllRoles.teacher,
  });

  return (
    <Table
      data={data}
      isLoading={isPending}
      columns={teacherColumns}
      pagination={pagination}
      setPagination={setPagination}
      $borderRadius="0 6px 6px 6px"
    />
  );
};

export const AdminPanelTableCurators = ({ search }: TAdminPanelTableProps) => {
  const [pagination, setPagination] = useState(defaultPagination);
  const { data, isPending } = useGetUsers<ICuratorProfileRes>({
    ...pagination,
    name: search,
    role: AllRoles.curator,
  });

  return (
    <Table
      data={data}
      isLoading={isPending}
      columns={curatorColumns}
      pagination={pagination}
      setPagination={setPagination}
      $borderRadius="0 6px 6px 6px"
    />
  );
};

export const AdminPanelTableLessons = ({ search }: TAdminPanelTableProps) => {
  const [pagination, setPagination] = useState(defaultPagination);
  const { data, isPending } = useGetCourses({ ...pagination, search });

  return (
    <Table
      data={data}
      isLoading={isPending}
      columns={lessonColumns}
      pagination={pagination}
      setPagination={setPagination}
      $borderRadius="0 6px 6px 6px"
    />
  );
};

export const AdminPanelTableSubjects = () => {
  const [pagination, setPagination] = useState(defaultPagination);
  const { data, isPending } = useGetSubjects();

  return (
    <Table
      data={data}
      isLoading={isPending}
      columns={subjectColumns}
      pagination={pagination}
      setPagination={setPagination}
      $borderRadius="0 6px 6px 6px"
    />
  );
};
