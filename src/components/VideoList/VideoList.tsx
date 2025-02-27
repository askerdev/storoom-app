import { UseFieldArrayReturn } from "react-hook-form";
import { useRef } from "react";
import Flex from "@/components/ui/Flex";
import TextInput from "@/components/ui/TextInput";
import Typography from "@/components/ui/Typography";
import Cross from "@/components/ui/icons/Cross";
import { VideoListContainer } from "./styled";
import { TLessonSchema } from "@/api/schemas/lesson";

interface IVideoListProps {
  title: string;
  placeholder: string;
  fieldArray: UseFieldArrayReturn<TLessonSchema, "videoUrl">;
  errors: string[];
  disabled?: boolean;
}

const VideoList = ({
  title,
  placeholder,
  fieldArray,
  disabled = false,
  errors,
}: IVideoListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex $flexDirection="column" $gap={10}>
      <Typography $variant="button">{title}</Typography>
      <VideoListContainer>
        {fieldArray.fields.map(({ id, value }, index) => (
          <Flex $flexDirection="column" $gap={4} key={id}>
            <Flex $gap={8}>
              <Typography $variant="button">{index + 1}. </Typography>
              <a
                href={value}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (disabled) {
                    e.preventDefault();
                  }
                }}
              >
                <Typography $variant="button" $color="purple_200">
                  {value}
                </Typography>
              </a>
              <button
                type="button"
                onClick={() => fieldArray.remove(index)}
                aria-label="remove"
                disabled={disabled}
              >
                <Cross $size={14} />
              </button>
            </Flex>
            <Typography $variant="text2" $color="notification">
              {errors?.[index]}
            </Typography>
          </Flex>
        ))}
      </VideoListContainer>
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
            fieldArray.append({ value });
            inputRef.current.value = "";
          }
        }}
      />
    </Flex>
  );
};

export default VideoList;
