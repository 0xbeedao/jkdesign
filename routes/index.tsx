import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import ReviewCarousel from "@islands/ReviewCarousel.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <h1 class="text-2xl">Home</h1>
      <LoadAwareImage
        src="/images/pages/shrew-sunvalley.jpg"
        alt="The Taming of the Shrew, photo credit Bruce Kroeze"
        width={1150}
        height={614}
        layout="fill"
        objectFit="cover"
        className="mx-auto w-full my-3"
      />
      <p>
        <UnstyledLink className="underline" href="/productions/shrew-sunvalley">
          Shrew
        </UnstyledLink>, SunValley, 2018, Written by Amy Freed, Directed by Ben
        Newman.
      </p>
      <h2 class="text-2xl my-3">
        Reviews
      </h2>
      <div class="my-3">
        <ReviewCarousel />
      </div>
    </>
  );
}
