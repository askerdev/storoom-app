import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Returned = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2379 16.2379L5.76172 5.76172M16.2379 5.76172L5.76172 16.2379"
        stroke="currentColor"
        strokeWidth="0.769231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);
export default Returned;
