import { PropsWithChildren, useState } from "react";
import Menu from "@/components/ui/icons/Menu";
import OverlayPortal from "@/components/OverlayPortal";

import {
  BurgerMenuContainer,
  BurgerMenuHeader,
  BurgerMenuTrigger,
} from "@/components/BurgerMenu/styled";

type TBurgerMenuProps = PropsWithChildren;

const BurgerMenu = ({ children }: TBurgerMenuProps) => {
  const [show, setShow] = useState(false);

  const triggerMenu = () => setShow((prev) => !prev);
  const close = () => setShow(false);

  return (
    <>
      <BurgerMenuTrigger type="button" onClick={triggerMenu} aria-label="menu">
        <Menu $color="gray_200" $size={44} />
      </BurgerMenuTrigger>
      <OverlayPortal>
        <BurgerMenuContainer $active={show}>
          <BurgerMenuHeader>
            <BurgerMenuTrigger
              type="button"
              onClick={triggerMenu}
              aria-label="menu"
            >
              <Menu $color="gray_200" $size={44} />
            </BurgerMenuTrigger>
          </BurgerMenuHeader>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div onClick={close}>{children}</div>
        </BurgerMenuContainer>
      </OverlayPortal>
    </>
  );
};

export default BurgerMenu;
