import Seo from "@components/Seo.tsx";
import TestimonialList from "@components/testimonials/TestimonialList.tsx";
import { TESTIMONIALS } from "@config/testimonials.ts";
import type { PageProps } from "$fresh/server.ts";

export default function TestimonialsPage({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Testimonials" />
      <h1 class="text-2xl">Testimonials</h1>
      <div class="mt-4">
        <TestimonialList testimonials={TESTIMONIALS} />
      </div>
    </>
  );
}
