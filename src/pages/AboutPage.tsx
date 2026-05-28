import { Helmet } from "react-helmet-async";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About – Makwenje Plumbing</title>
      </Helmet>

      <div className={styles.about}>
        <h1>About</h1>

        <p>
          Makwenje Plumbing is committed to delivering top-quality plumbing
          services that are easy, simple, and fast. We believe in integrity,
          efficiency, and exceeding client expectations.
        </p>

        <h2>Our Values</h2>
        <ul className={styles.values}>
          <li>Professionalism in every project</li>
          <li>Integrity and trust</li>
          <li>Fast, reliable solutions</li>
        </ul>

        <div className={styles.founderSection}>
          <h2>About the Founder</h2>
          <div className={styles.founderContent}>
            <img src="/public/makwenje.png" alt="Founder" />
            <p>
              Khathutshelo Hlekani founded Makwenje Plumbing with a vision to
              provide efficient and reliable plumbing solutions across Cosmo
              City. With years of experience and a passion for excellence, he
              ensures that every project is executed with precision, integrity,
              and care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
