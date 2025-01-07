/*
 Using the template below, update the page
 to be about "Three Sisters"

 summary: (give a one paragraph summary of the play)


 Directed by: Patrick Walsh, https://www.patrickwalsh.org/
 Written by: Anton Chekhov, https://en.wikipedia.org/wiki/Anton_Chekhov
 Performed at: Shoebox Theatre, https://www.shoeboxtheatre.com/, 2018
 Theater Company: Northwest Classical Theatre Company, https://www.nwctc.org/

 update the images to be in the /images/pages/ directory, using these sizes:


Links:
- https://www.broadwayworld.com/portland/article/BWW-Review-In-THREE-SISTERS-Life-is-a-Long-Disappointing-Slog-But-You-Should-Still-Totally-See-the-Play-at-Northwest-Classical-Theatre-Collaborative-20180118
- https://dennissparksreviews.blogspot.com/2018/01/three-sistersnorthwest-classical.html

if any link mentions costume or is otherwise relevant, add a pull quote.
 */

import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images = [
    {
      src: "/images/pages/three-sisters-01-800w.jpg",
      title: "Three Sisters Image 1",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-02-800w.jpg",
      title: "Three Sisters Image 2",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-03-800w.jpg",
      title: "Three Sisters Image 3",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-04-800w.jpg",
      title: "Three Sisters Image 4",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-05-800w.jpg",
      title: "Three Sisters Image 5",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-06-800w.jpg",
      title: "Three Sisters Image 6",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-07-800w.jpg",
      title: "Three Sisters Image 7",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-10-800w.jpg",
      title: "Three Sisters Image 8",
      height: 999,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-11-800w.jpg",
      title: "Three Sisters Image 9",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-12-800w.jpg",
      title: "Three Sisters Image 10",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-13-800w.jpg",
      title: "Three Sisters Image 11",
      height: 640,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-14-800w.jpg",
      title: "Three Sisters Image 12",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-15-800w.jpg",
      title: "Three Sisters Image 13",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-16-800w.jpg",
      title: "Three Sisters Image 14",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-17-800w.jpg",
      title: "Three Sisters Image 15",
      height: 533,
      width: 800,
    },
    {
      src: "/images/pages/three-sisters-18-800w.jpg",
      title: "Three Sisters Image 16",
      height: 533,
      width: 800,
    },
  ];

  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Three Sisters"
      />
      <h1 class="text-2xl">Three Sisters</h1>
      <p>
        Directed by: <a href="https://www.patrickwalsh.org/">Patrick Walsh</a>,
        <br />
        Written by:{" "}
        <a href="https://en.wikipedia.org/wiki/Anton_Chekhov">Anton Chekhov</a>,
        <br />
        Performed at:{" "}
        <a href="https://www.shoeboxtheatre.com/">Shoebox Theatre</a>,
        <br />
        Theater Company:{" "}
        <a href="https://www.nwctc.org/">
          Northwest Classical Theatre Company
        </a>,
      </p>
      <ImageList
        images={images}
        imageClassName="my-3"
      />
      <h2 class="text-2xl my-3">
        Reviews
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.broadwayworld.com/portland/article/BWW-Review-In-THREE-SISTERS-Life-is-a-Long-Disappointing-Slog-But-You-Should-Still-Totally-See-the-Play-at-Northwest-Classical-Theatre-Collaborative-20180118"
          >
            BWW Review: In THREE SISTERS, Life is a Long Disappointing Slog, But
            You Should Still Totally See the Play
          </UnstyledLink>, Broadway World
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://dennissparksreviews.blogspot.com/2018/01/three-sistersnorthwest-classical.html"
          >
            Three Sisters - Northwest Classical Theatre Collaborative
          </UnstyledLink>, Dennis Sparks Reviews
        </li>
      </ul>
    </>
  );
}
