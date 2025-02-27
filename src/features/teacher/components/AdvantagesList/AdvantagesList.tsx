import { UseFieldArrayReturn } from "react-hook-form";
import { useRef } from "react";
import Flex from "@/components/ui/Flex";
import TextInput from "@/components/ui/TextInput";
import Typography from "@/components/ui/Typography";
import Cross from "@/components/ui/icons/Cross";
import { TCourseSchema } from "@/api/schemas/course";
import { AdvantagesListAdvantage, AdvantagesListContainer } from "./styled";

interface IAdvantagesListProps {
  title: string;
  placeholder: string;
  fieldArray: UseFieldArrayReturn<TCourseSchema, "advantages">;
  disabled?: boolean;
}

const AdvantagesList = ({
  title,
  placeholder,
  fieldArray,
  disabled = false,
}: IAdvantagesListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex $flexDirection="column" $gap={10}>
      <Typography $variant="button">{title}</Typography>
      <AdvantagesListContainer>
        {fieldArray.fields.map(({ id, displayName }, index) => (
          <AdvantagesListAdvantage key={id}>
            <Typography $variant="text2">{displayName}</Typography>
            <button
              type="button"
              onClick={() => fieldArray.remove(index)}
              aria-label="remove"
              disabled={disabled}
            >
              <Cross $size={14} />
            </button>
          </AdvantagesListAdvantage>
        ))}
      </AdvantagesListContainer>
      <TextInput
        ref={inputRef}
        $width={360}
        $textVariant="text1"
        placeholder={placeholder}
        $borderColor="gray_100"
        $withBottomLine
        $padding="16px"
        disabled={disabled}
        onKeyDown={(e) => {
          const { value } = e.currentTarget;
          if (
            e.key === "Enter" &&
            inputRef.current &&
            value.trim().length > 0
          ) {
            fieldArray.append({ displayName: value });
            inputRef.current.value = "";
          }
        }}
      />
    </Flex>
  );
};

export default AdvantagesList;
