import { ComponentProps, forwardRef } from "react";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import { TextAreaStyledArea } from "./styled";

type TTextAreaProps = ComponentProps<typeof TextAreaStyledArea> & {
  label?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TTextAreaProps>(
  ({ label, ...props }, ref) => (
    <Flex $gap={10} $flexDirection="column" as="label">
      {!!label && <Typography $variant="button">{label}</Typography>}
      <TextAreaStyledArea ref={ref} {...props} />
    </Flex>
  ),
);

export default TextArea;
