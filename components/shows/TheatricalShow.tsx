import type { Production } from "@config/productions.ts";
import type { JSX } from "preact/jsx-runtime";

export default function TheatricalShow(production: Production): JSX.Element {
  return (
    <div class="grid grid-cols-1 gap-2 md:grid-cols-4">
      <h2 class="text-lg font-bold min-w-[10ch]">{production.show}</h2>
      <p class="text-lg min-w-[7ch]">{production.theater}</p>
      <p class="text-lg min-w-[7ch]">{production.location}</p>
      <p class="text-lg max-w-[10ch] min-w-[7ch]">{production.date}</p>
      {production.notes && <p class="text-lg min-w-[7ch]">{production.notes}
      </p>}
    </div>
  );
}
