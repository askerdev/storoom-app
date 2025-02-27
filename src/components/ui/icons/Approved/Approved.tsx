import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Approved = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5L8.2 16L4 11.875"
        stroke="currentColor"
        strokeWidth="1.02564"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);
export default Approved;
