import classNames from "@classnames";
import { formatDate } from "@components/util/dates.ts";
import type { Show } from "@config/shows.ts";
import type { JSX } from "preact/jsx-runtime";

export type FashionShowProps = {
  isHeader?: boolean;
  show: Show;
};

export default function FashionShow(
  { show, isHeader }: FashionShowProps,
): JSX.Element {
  return (
    <div
      class={classNames("grid grid-cols-1 gap-2 md:grid-cols-5", {
        "text-xl font-bold hidden md:grid": isHeader,
        "text-lg": !isHeader,
      })}
    >
      <h2 class="text-xl font-bold min-w-[10ch]">{show.show}</h2>
      <p class="min-w-[7ch]">{show.venue}</p>
      <p class="min-w-[7ch]">{show.location}</p>
      <p class="min-w-[7ch]">{formatDate(show.date)}</p>
      {show.notes && <p class="min-w-[7ch]">{show.notes}</p>}
    </div>
  );
}
