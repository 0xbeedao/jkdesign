import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList from "@components/shows/ImageList.tsx";
import type { ShowImage } from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images: ShowImage[] = [
    {
      src: "/images/pages/happy-days-01.jpg",
      title: "Happy Days Production photo 1",
      height: 530,
      width: 800,
    },
    {
      src: "/images/pages/happy-days-02.jpg",
      title: "Happy Days Production photo 2",
      height: 436,
      width: 800,
    },
    {
      src: "/images/pages/happy-days-03.jpg",
      title: "Happy Days Production photo 3",
      height: 571,
      width: 800,
    },
    {
      src: "/images/pages/happy-days-04.jpg",
      title: "Happy Days Production photo 4",
      height: 530,
      width: 800,
    },
  ];

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
        Directed by: <a href="https://www.patrickwalsh.org/">Patrick Walsh</a>
      </p>
      <p>
        Northwest Classical Theatre Collaborative, Portland, Oregon, August 2023
      </p>
      <ImageList images={images} />
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
