import Footer from "@components/layout/Footer.tsx";
import HeaderDesktop from "@components/layout/HeaderDesktop.tsx";
import { Head, Partial } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { JSX } from "preact";

// for testing
export function HeadlessLayout(
  { Component }: PageProps,
) {
  return (
    <>
      <div class="layout" id="Headless">
        <Partial key="main" name="main">
          <main>
            <Component />
          </main>
        </Partial>
      </div>
      <Footer />
    </>
  );
}

export default function Layout(
  { Component }: PageProps,
): JSX.Element {
  return (
    <>
      <div class="layout w-full" id="full">
        <HeaderDesktop />
        <main
          id="main"
          class="px-[70px] mx-auto xl:max-w-screen-xl w-full pt-12 xl:pt-[20px] mt-[72px]"
        >
          <Partial key="main" name="main">
            <Component />
          </Partial>
        </main>
        <Footer />
      </div>
    </>
  );
}
