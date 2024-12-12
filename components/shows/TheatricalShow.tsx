import classNames from "@classnames";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { formatDate } from "@components/util/dates.ts";
import type { Production } from "@config/productions.ts";
import type { JSX } from "preact/jsx-runtime";

export type TheatricalShowProps = {
  production: Production;
  isHeader?: boolean;
};
export default function TheatricalShow(
  { production, isHeader }: TheatricalShowProps,
): JSX.Element {
  return (
    <div
      class={classNames("grid grid-cols-1 gap-2 md:grid-cols-4", {
        "text-xl font-bold hidden md:grid": isHeader,
        "text-lg": !isHeader,
      })}
    >
      <h2 class="text-xl font-bold min-w-[10ch]">
        {production.link
          ? (
            <UnstyledLink
              className="underline"
              href={production.link}
            >
              {production.show}
            </UnstyledLink>
          )
          : production.show}
      </h2>
      <p class="min-w-[7ch]">{production.theater}</p>
      <p class="min-w-[7ch]">{production.location}</p>
      <p class="min-w-[7ch]">
        {formatDate(production.date)}
      </p>
      {production.notes && <p class="text-lg min-w-[7ch]">{production.notes}
      </p>}
    </div>
  );
}
