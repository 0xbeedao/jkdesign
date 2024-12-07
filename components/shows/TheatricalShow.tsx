import type { Production } from "@config/productions.ts";
import type { JSX } from "preact/jsx-runtime";

export default function TheatricalShow(production: Production): JSX.Element {
  return (
    <div class="flex flex-col space-y-2">
      <h2 class="text-xl font-bold">{production.show}</h2>
      <p class="text-lg">{production.theater}</p>
      <p class="text-lg">{production.location}</p>
      <p class="text-lg">{production.date}</p>
      {production.notes && <p class="text-lg">{production.notes}</p>}
    </div>
  );
}
