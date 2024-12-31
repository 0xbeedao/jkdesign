import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images = [
    {
      src: "/images/pages/mr-burns-web-1283.jpg",
      alt: "Mr Burns production photo",
      title: "Mr Burns, a Post Electric Play",
      height: 534,
      width: 800,
    },
    {
      src: "/images/pages/mr-burns-web-5024.jpg",
      alt: "Mr Burns production photo 2",
      title: "Mr Burns, a Post Electric Play",
      height: 534,
      width: 800,
    },
  ];

  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Mr Burns, a Post Electric Play"
      />
      <h1 class="text-2xl">Mr Burns, a Post Electric Play</h1>
      <p>
        By: Anne Washburn
        <br />
        Score by: Michael Friedman
        <br />
        Lyrics by: Anne Washburn
        <br />
        Directed by: Catherine Ming T'ien Duffly
      </p>
      <p>
        <UnstyledLink
          className="underline"
          href="https://www.reed.edu/theatre/duffly/performances/mr-burns.html"
        >
          Reed College Theatre Department
        </UnstyledLink>, Diver Studio Theatre, Portland, Oregon, November 11-19,
        2022
      </p>
      <ImageList images={images} imageClassName="my-3" />
    </>
  );
}
