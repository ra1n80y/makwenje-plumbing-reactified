import { useState, useEffect, useRef } from "react";
import styles from "./Slideshow.module.css";
import Lightbox from "./Lightbox";

interface SlideshowProps {
  images: string[];
  visibleCount?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, visibleCount = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Get slide width from the first item on mount and on resize
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const firstSlide = trackRef.current.querySelector<HTMLElement>(
          `.${styles.slideItem}`,
        );
        if (firstSlide) {
          setSlideWidth(firstSlide.offsetWidth);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = Math.max(images.length - visibleCount, 0);
  const goLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const openLightbox = (imgSrc: string) => setLightboxImage(imgSrc);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      <div className={styles.slideshow}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={goLeft}
          aria-label="Previous"
        >
          &lt;
        </button>
        <div
          className={styles.track}
          ref={trackRef}
          style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.slideItem}
              onClick={() => openLightbox(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && openLightbox(img)
              }
            >
              <img src={img} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={goRight}
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
      {lightboxImage && (
        <Lightbox src={lightboxImage} onClose={closeLightbox} />
      )}
    </>
  );
};

export default Slideshow;
