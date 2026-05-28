import { useEffect } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <img src={src} alt="Enlarged gallery" className={styles.image} />
    </div>
  );
};

export default Lightbox;
