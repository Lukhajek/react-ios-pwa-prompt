import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { CloseButton } from "../CloseButton";

import styles from "./header.module.css";
import { useEffect, useState } from "react";

type Props = {
  appIconPath: string;
  copySubtitle: string;
  copyTitle: string;
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
  timeToClose: number;
  isOpen: boolean;
};

export const Header = ({
  appIconPath,
  copySubtitle,
  copyTitle,
  onClose,
  timeToClose,
  isOpen,
}: Props) => {
  const [percentage, setPercentage] = useState<number>(0);
  useEffect(() => {
    if (!isOpen) {
      setPercentage(0);
      return;
    }
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 100 / (timeToClose / 1000) / 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isOpen, timeToClose]);

  return (
    <div className={`${styles.header} iOSPWA-header`}>
      <div className={styles.appInfo}>
        <img className={styles.appIcon} src={appIconPath} />
        <div className={styles.appTitleContainer}>
          <span className={styles.appTitle}>{copyTitle}</span>
          <span className={styles.appSubtitle}>{copySubtitle}</span>
        </div>
      </div>

      <div
        style={{
          width: "38px",
          height: "38px",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: `rgba(10, 132, 255)`,
              pathTransitionDuration: 0.2,
              pathTransition: "linear",
            })}
          />
        </div>
        <CloseButton disabled={percentage < 100} onClose={onClose} />
      </div>
    </div>
  );
};
