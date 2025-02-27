import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Download = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M28 20.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V20.5M9.33333 13.8333L16 20.5M16 20.5L22.6667 13.8333M16 20.5V4.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);

export default Download;
