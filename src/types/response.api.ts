import {
  ICourse,
  ICurator,
  IHomework,
  ILesson,
  INote,
  IPagination,
  IScheduleValue,
  IStudent,
  ISubject,
  ITeacher,
  IUser,
} from "@/types/units.api";
import { IMessage, TRoom } from "@/store/types.ts";

export interface IResPagination extends IPagination {
  total: number;
}

export interface IProfileRes extends IUser {}

export interface IRegisterRes extends IUser {}

export interface ICreateCourseRes extends ICourse {}

export interface ICourseByIdRes extends ICourse {
  lessons: ILesson[];
}

export interface ICourseListRes {
  list: (ICourse & { teacher: ITeacher & { user: IUser } })[];
  pagination: IResPagination;
}

export interface IChatListRes {
  list: IMessage[];
  pagination: IResPagination;
}

export interface ITeacherCourseListRes {
  list: (ICourse & {
    lessons: ILesson[];
    teacher: ITeacher & { user: IUser };
  })[];
  pagination: IResPagination;
}

export interface ICuratorCourseListRes {
  list: (ICourse & {
    lessons: ILesson[];
    teacher: ITeacher & { user: IUser };
  })[];
  pagination: IResPagination;
}

export interface IScheduleRes extends Record<string, IScheduleValue[]> {}

export interface ICreateHomeworkRes extends IHomework {}

export interface IHomeworkListRes {
  list: (IHomework & {
    lesson: ILesson;
    student: IStudent & { user: IUser };
  })[];
  pagination: IResPagination;
}

export interface IHomeworkByLessonIdRes extends IHomework {
  lesson: ILesson;
  student: IStudent & { user: IUser };
}

export interface IHomeworkByIdRes extends IHomework {
  lesson: ILesson;
  student: IStudent & { user: IUser };
}

export interface ICreateLessonRes extends ILesson {}

export type ILessonListByCourseIdRes = (ILesson & { course: ICourse })[];

// export interface ILessonListByCourseIdRes  {
//
// }

export interface ILessonByIdRes extends ILesson {}

export interface ICreateSubjectRes extends ISubject {}

export interface ISubjectListRes {
  list: ISubject[];
  pagination: IResPagination;
}

export interface ISubjectByIdRes extends ISubject {}

export interface ISubscribedCoursesListRes {
  list: (ICourse & {
    teacher: ITeacher & {
      user: IUser;
    };
    lessons: (ILesson & { homeworks: [IHomework] | [] })[];
  })[];
  pagination: IResPagination;
}
export interface ISubscribedLessonsListRes {
  list: (ILesson & {
    homeworks: [IHomework];
    course: ICourse & {
      teacher: ITeacher & {
        user: IUser;
      };
    };
  })[];
  pagination: IResPagination;
}

export interface IStudentProfileRes extends IUser {
  student: IStudent;
}

export interface ITeacherProfileRes extends IUser {
  teacher: ITeacher;
}

export interface IStudentProfileOutRes {
  student: IStudent;
  user: IUser;
}

export interface IStudentSubscription {
  blocked: boolean;
  course: ICourse;
  id: string;
  student: IStudent;
}

export interface ICuratorProfileRes extends IUser {
  curator: ICurator;
  doneHomeworksCount?: number;
}

export interface ICuratorProfileOutRes {
  curator: ICurator;
  doneHomeworksCount?: number;
  user: IUser;
}

export interface IUserListRes<T> {
  list: T[];
  pagination: IResPagination;
}

export interface ICuratorListByCourseIdRes {
  list: ICuratorProfileRes[];
  pagination: IResPagination;
}

export interface ICuratorListRes {
  list: ICuratorProfileRes[];
  pagination: IResPagination;
}

export interface INoteListRes {
  list: INote[];
  pagination: IResPagination;
}

export interface INotificationListRes {
  notification: {
    id: string;
    userId: string;
    rooms: string[];
  };
  allRooms: TRoom[];
}
