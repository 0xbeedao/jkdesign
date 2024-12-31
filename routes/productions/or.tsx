/**
 * Using the template below, update the details for the production "Or,"
 * note the trailing comma, which is part of the title.
 *
 * Details:
 * Theater: Third Rail Repertory Theatre
 *
 * Director: Philip Cuomo
 * Writer: Liz Duffy Adams
 *
 * Images: use all images in /static/images/productions/ starting with "or-"
 *
 * links:
 *
 * If any link mentions the costuming, make a pull-quote from it.
 */

import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
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
      <div class="flex flex-row flex-wrap">
        <div>
          <LoadAwareImage
            src="/images/pages/magical-thinking-3-24.jpg"
            alt="The Year of Magical Thinking Production Photo"
            title="The Year of Magical Thinking"
            height={1025}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/magical-thinking-2-24.jpg"
            alt="The Year of Magical Thinking Production Photo"
            title="The Year of Magical Thinking"
            height={953}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/magical-thinking-1-24.jpg"
            alt="The Year of Magical Thinking Production Photo"
            title="The Year of Magical Thinking"
            height={1067}
            width={800}
            className="my-3"
          />
        </div>
      </div>
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
