import {
  ICuratorProfileOutRes,
  ICuratorProfileRes,
  IStudentProfileOutRes,
  IStudentProfileRes,
} from "@/types/response.api.ts";
import { AllRoles } from "@/constants/enums.ts";

export interface IMessage {
  id: string;
  message: string;
  role: AllRoles.student | AllRoles.curator;
}

export type TRoom = {
  id?: string;
  name: string;
  student: IStudentProfileRes | IStudentProfileOutRes;
  curator: ICuratorProfileRes | ICuratorProfileOutRes;
  createdAt?: Date;
  updatedAt?: Date;
};
