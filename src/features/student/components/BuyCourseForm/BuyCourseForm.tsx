/* eslint-disable react/no-array-index-key */
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Flex from "@/components/ui/Flex";
import Spinner from "@/components/ui/icons/Spinner";
import useSubscribe from "@/api/queries/subscriptions/useSubscribe";
import {
  BuyCourseFormAdvantage,
  BuyCourseFormAdvantagesList,
  BuyCourseFormCard,
  BuyCourseFormForm,
} from "./styled";
import { ICourse } from "@/types/units.api";
import Select from "@/components/ui/Select";
import useGetInfiniteCuratorsByCourseId from "@/api/queries/user/useGetCuratorsByCourseId";
import InfinitePaginationFetcher from "../../../../components/InfinitePaginationFetcher";
import { ICuratorProfileRes } from "@/types/response.api";

type TBuyCourseFormProps = {
  course: ICourse;
  onSuccess?: () => void;
};

const BuyCourseForm = ({ course, onSuccess }: TBuyCourseFormProps) => {
  const [curator, setCurator] = useState<string | null>(null);

  const { mutate: subscribe, isPending: isSubscribePending } = useSubscribe(
    course.id,
    curator as string,
    onSuccess,
  );
  const curators = useGetInfiniteCuratorsByCourseId(course.id);
  const { handleSubmit } = useForm({
    defaultValues: {
      course: course.id,
    },
  });

  const onSubmit = async () => {
    if (curator === null) {
      setCurator("");
      return;
    }
    if (!curator) {
      return;
    }
    subscribe();
  };

  return (
    <BuyCourseFormCard>
      <Flex $flexDirection="column" $gap={30}>
        <Typography $variant="h1">Курс {course.name}</Typography>
        <Typography $variant="text1" $color="gray_200">
          {course.description}
        </Typography>
        {!!course.advantages?.length && (
          <>
            <Typography $variant="button">Преимущества нашего курса</Typography>
            <BuyCourseFormAdvantagesList>
              {course?.advantages.map((value) => (
                <BuyCourseFormAdvantage key={value}>
                  <Typography $variant="text2">{value}</Typography>
                </BuyCourseFormAdvantage>
              ))}
            </BuyCourseFormAdvantagesList>
          </>
        )}
      </Flex>

      <BuyCourseFormForm onSubmit={handleSubmit(onSubmit)}>
        <Flex $gap={73} $alignItems="center">
          <Typography $variant="button">Стоимость курса</Typography>
          <Typography $variant="h3">{course.price} ₽</Typography>
        </Flex>

        <Flex $flexDirection="column">
          <Flex $gap={{ lg: 40 }} as="label" $alignItems="center">
            <Typography $variant="button">Выберите куратора</Typography>
            <Flex $gap={8} $alignItems="center">
              <Select
                value={curator || ""}
                onChange={setCurator}
                options={(
                  curators.data?.pages.reduce(
                    (allPages, page) => [...allPages, ...page.list],
                    [] as ICuratorProfileRes[],
                  ) || []
                ).map((user) => ({
                  value: user.curator.id,
                  label: user.name,
                }))}
              >
                <InfinitePaginationFetcher fetcher={curators.fetchNextPage} />
              </Select>
            </Flex>
          </Flex>
          {curator !== null && !curator && (
            <Typography $variant="text1" $color="notification">
              Пожалуйста, выберите куратора
            </Typography>
          )}
        </Flex>

        <Button type="submit" $variant="primary">
          {isSubscribePending ? <Spinner /> : "Записаться на курс"}
        </Button>
      </BuyCourseFormForm>
    </BuyCourseFormCard>
  );
};

export default BuyCourseForm;
