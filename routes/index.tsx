import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <h1 class="text-2xl">Home</h1>
    </>
  );
}
