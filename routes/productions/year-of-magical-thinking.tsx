import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images = [
    {
      src: "/images/pages/magical-thinking-3-24.jpg",
      alt: "The Year of Magical Thinking Production Photo",
      title: "The Year of Magical Thinking",
      height: 1025,
      width: 800,
    },
    {
      src: "/images/pages/magical-thinking-2-24.jpg",
      alt: "The Year of Magical Thinking Production Photo",
      title: "The Year of Magical Thinking",
      height: 953,
      width: 800,
    },
    {
      src: "/images/pages/magical-thinking-1-24.jpg",
      alt: "The Year of Magical Thinking Production Photo",
      title: "The Year of Magical Thinking",
      height: 1067,
      width: 800,
    },
  ];

  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="The Year of Magical Thinking"
      />
      <h1 class="text-2xl">The Year of Magical Thinking</h1>
      <p>
        Based on the National Book Award winner and Pulitzer Prize finalist
        memoir by Joan Didion, this play, adapted by the author herself,
        recounts the year that both her husband and daughter died. Starring
        powerhouse actress, Diane Kondrat, and featuring an original violin
        score composed and performed by Michelle Alany, this story of unexpected
        loss examines the power of grief and how we can heal from its effects.
      </p>
      <p class="mt-3">
        Directed by: Patrick Walsh
      </p>
      <ImageList images={images} imageClassName="my-3" />
      <h2 class="text-2xl my-3">
        Links
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.gardenhomelibrary.org/events/cal/2024/9/11/northwest-classical-theater-collaborative-production-the-year-of-magical-thinking"
          >
            Northwest Classical Theater Collaborative Production
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://happeningnext.com/event/the-year-of-magical-thinking-a-play-eid3a0bu44udm"
          >
            The Year of Magical Thinking
          </UnstyledLink>
        </li>
      </ul>
    </>
  );
}
