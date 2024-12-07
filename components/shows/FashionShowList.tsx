import type { Show } from "@config/shows.ts";
import type { JSX } from "preact/jsx-runtime";

import FashionShow from "./FashionShow.tsx";

type FashionShowListProps = {
  shows: Show[];
};

function slugifyShow(show: Show): string {
  // Remove punctuation and special characters
  const cleanedShow = show.show
    .replace(/[^\w\s-]/g, "") // Remove all non-word chars except spaces and dashes
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // Replace spaces with dashes

  // Take first 10 characters
  const truncatedSlug = cleanedShow.slice(0, 10);

  // Append the date
  return `${truncatedSlug}-${show.date}`;
}

export default function FashionShowList(
  { shows }: FashionShowListProps,
): JSX.Element {
  const headerShow: Show = {
    show: "Show",
    venue: "Venue",
    location: "Location",
    date: "Date",
  };
  return (
    <div class="flex flex-col space-y-4">
      <FashionShow isHeader show={headerShow} />
      {shows.map((show) => <FashionShow key={slugifyShow(show)} show={show} />)}
    </div>
  );
}
