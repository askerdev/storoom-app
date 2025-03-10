import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Mail = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M36.6666 10.0001C36.6666 8.16675 35.1666 6.66675 33.3333 6.66675H6.66659C4.83325 6.66675 3.33325 8.16675 3.33325 10.0001V30.0001C3.33325 31.8334 4.83325 33.3334 6.66659 33.3334H33.3333C35.1666 33.3334 36.6666 31.8334 36.6666 30.0001V10.0001ZM33.3333 10.0001L19.9999 18.3334L6.66659 10.0001H33.3333ZM33.3333 30.0001H6.66659V13.3334L19.9999 21.6667L33.3333 13.3334V30.0001Z" />
    </svg>
  </StyledIcon>
);

export default Mail;
