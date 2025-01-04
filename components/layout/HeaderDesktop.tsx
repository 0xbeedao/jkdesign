import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { headerLinks } from "@config/SiteConfig.ts";
import type { JSX } from "preact";

export default function HeaderDesktop(): JSX.Element {
  return (
    <div className="navbar bg-neutral dark:bg-base-200 text-neutral-content dark:text-base-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/bio">Bio</a>
            </li>
            <li>
              <a>Shows</a>
              <ul class="p-1">
                <li>
                  <a href="/theater">Theater</a>
                </li>
                <li>
                  <a href="/fashion">Fashion</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">JessicaDesign</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/bio">Bio</a>
          </li>
          <li>
            <details>
              <summary>Shows</summary>
              <ul className="p-2 bg-neutral dark:bg-base-200 rounded-none">
                <li>
                  <a href="/theater">Theater</a>
                </li>
                <li>
                  <a href="/fashion">Fashion</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
