import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function AlebrijesProduction({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="¡Alebrijes! A Día de Muertos Tale"
      />
      <h1 class="text-2xl">¡Alebrijes! A Día de Muertos Tale</h1>
      <p>
        Written and directed by Georgina Escobar Original musical composition by
        Luis Guerra
      </p>
      <p>
        <UnstyledLink href="https://milagro.org/event/alebrijes/">
          Milagro Theatre
        </UnstyledLink>, Portland, Oregon, October 2018
      </p>
      <div class="flex-row flex-wrap">
        <LoadAwareImage
          src="/images/pages/alebrijes-wweek.jpg"
          alt="Alebrijes: Photo by Russell J.x Young"
          title="Alebrijes: Photo by Russell J.x Young"
          height={425}
          width={284}
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
            href="https://archive.orartswatch.org/visionary-of-the-afterlife/"
          >
            Visionary of the Afterlife
          </UnstyledLink>, Oregon Arts Watch
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;As Pedro drifts further and further from reality, we behold
            many astounding visions, from a cloud of steam that envelops first
            Pedro and then the audience to a dazzling array of animal
            costumes.&rdquo;
          </p>
        </li>
        <li class="my-3">
          <UnstyledLink
            className="underline"
            href="https://www.wweek.com/arts/2018/10/30/alebrijes-is-a-celebration-of-fantastical-mexican-folk-art/"
          >
            Alebrijes Is a Celebration of Fantastical Mexican Folk Art
          </UnstyledLink>, Willamette Week
        </li>
        <li class="my-3">
          <UnstyledLink
            className="underline"
            href="https://dennissparksreviews.blogspot.com/2018/10/alebrijes-dia-de-muertosmilagrose.html"
          >
            Alebrijes: Día de Muertos/Milagros
          </UnstyledLink>, Dennis Sparks Reviews
        </li>
      </ul>
    </>
  );
}
