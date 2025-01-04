import type { Testimonial } from "@config/testimonials.ts";
import type { JSX } from "preact/jsx-runtime";

import TestimonialCard from "./TestimonialCard.tsx";

type TestimonialListProps = {
  testimonials: Testimonial[];
};

function slugifyTestimonial(testimonial: Testimonial): string {
  // Remove punctuation and special characters
  const cleanedName = testimonial.name
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  // Take first 10 characters and append the role
  const truncatedSlug = cleanedName.slice(0, 10);
  return `${truncatedSlug}-${testimonial.role}`;
}

export default function TestimonialList(
  { testimonials }: TestimonialListProps,
): JSX.Element {
  return (
    <div class="flex flex-col space-y-4">
      {testimonials.map((testimonial) => (
        <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
          <TestimonialCard
            key={slugifyTestimonial(testimonial)}
            testimonial={testimonial}
          />
        </div>
      ))}
    </div>
  );
}
