import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Cross = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M29.5238 29.5237L10.4762 10.4761M29.5238 10.4761L10.4762 29.5237"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);

export default Cross;
