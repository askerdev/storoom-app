import Typography from "@/components/ui/Typography";
import useGetStudentCourses from "@/api/queries/subscriptions/useGetStudentCourses.ts";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import { IStudentSubscription } from "@/types/response.api.ts";
import useBlockSubscribe from "@/api/queries/subscriptions/useBlockSubscribe.ts";
import useUnblockSubscribe from "@/api/queries/subscriptions/useUnblockSubscribe.ts";

type TCoursesProps = {
  studentId: string;
};

const Courses = ({ studentId }: TCoursesProps) => {
  const { data: subscriptions, isLoading } = useGetStudentCourses(studentId);
  const { mutate: blockSubscription, isPending: isBlockLoading } =
    useBlockSubscribe();
  const { mutate: unblockSubscription, isPending: isUnblockLoading } =
    useUnblockSubscribe();

  const handleChangeSubscribeStatus =
    (subscription: IStudentSubscription) => () => {
      if (!isBlockLoading && !isUnblockLoading) {
        if (subscription.blocked) {
          unblockSubscription(subscription.id);
        } else {
          blockSubscription(subscription.id);
        }
      }
    };

  if (isLoading || !subscriptions?.length) {
    return null;
  }

  return (
    <Flex $gap={14} $flexDirection="column" $overflow="auto" $height="270px">
      <Typography as="label" $variant="h3">
        Курсы
      </Typography>
      <Flex
        $gap={8}
        $width="100%"
        $flexDirection="column"
        $p="10px 10px 10px 0px"
      >
        {subscriptions.map((subscription) => (
          <Flex
            // key={subscription.id}
            $alignItems="center"
            $justifyContent="space-between"
            $width="100%"
          >
            <Typography as="label" $variant="button">
              {subscription.course.name}
            </Typography>
            <Button
              $variant={subscription.blocked ? "primary" : "error"}
              type="button"
              $padding="8px 12px"
              onClick={handleChangeSubscribeStatus(subscription)}
            >
              <Typography $variant="text1">
                {subscription.blocked ? "разблокировать" : "заблокировать"}
              </Typography>
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
export default Courses;
