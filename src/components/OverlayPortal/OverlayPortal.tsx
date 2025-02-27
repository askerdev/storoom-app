import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const OverlayPortal = ({ children }: PropsWithChildren) =>
  createPortal(children, document.body);

export default OverlayPortal;
