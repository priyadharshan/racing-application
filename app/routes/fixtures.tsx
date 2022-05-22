import React from "react";
import { LinksFunction, Outlet } from "remix";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import prismStylesUrl from "../styles/prism.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: prismStylesUrl }];
};

export default function Fixtures() {
  const location = useLocation();
  const isFixtures = /^\/fixtures\/.+$/i.test(location.pathname);

  return (
    <div>
      <header className="max-w-screen-xl mx-auto mb-6">
        <Nav />
      </header>

      {isFixtures ? (
        <>
          <article className="article-page mx-auto px-4 py-12">
            <Outlet />
          </article>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
