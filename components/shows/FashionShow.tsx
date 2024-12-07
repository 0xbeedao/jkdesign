import type { Show } from "@config/shows.ts";
import type { JSX } from "preact/jsx-runtime";

export default function FashionShow(show: Show): JSX.Element {
  return (
    <div class="grid grid-cols-1 gap-2 md:grid-cols-5">
      <h2 class="text-lg font-bold min-w-[10ch]">{show.show}</h2>
      <p class="text-lg min-w-[7ch]">{show.venue}</p>
      <p class="text-lg min-w-[7ch]">{show.location}</p>
      <p class="text-lg max-w-[10ch] min-w-[7ch]">{show.date}</p>
      {show.notes && <p class="text-lg min-w-[7ch]">{show.notes}</p>}
    </div>
  );
}
