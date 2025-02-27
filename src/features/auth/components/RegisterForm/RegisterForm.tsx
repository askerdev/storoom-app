import { Link } from "@tanstack/react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useStoreon } from "storeon/react";
import { useEffect } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button";

import Typography from "@/components/ui/Typography";
import Spinner from "@/components/ui/icons/Spinner";
import useRegister from "@/api/queries/auth/useRegister";
import {
  RegisterFormCard,
  RegisterFormContainer,
  RegisterFormNoAccountContainer,
  RegisterStyledForm,
} from "@/features/auth/components/RegisterForm/styled";
import { RegisterSchema } from "@/api/schemas/auth";
import { IRegisterDTO } from "@/types/request.api";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

const RegisterForm = () => {
  const { dispatch } = useStoreon<ChatState, ChatEvents>("chats");
  const { control, handleSubmit } = useForm<IRegisterDTO>({
    resolver: yupResolver(RegisterSchema),
  });

  const { mutate: register, isPending: isRegisterPending } = useRegister();

  const onSubmit = (data: IRegisterDTO) => {
    register(data);
  };

  useEffect(() => {
    dispatch(EChatEvents.changeChatState, false);
  }, []);

  return (
    <RegisterFormCard>
      <Typography $variant="h1">Регистрация</Typography>
      <RegisterStyledForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterFormContainer>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            disabled={isRegisterPending}
            render={({ fieldState, field }) => (
              <Input
                placeholder="Имя"
                $fullWidth
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            defaultValue=""
            disabled={isRegisterPending}
            render={({ field, fieldState }) => (
              <Input
                placeholder="Email"
                $fullWidth
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            disabled={isRegisterPending}
            render={({ field, fieldState }) => (
              <Input
                placeholder="Телефон"
                $fullWidth
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            disabled={isRegisterPending}
            render={({ field, fieldState }) => (
              <Input
                placeholder="Пароль"
                type="password"
                $fullWidth
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />

          <RegisterFormNoAccountContainer>
            <span>Уже есть аккаунт?</span>
            <Link to="/auth/login">
              <Typography $variant="text1" $color="purple_200">
                Войти
              </Typography>
            </Link>
          </RegisterFormNoAccountContainer>
        </RegisterFormContainer>
        <Button disabled={isRegisterPending} $variant="primary" type="submit">
          {isRegisterPending ? <Spinner /> : "Зарегестрироваться"}
        </Button>
      </RegisterStyledForm>
    </RegisterFormCard>
  );
};

export default RegisterForm;
