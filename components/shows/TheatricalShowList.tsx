import type { Production } from "@config/productions.ts";
import type { JSX } from "preact/jsx-runtime";

import TheatricalShow from "./TheatricalShow.tsx";

type TheatricalShowListProps = {
  productions: Production[];
};

function slugifyProduction(production: Production): string {
  // Remove punctuation and special characters
  const cleanedShow = production.show
    .replace(/[^\w\s-]/g, "") // Remove all non-word chars except spaces and dashes
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // Replace spaces with dashes

  // Take first 10 characters
  const truncatedSlug = cleanedShow.slice(0, 10);

  // Append the date
  return `${truncatedSlug}-${production.date}`;
}

export default function TheatricalShowList(
  { productions }: TheatricalShowListProps,
): JSX.Element {
  const headerProduction: Production = {
    show: "Show",
    theater: "Theater",
    location: "Location",
    date: "Date",
  };
  return (
    <div class="flex flex-col space-y-4">
      <TheatricalShow isHeader production={headerProduction} />
      {productions.map((production) => (
        <TheatricalShow
          key={slugifyProduction(production)}
          production={production}
        />
      ))}
    </div>
  );
}
