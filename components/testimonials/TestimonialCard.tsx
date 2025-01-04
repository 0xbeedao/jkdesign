import classNames from "@classnames";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import type { Testimonial } from "@config/testimonials.ts";
import type { JSX } from "preact/jsx-runtime";

export type TestimonialCardProps = {
  testimonial: Testimonial;
  isHeader?: boolean;
};

export default function TestimonialCard(
  { testimonial, isHeader }: TestimonialCardProps,
): JSX.Element {
  return (
    <div
      class={classNames("grid grid-cols-1 gap-2", {
        "text-xl font-bold hidden md:grid": isHeader,
        "text-lg": !isHeader,
      })}
    >
      <h2 class="text-xl font-bold min-w-[10ch]">
        {testimonial.link
          ? (
            <UnstyledLink
              className="underline"
              href={testimonial.link}
            >
              {testimonial.name}
            </UnstyledLink>
          )
          : testimonial.name}
      </h2>
      <p class="prose max-w-none">{testimonial.markdownText}</p>
    </div>
  );
}
