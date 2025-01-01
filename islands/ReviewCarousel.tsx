import ReviewCard from "@components/reviews/ReviewCard.tsx";
import { REVIEWS } from "@config/reviews.ts";
import { useEffect, useState } from "preact/hooks";

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  return (
    <div class="flex items-center justify-between gap-4">
      <button
        onClick={goToPrevious}
        class="text-3xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Previous review"
      >
        ←
      </button>

      <ReviewCard review={REVIEWS[currentIndex]} />

      <button
        onClick={goToNext}
        class="text-3xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Next review"
      >
        →
      </button>
    </div>
  );
}
