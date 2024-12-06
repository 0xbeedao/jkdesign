import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function About({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <h1 class="text-2xl">About</h1>
    </>
  );
}
