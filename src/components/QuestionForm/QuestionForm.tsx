import { Link } from "@tanstack/react-router";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import {
  QuestionFormCard,
  QuestionFormContainer,
  QuestionFormNoAccountContainer,
  QuestionStyledForm,
} from "@/components/QuestionForm/styled";

const QuestionForm = () => (
  <QuestionFormCard>
    <Typography $variant="h1">Оставьте заявку</Typography>
    <QuestionStyledForm>
      <QuestionFormContainer>
        <Input placeholder="Имя" $fullWidth />
        <Input placeholder="Email" $fullWidth />
        <Input placeholder="Пароль" type="password" $fullWidth />
        <QuestionFormNoAccountContainer>
          <span>Уже есть аккаунт?</span>
          <Link href="/public">
            <Typography $variant="text1" $color="purple_200">
              Войти
            </Typography>
          </Link>
        </QuestionFormNoAccountContainer>
      </QuestionFormContainer>
      <Button $variant="primary" type="submit">
        Отправить
      </Button>
    </QuestionStyledForm>
  </QuestionFormCard>
);

export default QuestionForm;
