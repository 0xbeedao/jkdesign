import type { Review } from "@config/reviews.ts";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div class="rounded-lg border border-gray-300 dark:border-gray-700 p-4">
      <p class="italic mb-4">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div class="flex justify-between items-center">
        <div>
          <a
            href={review.page}
            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            Show details
          </a>
        </div>
        <div>
          <a
            href={review.attributionLink}
            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            {review.attribution}
          </a>
        </div>
      </div>
    </div>
  );
}
