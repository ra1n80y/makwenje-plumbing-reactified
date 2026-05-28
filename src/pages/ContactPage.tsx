import { Helmet } from "react-helmet-async";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us – Makwenje Plumbing</title>
      </Helmet>

      <div className={styles.contact}>
        <h1>Contact Us</h1>

        <div className={styles.cards}>
          {/* Instagram */}
          <div className={`${styles.flipCard} ${styles.instagram}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src="/instagram.svg" alt="Instagram" />
              </div>
              <div className={styles.flipCardBack}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram.com
                </a>
              </div>
            </div>
          </div>

          {/* Gmail */}
          <div className={`${styles.flipCard} ${styles.gmail}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src="/gmail.svg" alt="Gmail" />
              </div>
              <div className={styles.flipCardBack}>
                <a href="mailto:Makwenjemaintanance@gmail.com">Email Us</a>
              </div>
            </div>
          </div>

          {/* Twitter / X */}
          <div className={`${styles.flipCard} ${styles.twitter}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src="/x.svg" alt="Twitter" />
              </div>
              <div className={styles.flipCardBack}>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
