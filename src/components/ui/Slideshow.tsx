import { useState, useEffect, useRef, useCallback } from "react";
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
  const [autoplay, setAutoplay] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(images.length - visibleCount, 0);

  const goLeft = useCallback(
    () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    [],
  );
  const goRight = useCallback(
    () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex)),
    [maxIndex],
  );

  // Measure slide width
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

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)); // loop back
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay, maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goLeft();
      else if (e.key === "ArrowRight") goRight();
    };
    const container = containerRef.current;
    container?.addEventListener("keydown", handleKeyDown);
    return () => container?.removeEventListener("keydown", handleKeyDown);
  }, [goLeft, goRight]);

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goRight();
    else if (diff < -50) goLeft();
  };

  const openLightbox = (imgSrc: string) => setLightboxImage(imgSrc);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      <div
        className={styles.slideshow}
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label="Image gallery"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={goLeft}
          aria-label="Previous slide"
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
              <img src={img} alt={`Gallery image ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={goRight}
          aria-label="Next slide"
        >
          &gt;
        </button>

        <button
          onClick={() => setAutoplay((prev) => !prev)}
          className={styles.autoplayToggle}
          aria-pressed={autoplay}
        >
          {autoplay ? "⏸ Pause" : "▶ Play"}
        </button>
      </div>

      {lightboxImage && (
        <Lightbox src={lightboxImage} onClose={closeLightbox} />
      )}
    </>
  );
};

export default Slideshow;
