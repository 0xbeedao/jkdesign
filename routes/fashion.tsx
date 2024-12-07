import Seo from "@components/Seo.tsx";
import FashionShowList from "@components/shows/FashionShowList.tsx";
import { SHOWS } from "@config/shows.ts";
import type { PageProps } from "$fresh/server.ts";

export default function Fashion({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Fashion" />
      <h1 class="text-2xl">Fashion Shows &amp; Competitions</h1>
      <div class="mt-4">
        <FashionShowList shows={SHOWS} />
      </div>
    </>
  );
}
