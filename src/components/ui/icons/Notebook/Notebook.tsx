import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Notebook = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M4 11.1665C4 7.39584 4 5.50917 5.172 4.3385C6.34267 3.1665 8.22933 3.1665 12 3.1665H20C23.7707 3.1665 25.6573 3.1665 26.828 4.3385C28 5.50917 28 7.39584 28 11.1665V21.8332C28 25.6038 28 27.4905 26.828 28.6612C25.6573 29.8332 23.7707 29.8332 20 29.8332H12C8.22933 29.8332 6.34267 29.8332 5.172 28.6612C4 27.4905 4 25.6038 4 21.8332V11.1665Z"
        strokeWidth="2"
      />
      <path
        d="M10.6667 3.83301V29.833M2.66675 16.4997H5.33341M2.66675 21.833H5.33341M2.66675 11.1663H5.33341M15.3334 9.16634H22.0001M15.3334 13.833H22.0001"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </StyledIcon>
);
export default Notebook;
