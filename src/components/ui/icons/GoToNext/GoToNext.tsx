import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const GoToNext = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.375 11.5825C2.54167 11.1014 2.54167 9.89859 3.375 9.41747L12.375 4.22131C13.2083 3.74019 14.25 4.3416 14.25 5.30385L14.25 15.6962C14.25 16.6584 13.2083 17.2598 12.375 16.7787L3.375 11.5825Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 2.5L2 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </StyledIcon>
);

export default GoToNext;
