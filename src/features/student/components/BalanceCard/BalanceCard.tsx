import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import {
  BalanceCardContainer,
  BalanceCardTextContainer,
} from "@/features/student/components/BalanceCard/styled";

type TBalanceCardProps = {
  balance: number;
};

const BalanceCard = ({ balance }: TBalanceCardProps) => (
  <BalanceCardContainer>
    <BalanceCardTextContainer>
      <Typography $variant="button" $color="gray_300">
        {balance} ₽
      </Typography>
      <Typography $variant="text2" $color="gray_200">
        Здесь отображается твой текущий баланс
      </Typography>
    </BalanceCardTextContainer>
    <Button $variant="primary">Пополнить</Button>
  </BalanceCardContainer>
);

export default BalanceCard;
