import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="A Play About My Father"
      />
      <h1 class="text-2xl">A Play About My Father</h1>
      <p>
        Directed by: Rusty Tennant
        <br />
        Created and Performed by: Kate Mura
      </p>
      <p>
        <UnstyledLink href="https://milagro.org/event/alebrijes/">
          Fuse Theatre Ensemble
        </UnstyledLink>, Portland, Oregon, April 2024
      </p>
      <div class="flex-row flex-wrap">
        <LoadAwareImage
          src="/images/pages/wweek-father-review.jpg"
          alt="WWEEK photo"
          title="A Play About My Father"
          height={450}
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
            href="https://www.broadwayworld.com/portland/article/Review-THE-PLAY-ABOUT-MY-FATHER-at-Fuse-Theatre-Ensemble-20240422"
          >
            Review: THE PLAY ABOUT MY FATHER at Fuse Theatre Ensemble
          </UnstyledLink>, Broadway World
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;Mura plays many roles &mdash; grandmother, aunts, friends,
            neighbors, priest, Tony, and, briefly, herself &mdash; moving
            fluidly between characters in a way that seems effortless.{" "}
            <span class="text-[#2596be] dark:text-orange-300">
              Her transformations are supported by a dress by costume designer
              Jessica Kroeze that rivals Cinderella’s for magical properties. It
              may look like a plain gray frock at first, but it slowly reveals
              itself to be an impressive feat of sewing engineering.
            </span>&rdquo;
          </p>
        </li>
        <li class="my-3">
          <UnstyledLink
            className="underline"
            href="https://www.wweek.com/arts/theater/2024/04/23/one-woman-portrays-a-community-of-caregivers-in-fuse-theatre-ensembles-the-play-about-my-father/"
          >
            One Woman Portrays a Community of Caregivers in Fuse Theatre
            Ensemble's “The Play About My Father”
          </UnstyledLink>
          <p class="italic pl-5 my-3">
            &ldquo;The single costume for the play is an ingenious piece of
            engineering and artistry that aids Mura in morphing into different
            physical and emotional entities.{" "}
            <span class="text-[#2596be] dark:text-orange-300">
              Jessica Kroeze created what Tennant conceived as a “magic skirt”
            </span>{" "}
            &mdash; a long gray garment that's so adaptable it takes only minor
            onstage adjustments for Mura to become each character. Sewn with an
            assortment of pockets, sleeves and clips, the skirt allows her to
            wear it like a jacket, a clerical robe, and even a pair of bib
            overalls.&rdquo;
          </p>
        </li>
      </ul>
    </>
  );
}
