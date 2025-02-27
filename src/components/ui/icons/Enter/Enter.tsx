import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Enter = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M15.125 15.125V11.6875C15.125 10.7758 15.4872 9.90148 16.1318 9.25682C16.7765 8.61216 17.6508 8.25 18.5625 8.25H36.4375C37.3492 8.25 38.2235 8.61216 38.8682 9.25682C39.5128 9.90148 39.875 10.7758 39.875 11.6875V32.3125C39.875 33.2242 39.5128 34.0985 38.8682 34.7432C38.2235 35.3878 37.3492 35.75 36.4375 35.75H18.5625C17.6508 35.75 16.7765 35.3878 16.1318 34.7432C15.4872 34.0985 15.125 33.2242 15.125 32.3125V28.875"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.375 28.875L30.25 22L23.375 15.125M4.125 22H28.875"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);

export default Enter;
