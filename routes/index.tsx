import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <h1 class="text-2xl">Home</h1>
      <LoadAwareImage
        src="/images/pages/shrew-sunvalley.jpg"
        alt="The Taming of the Shrew"
        width={1150}
        height={614}
        layout="fill"
        objectFit="cover"
        className="mx-auto w-full my-3"
      />
      <p>
        Shrew, SunValley, 2018, Written by Amy Freed, Directed by Ben Newman.
      </p>
      <p>
        Photo copyright Bruce Kroeze, 2018.
      </p>
    </>
  );
}
