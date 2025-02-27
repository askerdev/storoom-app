/* eslint-disable react/no-array-index-key */
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/icons/Spinner";
import { SwitchCuratorCard } from "@/features/admin/components/CuratorSwitchForm/styled";
import useSwitchCurator from "@/api/queries/subscriptions/useSwitchCurator";
import useGetUsers from "@/api/queries/user/useGetUsers";
import { AllRoles } from "@/constants/enums";
import { ICuratorProfileRes } from "@/types/response.api";
import {
  SwitchCuratorSchema,
  TSwitchCuratorSchema,
} from "@/api/schemas/curator";
import FormSelect from "../../../../components/FormSelect";
import Center from "@/components/ui/Center";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

type TCuratorSwitchForm = {
  from: string;
  onSuccess?: () => void;
};

const CuratorSwitchForm = ({ from, onSuccess }: TCuratorSwitchForm) => {
  const switchCurator = useSwitchCurator(from, { onSuccess });
  const curators = useGetUsers<ICuratorProfileRes>({
    page: 0,
    pageSize: 1000,
    role: AllRoles.curator,
  });
  const disabled = switchCurator.isPending;
  const methods = useForm<TSwitchCuratorSchema>({
    resolver: yupResolver(SwitchCuratorSchema),
    defaultValues: {
      from,
    },
  });

  const onSubmit = ({ to }: TSwitchCuratorSchema) => {
    switchCurator.mutate(to);
  };

  if (disabled) {
    return (
      <Center>
        <Spinner $size={48} />
      </Center>
    );
  }

  return (
    <SwitchCuratorCard>
      <FormProvider {...methods}>
        <Flex
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          onSubmit={methods.handleSubmit(onSubmit)}
          as="form"
          $flexDirection="column"
          $justifyContent="space-between"
          $height="100%"
          $gap={40}
        >
          <Typography $variant="h2">Передать студентов куратору</Typography>
          <FormSelect<TSwitchCuratorSchema>
            name="to"
            defaultValue=""
            disabled={disabled}
            options={(curators.data?.list ?? [])
              .filter((user) => user.curator.id !== from)
              .map((user) => ({
                value: user.curator.id,
                label: user.name,
              }))}
          />

          <Button type="submit" $variant="primary">
            Сохранить
          </Button>
        </Flex>
      </FormProvider>
    </SwitchCuratorCard>
  );
};

export default CuratorSwitchForm;
