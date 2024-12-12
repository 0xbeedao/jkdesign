import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function About({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <h1 class="text-2xl">Bio</h1>
      <div class="flex-row flex-wrap">
        <p class="my-2">
          Jessica Bobillot Kroeze is an accomplished costume designer and
          apparel artist based in Portland, Oregon. With over forty years of
          experience in theater, she has established herself as a versatile
          designer working across theater, dance, film, and special events.
        </p>

        <p class="my-2">
          Her extensive theatrical portfolio includes work with numerous
          prestigious Portland companies, including Portland Playhouse, Artists
          Repertory Theatre, Profile Theater, Portland Shakespeare Project,
          Third Rail Repertory Theater, Defunkt Theatre, Shaking the Tree,
          Northwest Classical Theatre Collaborative, Milagro, Laughing Stock,
          and Fuse Theater Ensemble. She has served as the resident costume
          designer at the Portland Actors Conservatory, where she has brought
          her creative vision to productions such as "Glass Menagerie," "A
          Bright Room Called Day," and "Twelfth Night."
        </p>

        <LoadAwareImage
          src="/images/pages/opus-3-wide.jpg"
          alt="Opus 3"
          width={700}
          height={467}
          layout="fill"
          objectFit="cover"
          className="mx-auto md:h-[467px] md:w-[700px] my-2 sm:h-[233px] sm:w-[350px]"
        />

        <p class="my-2">
          Some of her most notable theatrical works include "Sense &
          Sensibility," "Rosencrantz and Guildenstern are Dead" at Portland
          Actors Conservatory, "One Flea Spare" at Shaking the Tree, "Eyes for
          Consuela" and "Road to Mecca" at Profile Theatre, "Seven Guitars" and
          "The Lieutenant of Inishmore" at Artists Repertory Theatre, and
          multiple Shakespeare productions including "As You Like It," "King
          Lear," "Lear's Follies," and "The Taming of the Shrew" for Portland
          Shakespeare Project.
        </p>
        <LoadAwareImage
          src="/images/pages/sense-sensibility-close.jpg"
          alt="Sense & Sensibility"
          width={700}
          height={467}
          layout="fill"
          objectFit="cover"
          className="mx-auto md:h-[467px] md:w-[700px] my-2 sm:h-[233px] sm:w-[350px]"
        />

        <p class="my-2">
          Her talent extends beyond theater to opera, having worked with the
          Portland Opera Association for several seasons, where she served as
          assistant costume designer for productions including "La Calisto" and
          "L'Enfant et les Sortilèges." She has also designed costumes for
          Portland State University's Music Department, including their
          production of Puccini's "La Rondine."
        </p>
        <p class="my-2">
          Jessica's work has gained recognition beyond the stage, with her dress
          designs featured in Martha Stewart Weddings and winning awards at The
          Red Dress Benefit Gala. She holds two Bachelor of Science in Arts
          degrees from Portland State University: one in painting and
          printmaking, and another in apparel design. Known for her dedication
          to her craft and collaborative spirit, Jessica brings both technical
          expertise and artistic vision to every project she undertakes. Her
          work demonstrates the seamless integration of her fine arts background
          with practical design skills, creating costumes that enhance
          storytelling and bring characters to life on stage.
        </p>
      </div>
    </>
  );
}
