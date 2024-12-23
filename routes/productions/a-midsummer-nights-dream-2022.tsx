import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="A Midsummer Night's Dream"
      />
      <h1 class="text-2xl">A Midsummer Night's Dream</h1>
      <p>
        Directed by: Colton Pometta
        <br />
        Laughing Stock Theater, Sun Valley Idaho, 2022
      </p>
      <p>
        <UnstyledLink href="https://www.laughingstocktheater.com/">
          Laughing Stock Theater
        </UnstyledLink>
      </p>
      <div class="flex-row flex-wrap">
        <LoadAwareImage
          src="/images/pages/midsummer-thumbnail.jpg"
          alt="Midsummer Night's Dream production photo"
          title="A Midsummer Night's Dream"
          height={450}
          width={800}
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
            href="https://eyeonsunvalley.com/Story_Reader/9753/%E2%80%98A-Midsummer-Night%E2%80%99s-Dream%E2%80%99-to-Turn-Ketchum-Park-into-Fairyland/"
          >
            'A Midsummer Night's Dream' to Turn Ketchum Park into Fairyland
          </UnstyledLink>, Eye on Sun Valley
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;The park will turn into a fairy kingdom where pandemonium ensues when human lovers flee to the woods. Where young lovers eventually experience the transformative power of love as they allow it to grow beyond puppy love to mature love.&rdquo;
          </p>
        </li>
        <li class="my-3">
          <UnstyledLink
            className="underline"
            href="https://www.boisestatepublicradio.org/news/2022-08-19/sun-valley-shakespeare-laughing-stock-theater-ketchum-idaho"
          >
            Where there's a Will, there's a Shakespeare — in Sun Valley
          </UnstyledLink>, Boise State Public Radio
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;I felt like, you know what? I don't want it to fizzle out from that virus, so let's go big and bring it back.&rdquo;
          </p>
        </li>
      </ul>
    </>
  );
}
