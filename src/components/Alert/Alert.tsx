import {
  AlertConfirmButton,
  AlertContainer,
  AlertFooter,
} from "@/components/Alert/styled";
import Typography from "@/components/ui/Typography";
import Center from "@/components/ui/Center";
import Spinner from "@/components/ui/icons/Spinner";
import Button from "@/components/ui/Button";

interface IAlertProps {
  isLoading: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const Alert = ({ isLoading, onConfirm, onClose }: IAlertProps) =>
  isLoading ? (
    <Center>
      <Spinner $size={48} />
    </Center>
  ) : (
    <AlertContainer>
      <Typography $variant="h1">Вы уверены?</Typography>
      <AlertFooter>
        <Button
          type="button"
          disabled={isLoading}
          onClick={onClose}
          $variant="outline"
        >
          Нет
        </Button>
        <AlertConfirmButton
          type="button"
          disabled={isLoading}
          onClick={onConfirm}
        >
          Да
        </AlertConfirmButton>
      </AlertFooter>
    </AlertContainer>
  );

export default Alert;
