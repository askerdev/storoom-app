import Typography from "@/components/ui/Typography";
import { HomeworkStatus as EHomeworkStatus } from "@/constants/enums";
import { HomeworkStatusContainer } from "./styled";

type THomeworkStatusProps = {
  status: EHomeworkStatus;
};

const text = {
  checking: "Проверка",
  returned: "На правке",
  approved: "Принято",
};

const HomeworkStatus = ({ status }: THomeworkStatusProps) => (
  <HomeworkStatusContainer $status={status}>
    <Typography $variant="text2" $color="white">
      {text[status]}
    </Typography>
  </HomeworkStatusContainer>
);

export default HomeworkStatus;
