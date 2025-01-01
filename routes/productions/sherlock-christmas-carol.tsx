/*
Update this page to be the Sherlock Christmas Carol page.
Director: Ben Newman
Theater: Artists Repertory Theatre
Location: Portland OR
Date: 2011-11

if any link below mentions costuming or Jessica, please use it as a pull quote,
with the styling as "italic pl-5 my-3 text-[#2596be] dark:text-orange-300"
otherwise attempt to find a quote from the reviews that is relevant to the play.
and mark up without the color styling.

use all images in /images/pages/sherlock-carol*.jpg
Use the following sizes, as provided by imagemagick:
sherlock-carol-1.jpg JPEG 800x533 800x533+0+0 8-bit sRGB 92071B 0.000u 0:00.000
sherlock-carol-2.jpg JPEG 800x534 800x534+0+0 8-bit sRGB 194947B 0.000u 0:00.000
sherlock-carol-3.jpg JPEG 800x534 800x534+0+0 8-bit sRGB 182098B 0.000u 0:00.000
sherlock-carol-4.jpg JPEG 800x533 800x533+0+0 8-bit sRGB 194086B 0.000u 0:00.000
sherlock-carol-5.jpg JPEG 800x533 800x533+0+0 8-bit sRGB 140218B 0.000u 0:00.000

Links:
Theater link: https://www.artistsrep.org/
Script:
https://www.dramatists.com/previews/4733.pdf
reviews:
- https://www.portlandmercury.com/arts/artists-repertory-theatre-sherlock-holmes-and-the-case-of-the-christmas-carol-review
- https://www.pdxmonthly.com/arts-and-culture/2011/11/review-sherlock-holmes-and-the-case-of-the-christmas-carol-november-2011
*/

import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList, { type Image } from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images: Image[] = [
    {
      src: "/images/pages/sherlock-carol-1.jpg",
      alt:
        "Scene from Sherlock Holmes and the Case of the Christmas Carol, photo credit Owen Carey",
      width: 800,
      height: 533,
    },
    {
      src: "/images/pages/sherlock-carol-2.jpg",
      alt:
        "Scene from Sherlock Holmes and the Case of the Christmas Carol, photo credit Owen Carey",
      width: 800,
      height: 534,
    },
    {
      src: "/images/pages/sherlock-carol-3.jpg",
      alt:
        "Scene from Sherlock Holmes and the Case of the Christmas Carol, photo credit Owen Carey",
      width: 800,
      height: 534,
    },
    {
      src: "/images/pages/sherlock-carol-4.jpg",
      alt:
        "Scene from Sherlock Holmes and the Case of the Christmas Carol, photo credit Owen Carey",
      width: 800,
      height: 533,
    },
    {
      src: "/images/pages/sherlock-carol-5.jpg",
      alt:
        "Scene from Sherlock Holmes and the Case of the Christmas Carol, photo credit Owen Carey",
      width: 800,
      height: 533,
    },
  ];

  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Sherlock Holmes and the Case of the Christmas Carol"
      />
      <h1 class="text-2xl">
        Sherlock Holmes and the Case of the Christmas Carol
      </h1>
      <p>
        Directed by: Jon Kretzu
        <br />
        Artists Repertory Theatre, Portland OR, 2011 &amp; 2012
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
            href="https://www.oregonlive.com/performance/2012/12/artists_repertory_theatre_revi_1.html"
          >
            Review: Artists Repertory Theatre revives Sherlock Holmes holiday
            show
          </UnstyledLink>, The Oregonian
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;The production returns with the same strong attention to
            period detail and atmospheric staging that made it such a success
            last year.&rdquo;
          </p>
          <p class="italic pl-5 my-3">
            &ldquo;&hellip;and costume designer{" "}
            <span class="text-[#2596be] dark:text-orange-300">
              Jessica Bobillot
            </span>{" "}
            don't let us down. They provide the ingenious trick panels and
            doors, fog effects, magical lighting and{" "}
            <span class="text-[#2596be] dark:text-orange-300">
              imaginative costumes that we've come to expect in such holiday
              entertainments.
            </span>&rdquo;
          </p>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.portlandmercury.com/arts/artists-repertory-theatre-sherlock-holmes-and-the-case-of-the-christmas-carol-review"
          >
            Review: Sherlock Holmes and the Case of the Christmas Carol
          </UnstyledLink>, Portland Mercury
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;The production succeeds in creating a properly Victorian
            atmosphere, with detailed period costumes and set design that
            effectively evoke both the world of Holmes and Dickens.&rdquo;
          </p>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.pdxmonthly.com/arts-and-culture/2011/11/review-sherlock-holmes-and-the-case-of-the-christmas-carol-november-2011"
          >
            Review: Sherlock Holmes and the Case of the Christmas Carol
          </UnstyledLink>, PDX Monthly
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;This clever mashup of Dickens and Doyle brings fresh
            perspective to both classic characters.&rdquo;
          </p>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.oregonlive.com/performance/2011/11/artists_rep_presents_sherlock.html"
          >
            Review: Artists Rep presents Sherlock Holmes and the Case of the
            Christmas Carol
          </UnstyledLink>, The Oregonian
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;A delightful holiday mashup that brings together two
            Victorian-era icons in ways that feel both fresh and faithful to
            their origins.&rdquo;
          </p>
        </li>
      </ul>
    </>
  );
}
