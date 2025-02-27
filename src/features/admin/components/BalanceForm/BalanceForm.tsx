import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Spinner from "@/components/ui/icons/Spinner";
import useCreatePayment from "@/api/queries/payments/useCreatePayment";
import { PaymentType } from "@/constants/enums";
import { PaymentSchema, TPaymentSchema } from "@/api/schemas/payment";
import FormSelect from "../../../../components/FormSelect";
import FormTextInput from "../../../../components/FormTextInput";
import Center from "@/components/ui/Center";

interface IBalanceFormProps {
  currentBalance: number;
  studentId: string;
  onSuccess?: () => void;
}

const paymentOptions = [
  { value: PaymentType.increment, label: "пополнение" },
  { value: PaymentType.decrement, label: "списание" },
];

const BalanceForm = ({
  currentBalance,
  studentId: id,
  onSuccess,
}: IBalanceFormProps) => {
  const createPayment = useCreatePayment({
    onSuccess,
  });
  const disabled = createPayment.isPending;

  const methods = useForm<TPaymentSchema>({
    resolver: yupResolver(PaymentSchema),
    defaultValues: {
      user: id,
    },
  });

  const onSubmit = (data: TPaymentSchema) => {
    if (
      data.type === PaymentType.decrement &&
      currentBalance - data.amount < 0
    ) {
      methods.setError("amount", {
        message: "Слишком большое списание! Баланс будет отрицательным.",
        type: "value",
      });
      return;
    }

    createPayment.mutate(data);
  };

  if (disabled) {
    return (
      <Center>
        <Spinner $size={48} />
      </Center>
    );
  }

  return (
    <FormProvider {...methods}>
      <Flex
        onSubmit={methods.handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $justifyContent="space-between"
        $height="100%"
        $gap={40}
      >
        <Flex $flexDirection="column" $justifyContent="space-between" $gap={40}>
          <FormTextInput<TPaymentSchema>
            disabled={disabled}
            name="amount"
            defaultValue={0}
            label="Пополнение"
            $textVariant="button"
            $withBottomLine
          />

          <FormSelect<TPaymentSchema>
            name="type"
            defaultValue=""
            options={paymentOptions}
            disabled={disabled}
          />
        </Flex>

        <Button type="submit" $variant="primary">
          {disabled ? <Spinner /> : "Создать"}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default BalanceForm;
