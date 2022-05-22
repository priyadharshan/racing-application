import React from "react";
import type { LinksFunction, LoaderFunction } from "remix";
import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  useCatch,
  ScrollRestoration,
} from "remix";
import { Outlet } from "react-router-dom";

import tailwindStylesUrl from "~/styles/generated/tailwind.css";
import Nav from "./components/Nav";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesUrl }];
};

export const loader: LoaderFunction = async () => {
  return { date: new Date() };
};

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>:-( Unauthorised.</p>
      );
      break;
    case 404:
      message = (
        <p>:-(  Oh oh...No Content Found!</p>
      );
      break;

    default:
      throw new Error('unknown error');
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="h-full flex flex-col">
        <header className="max-w-screen-xl mx-auto mb-6 w-full">
          <Nav />
        </header>
        <div className="flex justify-center items-center flex-grow p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              {caught.status}: {caught.statusText}
            </h1>
            <p className="mt-8 text-lg">{message}</p>
          </div>
        </div>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
      </div>
    </Document>
  );
}
