import styles from "./Layout.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      &copy; Makwenje Plumbing (Pty)Ltd - {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
