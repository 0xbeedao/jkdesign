import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Blond on a Bum Trip"
      />
      <h1 class="text-2xl">Blond on a Bum Trip</h1>
      <p>
        By: Mikki Gillette
      </p>
      <p>
        <UnstyledLink
          className="underline"
          href="https://www.fusetheatreensemble.com/event-details/blonde-on-a-bum-trip-2024-06-02-15-00"
        >
          Fuse Theatre Ensemble
        </UnstyledLink>, Portland, Oregon, May 2024
      </p>
      <div class="flex-row flex-wrap">
        <LoadAwareImage
          src="/images/pages/blond-on-a-bum-trip-thumbnail.jpg"
          alt="Blond on a Bum Trip production photo"
          title="Blond on a Bum Trip"
          height={686}
          width={800}
          className="my-3"
        />
      </div>
      <h2 class="text-2xl my-3">
        Reviews
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.broadwayworld.com/regional/Blonde-on-a-Bum-Trip-4134491"
          >
            Blond on a Bum Trip
          </UnstyledLink>, Broadway World
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.instagram.com/fusetheatre.pdx/p/C7nVPddtdai/?img_index=1"
          >
            Instagram Review
          </UnstyledLink>
          <p class="italic pl-5 my-3">
            &ldquo;It's one of the best things on stage right now&rdquo; - Sofia
            Molina
          </p>
        </li>
      </ul>
      <h2 class="text-2xl my-3">
        More Information
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.mikkigillette.com/blonde-on-a-bum-trip"
          >
            Author's Page
          </UnstyledLink>
        </li>
      </ul>
    </>
  );
}
