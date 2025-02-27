import { ReactNode, useCallback, useLayoutEffect } from "react";
import { useIsMutating } from "@tanstack/react-query";
import OverlayPortal from "@/components/OverlayPortal";
import {
  ModalBody,
  ModalCard,
  ModalHeader,
  ModalOverlay,
} from "@/components/Modal/styled";
import Cross from "@/components/ui/icons/Cross";
import useLatest from "@/hooks/useLatest";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, children, onClose }: IModalProps) => {
  const mutatingCount = useIsMutating();
  const disabled = !!mutatingCount;
  const latestDisabled = useLatest(disabled);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !latestDisabled.current) {
        onClose();
      }
    },
    [latestDisabled],
  );

  useLayoutEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleClickOverlay = () => {
    if (disabled) {
      return;
    }
    onClose();
  };

  return (
    <OverlayPortal>
      {open && (
        <ModalOverlay onClick={handleClickOverlay}>
          <ModalCard
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalHeader>
              <button
                type="button"
                onClick={onClose}
                disabled={disabled}
                aria-label="close"
              >
                <Cross $size={40} $color="gray_200" />
              </button>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalCard>
        </ModalOverlay>
      )}
    </OverlayPortal>
  );
};

export default Modal;
