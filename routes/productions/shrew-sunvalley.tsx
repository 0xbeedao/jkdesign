import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function PlayPage({ url }: PageProps) {
  return (
    <>
      <Seo
        url={url.toString()}
        templateTitle="SHREW!"
      />
      <h1 class="text-2xl">SHREW!</h1>
      <p>
        Directed by: Ben Newman
        <br />
        Laughing Stock Theater, Sun Valley Idaho, 2018
      </p>
      <div class="flex flex-row flex-wrap">
      <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-3.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={760}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-1.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={612}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-2.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={1100}
            width={800}
            className="my-3"
          />
        </div>
        
        <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-4.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={582}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-5.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={696}
            width={800}
            className="my-3"
          />
        </div>
        <div>
          <LoadAwareImage
            src="/images/pages/shrew-sv-6.jpg"
            alt="SHREW! Production Photo"
            title="SHREW!"
            height={1154}
            width={800}
            className="my-3"
          />
        </div>
      </div>
      <h2 class="text-2xl my-3">
        Reviews
      </h2>
      <ul class="list-inside list-disc my-3">
        <li>
          <UnstyledLink
            className="underline"
            href="https://eyeonsunvalley.com/Story_Reader/9753/'A-Midsummer-Night's-Dream'-to-Turn-Ketchum-Park-
 to-Fairyland/"
          >
            'SHREW!' to Turn Ketchum Park into Theater
          </UnstyledLink>, Eye on Sun Valley
          <br />
          <p class="italic pl-5 my-3 text-[#2596be] dark:text-orange-300">
            &ldquo;Costume designer Jessica Bobillot Kroeze is decking actors
            out in a Tudor-Elizabethan wardrob She was inspired by the local
            nature to create the costumes.&rdquo;
          </p>
        </li>
        <li>
          <UnstyledLink
            className="underline"
            href="https://www.mtexpress.com/arts_and_events/arts/shakespeare-festival-to-present-shrew/article_4
 7a348-9fef-11e8-8eda-cbca7677eada.html"
          >
            Shakespeare Festival to present 'SHREW!'
          </UnstyledLink>, Mountain Express
          <br />
          <p class="italic pl-5 my-3">
            &ldquo;It's a privilege to direct such a remarkable cast in the
            jaw-dropping beauty of Sun Valley. Shakespeare's 'Shrew' has always
            been one of my favorite comedies.&rdquo;
          </p>
        </li>
      </ul>
    </>
  );
}
