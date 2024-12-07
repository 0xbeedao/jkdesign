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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        >
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        >
        </link>
      </Head>
      <div class="layout w-full bg-gray-100 dark:bg-gray-900" id="full">
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
