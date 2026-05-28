import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.customNavbar}>
        <div className={styles.brand}>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/mk-nav.png"
              alt="MK Logo"
              style={{ height: 30, marginRight: "0.5rem" }}
            />
            {import.meta.env.VITE_SITE_TITLE || "Makwenje Plumbing"}
          </Navbar.Brand>
        </div>
        <div className={styles.navLinks}>
          <Link to="/" className={`${styles.homeLink} ${styles.link}`}>
            <i className="fas fa-house"></i> Home
          </Link>
          <Link to="/about" className={`${styles.aboutLink} ${styles.link}`}>
            <i className="fas fa-circle-info"></i> About
          </Link>
          <Link
            to="/contact"
            className={`${styles.contactLink} ${styles.link}`}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
