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
 * Summary to reword:
 * Set over the course of a single evening, Aphra Behn–poet, actress, spy, and one of the first professional female playwrights of the Restoration–has the opportunity to land her first commission for a professional company if she can deliver her play by dawn. Complicating this task are an array of lovers and rivals, from a rogue-spy to a blossoming ingenue to the king himself, vying for her time and affections. With echoes of Restoration comedy, quick-change farce, a dash or two of Tom Stoppard, and the sexual revolution of the 1960’s, Or, is a little valentine to love in the theatre.
 *
 * Images: use all images in /static/images/pages/ starting with "or-"
 * and credit the photographer Owen Carey in the alt text.
 * This is the sizing for the images, as given by imagemagick identify:
 * or-show-1.jpg JPEG 800x1199 800x1199+0+0 8-bit sRGB 76029B 0.000u 0:00.000
 * or-show-2.jpg JPEG 800x1199 800x1199+0+0 8-bit sRGB 126138B 0.000u 0:00.000
 * or-show-3.jpg JPEG 800x1199 800x1199+0+0 8-bit sRGB 121586B 0.000u 0:00.000
 * or-show-4.jpg JPEG 800x1199 800x1199+0+0 8-bit sRGB 168265B 0.000u 0:00.000
 * or-show-5.jpg JPEG 640x960 640x960+0+0 8-bit sRGB 73851B 0.000u 0:00.000
 * or-show-6.jpg JPEG 800x800 800x800+0+0 8-bit sRGB 321399B 0.000u 0:00.000
 *
 * links:
 * Theater link: https://thirdrailrep.org/mission-production-history/season-10/or/
 *
 * Reviews:
 * - https://www.portlandmercury.com/Theater/2015/09/23/16545639/the-financial-lives-of-17th-century-poets-in-or
 *
 * If any link mentions the costuming, make a pull-quote from it.
 */

import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import ImageList from "@components/shows/ImageList.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  const images = [
    {
      src: "/images/pages/or-show-1.jpg",
      alt: "Or, production photo by Owen Carey",
      title: "Or,",
      height: 1199,
      width: 800,
    },
    {
      src: "/images/pages/or-show-2.jpg",
      alt: "Or, production photo by Owen Carey",
      title: "Or,",
      height: 1199,
      width: 800,
    },
    {
      src: "/images/pages/or-show-3.jpg",
      alt: "Or, production photo by Owen Carey",
      title: "Or,",
      height: 1199,
      width: 800,
    },
    {
      src: "/images/pages/or-show-4.jpg",
      alt: "Or, production photo by Owen Carey",
      title: "Or,",
      height: 1199,
      width: 800,
    },
    {
      src: "/images/pages/or-show-5.jpg",
      alt: "Or, production photo by Owen Carey",
      title: "Or,",
      height: 960,
      width: 640,
    },
    {
      src: "/images/pages/or-show-6.jpg",
      alt: "Or, production photo",
      title: "Or,",
      height: 800,
      width: 800,
    },
  ];

  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="Or,"
      />
      <h1 class="text-2xl">Or,</h1>
      <p>
        Set during a single evening, Aphra Behn – poet, actress, spy, and one of
        the first professional female playwrights of the Restoration – races
        against dawn to complete her first commission for a professional
        company. Her task is complicated by an array of characters competing for
        her attention: a roguish spy, a young ingenue, and even the king
        himself, all vying for her time and affections. This delightful comedy
        blends elements of Restoration theatre, quick-change farce, and hints of
        Tom Stoppard, while drawing parallels to the sexual revolution of the
        1960s.
      </p>
      <p class="mt-3">
        Directed by: Philip Cuomo
        <br />
        Written by: Liz Duffy Adams
      </p>
      <ImageList images={images} imageClassName="my-3" />
      <h2 class="text-2xl my-3">
        Links
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://thirdrailrep.org/mission-production-history/season-10/or/"
          >
            Third Rail Repertory Theatre Production
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.portlandmercury.com/Theater/2015/09/23/16545639/the-financial-lives-of-17th-century-poets-in-or"
          >
            Portland Mercury Review
          </UnstyledLink>
          <p class="italic pl-5 my-3">
            &ldquo;With its small but effective cast and fast-unfurling
            dialogue, Or, is a spirited romp that also has a lot to say about
            the complexity of sex, gender, and being one of the first woman
            writers ever.&rdquo;
          </p>
        </li>
      </ul>
    </>
  );
}
