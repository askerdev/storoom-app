import { FC } from "react";
import { StyledFileIcon } from "./styled";
import IconJpeg from "@/assets/icons/files/jpg.svg";
import IconTxt from "@/assets/icons/files/txt.svg";
import IconPdf from "@/assets/icons/files/pdf.svg";
import IconWord from "@/assets/icons/files/doc.svg";
import Image from "@/components/Image";
import { TAllowedFileExtensions } from "@/types/request.api";

interface IFileIconProps {
  type: TAllowedFileExtensions;
}

const typeToIcon: Record<IFileIconProps["type"], string> = {
  jpg: IconJpeg,
  jpeg: IconJpeg,
  txt: IconTxt,
  pdf: IconPdf,
  doc: IconWord,
  docx: IconWord,
};

const FileIcon: FC<IFileIconProps> = ({ type }) => (
  <StyledFileIcon>
    <Image src={typeToIcon[type]} $width={32} $height={32} />
  </StyledFileIcon>
);

export default FileIcon;
