import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Send = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.84025 8.00001H4.55492C4.55492 7.81668 4.51692 7.63335 4.44159 7.46135L2.85692 3.87601C2.35025 2.72935 3.56225 1.58135 4.67959 2.14868L13.8669 6.81135C14.8403 7.30468 14.8403 8.69535 13.8669 9.18868L4.68025 13.8513C3.56225 14.4187 2.35025 13.27 2.85692 12.124L4.44025 8.53868C4.51509 8.36896 4.55369 8.1855 4.55359 8.00001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledIcon>
);

export default Send;
