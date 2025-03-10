import { StyledIcon, TStyledIconProps } from "@/components/ui/icons/styled";

const Search = (props: TStyledIconProps) => (
  <StyledIcon {...props}>
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M10.3636 3.5C8.90722 3.5 7.48354 3.93187 6.2726 4.74099C5.06167 5.55011 4.11786 6.70015 3.56052 8.04567C3.00319 9.39119 2.85737 10.8718 3.14149 12.3002C3.42562 13.7286 4.12693 15.0406 5.15675 16.0704C6.18657 17.1003 7.49863 17.8016 8.92703 18.0857C10.3554 18.3698 11.836 18.224 13.1815 17.6667C14.527 17.1093 15.6771 16.1655 16.4862 14.9546C17.2953 13.7437 17.7272 12.32 17.7272 10.8636C17.7271 8.91069 16.9512 7.0378 15.5703 5.65688C14.1894 4.27597 12.3165 3.50012 10.3636 3.5Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M15.8574 16.3574L21.0001 21.5001"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  </StyledIcon>
);
export default Search;
