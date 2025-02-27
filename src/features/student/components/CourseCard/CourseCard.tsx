import { useState } from "react";
import Typography from "@/components/ui/Typography";
import BuyCourseForm from "../BuyCourseForm";

import notebook from "@/assets/icons/notebook.png";
import chatBubble from "@/assets/icons/chat_bubble.png";
import {
  CourseCardContainer,
  CourseCardCurrentPrice,
  CourseCardFooter,
  CourseCardHeader,
  CourseCardIcon,
  CourseCardPriceContainer,
  CourseCardTitle,
} from "./styled";
import { ICourse } from "@/types/units.api";
import Modal from "../../../../components/Modal";

type TCourseCardProps = ICourse & {
  icon: "notebook" | "chat_bubble";
};

const CourseCard = ({ icon, ...course }: TCourseCardProps) => {
  const iconImage = icon === "notebook" ? notebook : chatBubble;
  const { name, description, price } = course;
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <CourseCardContainer onClick={() => setOpen(true)}>
        <CourseCardHeader>
          <CourseCardTitle>{name}</CourseCardTitle>
          <Typography
            $variant="text2"
            $color="gray_200"
            $ellipsis
            $lineClamp={{ default: "2", lg: "3" }}
          >
            {description}
          </Typography>
        </CourseCardHeader>

        <CourseCardFooter>
          <CourseCardPriceContainer>
            {/* {!!previousPrice && ( */}
            {/*  <CourseCardPreviousPrice> */}
            {/*    {previousPrice} ₽ */}
            {/*  </CourseCardPreviousPrice> */}
            {/* )} */}
            <CourseCardCurrentPrice>{price} ₽ / мес.</CourseCardCurrentPrice>
          </CourseCardPriceContainer>

          <CourseCardIcon src={iconImage} alt={icon} />
        </CourseCardFooter>
      </CourseCardContainer>
      <Modal open={open} onClose={close}>
        <BuyCourseForm course={course} onSuccess={close} />
      </Modal>
    </>
  );
};

export default CourseCard;
