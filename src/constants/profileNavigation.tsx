import PlayerBook from "@/components/ui/icons/PlayerBook";
import Shop from "@/components/ui/icons/Shop";
import Calendar from "@/components/ui/icons/Calendar";
import { TNavigationItem } from "@/types/navigation";

export const STUDENT_PROFILE_NAVIGATION: TNavigationItem[] = [
  {
    href: "/student/shop",
    icon: <Shop $size={32} />,
    displayName: "Магазин",
  },
  {
    href: "/student/schedule",
    icon: <Calendar $size={32} />,
    displayName: "Расписание",
  },
  {
    href: "/student/education",
    icon: <PlayerBook $size={32} />,
    displayName: "Обучение",
  },
];

export const TEACHER_PROFILE_NAVIGATION: TNavigationItem[] = [
  {
    href: "/teacher/schedule",
    icon: <Calendar $size={32} />,
    displayName: "Расписание",
  },
  {
    href: "/teacher/courses",
    icon: <PlayerBook $size={32} />,
    displayName: "Курсы",
  },
];
