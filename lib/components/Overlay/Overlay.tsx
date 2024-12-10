import styles from "./overlay.module.css";

type Props = {
  isOpen: boolean;
};

export const Overlay = ({ isOpen }: Props) => {
  return (
    <div
      className={`${styles.overlay} ${isOpen && styles.visible} iOSPWA-overlay`}
    />
  );
};
