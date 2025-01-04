import classNames from "@classnames";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import type { Testimonial } from "@config/testimonials.ts";
import type { JSX } from "preact/jsx-runtime";

export type TestimonialCardProps = {
  testimonial: Testimonial;
  isHeader?: boolean;
};

function cleanShowLink(show: Show): Show {
  const filename = `${Deno.cwd()}/routes${show.link}.tsx`;
  try {
    // Check if file exists
    Deno.statSync(filename);
    return show;
  } catch {
    // If file doesn't exist, return show with empty link
    console.log("File does not exist: " + filename);
    return {
      ...show,
      link: "",
    };
  }
}

export default function TestimonialCard(
  { testimonial, isHeader }: TestimonialCardProps,
): JSX.Element {
  const shows = testimonial.shows.map(cleanShowLink);
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
      <h2 class="text-lg font-bold">Collaborations</h2>
      <ul class="flex flex-col space-y-2 list-inside list-disc">
        {shows.map((show) => (
          <li>
            <UnstyledLink
              className={show.link !== "" ? "underline" : ""}
              href={show.link}
            >
              {show.title}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
