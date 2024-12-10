import { IconClose } from "../IconClose";

import styles from "./closeButton.module.css";

type Props = {
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

export const CloseButton = ({ onClose, disabled }: Props) => {
  return (
    <button
      className={`${styles.closeButton} iOSPWA-closeButton`}
      onClick={onClose}
      disabled={disabled}
    >
      <IconClose />
    </button>
  );
};
