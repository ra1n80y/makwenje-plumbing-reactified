import { Helmet } from "react-helmet-async";
import Slideshow from "../components/ui/Slideshow";
import styles from "./HomePage.module.css";

const galleryImages = Array.from({ length: 11 }, (_, i) => `/img${i + 1}.jpg`);

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Makwenje Plumbing</title>
        <meta
          name="description"
          content="Makwenje Plumbing – easy. simple. fast."
        />
      </Helmet>

      {/* Hero Section */}
      <div className={styles.hero}>
        <img
          src="/makwenje.png"
          alt="Makwenje Logo"
          className={styles.heroLogo}
        />
        <div className={styles.heroText}>
          <p>easy.</p>
          <br />
          <br />
          <p>simple.</p>
          <br />
          <br />
          <p>fast.</p>
        </div>
      </div>

      {/* What We Do */}
      <section className="mb-5">
        <h1 className="text-center">
          <i className="bi bi-wrench fs-2"></i> What We Do
        </h1>
        <div className={styles.smallCardsWrapper}>
          <div className={`${styles.smallCard} ${styles.card1}`}>
            <p>
              <strong>Maintenance & Repairs</strong>
              <br />
              From leaky taps to burst pipes — we handle all routine upkeep and
              emergency fixes to keep your plumbing running smoothly year‑round.
            </p>
          </div>
          <div className={`${styles.smallCard} ${styles.card2}`}>
            <p>
              <strong>New Installations</strong>
              <br />
              Upgrading your kitchen, bathroom, or entire system? We design and
              install modern plumbing setups that are efficient, code‑compliant,
              and built to last.
            </p>
          </div>
          <div className={`${styles.smallCard} ${styles.card3}`}>
            <p>
              <strong>Specialty Services</strong>
              <br />
              Geyser replacements, drain cleaning, water pressure optimisation —
              whatever your unique need, our team has the expertise to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-5">
        <h1 className="text-center">
          <i className="bi bi-grid-fill fs-2"></i> Gallery
        </h1>
        <Slideshow images={galleryImages} visibleCount={4} />
      </section>

      {/* Location */}
      <section className="mb-5">
        <h1 className="text-center">
          <i className="bi bi-geo-alt-fill"></i> Location
        </h1>
        <div className={styles.locationCard}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1234567890!2d27.872345!3d-26.034567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956123456789ab:0xabcdef123456789!2sCosmo+City+2188,+South+Africa!5e0!3m2!1sen!2sza!4v1690000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            />
          </div>
          <div className={styles.locationInfo}>
            <p>
              <i className="fas fa-map-marker-alt"></i> Cosmo City, Roodepoort,
              Johannesburg
            </p>
            <p>
              <i className="fas fa-phone"></i> +27 79 810 4508
            </p>
            <p>
              <i className="fas fa-envelope"></i> Makwenjemaintanance@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
