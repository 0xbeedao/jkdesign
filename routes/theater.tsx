import Seo from "@components/Seo.tsx";
import TheatricalShowList from "@components/shows/TheatricalShowList.tsx";
import { PRODUCTIONS } from "@config/productions.ts";
import type { PageProps } from "$fresh/server.ts";

export default function Theater({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Theater" />
      <h1 class="text-2xl">Theatrical Shows</h1>
      <div class="mt-4">
        <TheatricalShowList productions={PRODUCTIONS} />
      </div>
    </>
  );
}
