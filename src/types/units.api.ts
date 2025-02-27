import { AllRoles, HomeworkStatus, PaymentType } from "@/constants/enums";

export type APIError = {
  statusCode: number;
  message: string;
};

interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IScheduleValue {
  lesson: ILesson;
  course: ICourse & { teacher: ITeacher; lessons: ILesson[] };
}

export interface IUser extends Base {
  name: string;
  email: string;
  role: AllRoles;
  password: string;
  phone: string;
  blocked: boolean;
}

export interface ICourse extends Base {
  cover: string;
  name: string;
  description: string;
  advantages: string[];
  price: number;
}

export interface IHomework extends Base {
  materials: string[];
  status: HomeworkStatus;
}

export interface ILesson extends Base {
  cover: string;
  name: string;
  description: string;
  videoUrl: string[];
  material: string[];
  homeworkDescription: string;
  homeworkMaterial: string[];
  testUrl?: string;
  time: string;
  order: number;
}

export interface IPayment extends Base {
  amount: number;
  type: PaymentType;
}

export interface ISubject extends Base {
  name: string;
}

export interface ISubscription extends Base {
  blocked: boolean;
  curator: ICurator;
}

export interface IStudent extends Base {
  balance: number;
}

export interface ITeacher extends Base {
  subject: ISubject;
  avatar: string;
}

export interface ICurator extends Base {
  subjects: ISubject[];
  doneHomeworksCount?: number;
  avatar: string;
}

export interface INote extends Base {
  title: string;
  body: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
}
