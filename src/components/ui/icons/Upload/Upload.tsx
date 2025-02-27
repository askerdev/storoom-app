import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Upload = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83301 23.1666V25.8333C5.83301 26.5405 6.11396 27.2188 6.61406 27.7189C7.11415 28.219 7.79243 28.4999 8.49967 28.4999H24.4997C25.2069 28.4999 25.8852 28.219 26.3853 27.7189C26.8854 27.2188 27.1663 26.5405 27.1663 25.8333V23.1666M9.83301 12.4999L16.4997 5.83325M16.4997 5.83325L23.1663 12.4999M16.4997 5.83325V21.8333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);
export default Upload;
