/* START AUTH */
import { AllRoles, HomeworkStatus, PaymentType } from "@/constants/enums";

export type TAllowedFileExtensions =
  | "pdf"
  | "txt"
  | "docx"
  | "doc"
  | "jpg"
  | "jpeg";

export interface ILoginDTO {
  email: string;
  password: string;
  remember?: boolean;
}

export interface IRegisterDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
}

/* END AUTH */

/* START COURSE */
export interface ICreateCourseDTO {
  name: string;
  description: string;
  price: number;
  advantages: string[];
}

export interface ICourseFilter {
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface IChatFilter {
  page?: number;
  pageSize?: number;
  skip: number;
  roomName?: string;
}

export interface IUpdateCourseDTO extends Partial<ICreateCourseDTO> {}

/* END COURSE */

/* START HOMEWORKS */
export interface ICreateHomeworkDTO {
  materials: string[];
  lesson: string;
}

export interface IHomeworkFilter {
  page?: number;
  pageSize?: number;
  lesson: string;
  status?: HomeworkStatus;
}

export interface IUpdateHomeworkDTO {
  materials?: string[];
}

/* END HOMEWORKS */

/* START LESSONS */
export interface ICreateLessonDTO {
  name: string;
  description: string;
  homeworkDescription: string;
  videoUrl: string[];
  testUrl?: string;
  course: string;
  material: string[];
  homeworkMaterial: string[];
  time: Date;
  order: number;
}

export interface ILessonFilter {
  page?: number;
  pageSize?: number;
  lesson?: string;
}

export interface IChangeLessonOrderDTO {
  lesson: string;
  order: number;
}

export interface IUpdateLessonDTO {
  name?: string;
  description?: string;
  homeworkDescription?: string;
  videoUrl?: string[];
  testUrl?: string;
  material?: string[];
  homeworkMaterial?: string[];
  time?: string;
  order?: number;
}

/* END LESSONS */

/* START PAYMENTS */
export interface ICreatePaymentDTO {
  amount: number;
  user: string;
  type: PaymentType;
}

/* END PAYMENTS */

/* START SUBJECTS */
export interface ICreateSubjectDTO {
  name: string;
}

export interface IUpdateSubjectDTO extends Partial<ICreateSubjectDTO> {}

/* END SUBJECTS */

/* START SUBSCRIPTIONS */
export interface ISubscriptionsFilter {
  page?: number;
  pageSize?: number;
  search?: string;
}

/* END SUBSCRIPTIONS */

/* START USERS */
export interface IUsersFilter {
  page?: number;
  pageSize?: number;
  name?: string;
  role?: AllRoles;
  email?: string;
}

export interface ITeacherDTO {
  subject: string;
  avatar: string;
}

export interface ICuratorDTO {
  subjects: string[];
}

export interface ICreateUserDTO {
  name: string;
  email: string;
  role: AllRoles;
  password: string;
  phone: string;
  blocked?: boolean;
  teacher?: ITeacherDTO;
  curator?: ICuratorDTO;
}

export interface IUpdateUserDTO {
  name?: string;
  email?: string;
  role?: AllRoles;
  phone?: string;
  blocked?: boolean;
}

export interface IUpdateCuratorDTO {
  user: IUpdateUserDTO;
  curator: ICuratorDTO;
}

export interface IUpdateTeacherDTO {
  user: IUpdateUserDTO;
  teacher: ITeacherDTO;
}

/* END USERS */

/* START NOTES */
export interface INotesFilter {
  page?: number;
  pageSize?: number;
  lesson: string;
  search?: string;
}

export interface ICreateNoteDTO {
  title: string;
  body: string;
  lesson: string;
}
/* END NOTES */
