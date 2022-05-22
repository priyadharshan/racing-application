import * as fixtures1 from "../routes/fixtures/fixture-1.mdx";
import * as fixtures2 from "../routes/fixtures/fixture-2.mdx";
import * as fixtures3 from "../routes/fixtures/fixture-3.mdx";
import * as fixtures4 from "../routes/fixtures/fixture-4.mdx";
import * as fixtures5 from "../routes/fixtures/fixture-5.mdx";

import ROUTES from "./routes";

export type FixtureFrontMatter = {
  meta: {
    title: string;
    description: string;
  };
  date: string;
  timeReading: string;
  picture?: {
    url: string;
    alt: string;
    credits?: {
      type: string;
      name: string;
      link: string;
    };
  };
};

export type FixtureModule = {
  attributes: FixtureFrontMatter;
  filename: typeof fixtures1.filename;
  slug: string;
  href: string;
};

const FIXTURES: Array<FixtureModule> = [
  fixtures1,
  fixtures2,
  fixtures3,
  fixtures4,
  fixtures5,
]
  .map((fixture) => {
    const slug = fixture.filename.replace(/.mdx?$/, "");
    const href = `${ROUTES.fixtures.href}/${slug}`;
    return {
      attributes: {
        ...fixture.attributes,
      },
      filename: fixture.filename,
      slug,
      href,
    };
  })
  .sort((a, b) => ("" + b.attributes.date).localeCompare(a.attributes.date));

export default FIXTURES;
