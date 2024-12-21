import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Happy Days"
      />
      <h1 class="text-2xl">Happy Days</h1>
      <p>
        By: Samuel Beckett
      </p>
      <p>
        Northwest Classical Theatre Collaborative, Portland, Oregon, August 2023
      </p>
      <h2 class="text-2xl my-3">
        Reviews
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.broadwayworld.com/portland/article/Review-HAPPY-DAYS-at-Northwest-Classical-Theatre-Collaborative-20230822"
          >
            Review: HAPPY DAYS at Northwest Classical Theatre Collaborative
          </UnstyledLink>, Broadway World
        </li>
      </ul>
    </>
  );
}
