import { Link } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreon } from "storeon/react";
import { useEffect } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button";

import Typography from "@/components/ui/Typography";
import Spinner from "@/components/ui/icons/Spinner";
import useLogin from "@/api/queries/auth/useLogin";
import {
  LoginFormCard,
  LoginFormContainer,
  LoginFormNoAccountContainer,
  LoginStyledForm,
} from "@/features/auth/components/LoginForm/styled";
import { LoginSchema, TLoginSchema } from "@/api/schemas/auth";
import { ChatEvents, ChatState, EChatEvents } from "@/store/chats.ts";

const LoginForm = () => {
  const { dispatch } = useStoreon<ChatState, ChatEvents>("chats");
  const { control, handleSubmit } = useForm<TLoginSchema>({
    resolver: yupResolver(LoginSchema),
  });
  const { mutate: login, isPending: isLoginPending } = useLogin();

  const onSubmit = (data: TLoginSchema) => {
    login(data);
  };

  useEffect(() => {
    dispatch(EChatEvents.changeChatState, false);
  }, []);

  return (
    <LoginFormCard>
      <Typography $variant="h1">Вход</Typography>
      <LoginStyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <LoginFormContainer>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            disabled={isLoginPending}
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
            name="password"
            defaultValue=""
            disabled={isLoginPending}
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

          <LoginFormNoAccountContainer>
            <span>Нет аккаунта?</span>
            <Link to="/auth/register">
              <Typography $variant="text1" $color="purple_200">
                Зарегистрироваться
              </Typography>
            </Link>
          </LoginFormNoAccountContainer>
        </LoginFormContainer>
        <Button disabled={isLoginPending} $variant="primary" type="submit">
          {isLoginPending ? <Spinner /> : "Войти"}
        </Button>
      </LoginStyledForm>
    </LoginFormCard>
  );
};

export default LoginForm;
