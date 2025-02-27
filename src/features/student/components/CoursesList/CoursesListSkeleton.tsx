import CourseCardSkeleton from "@/features/student/components/CourseCard/CourseCardSkeleton";

const CoursesListSkeleton = () =>
  Array(9)
    .fill(0)
    .map((_, index) => <CourseCardSkeleton key={index} />);

export default CoursesListSkeleton;
