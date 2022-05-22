import React from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import FIXTURES, { FixtureModule } from "../../data/fixtures";
import FeaturedPosts from "../../components/FeaturedFixtures";

type Data = {
  fixtures: Array<FixtureModule>;
};

export const meta: MetaFunction = () => {
  const title = "ABC Racing Company";
  const description = "Pioneer in Racing.";
  return {
    title,
    description,
  };
};

export const loader: LoaderFunction = () => {
  const fixtures = FIXTURES;
  return {
    fixtures,
  };
};

export default function BlogIndex() {
  const { fixtures } = useLoaderData<Data>();

  return (
    <div>
      <FeaturedPosts
        title="Auto Racing Fixtures"
        subtitle="List of the top auto racing companies in the world, listed by their prominence with corporate logos when available. This list of major auto racing companies includes the largest and most profitable auto racing businesses, corporations, agencies, vendors and firms in the world. If you are wondering what the biggest auto racing companies are, then this list has you covered. This list includes the most famous auto racing companies in the industry."
        posts={fixtures.map((fixture) => ({
          href: fixture.href,
          title: fixture.attributes.meta.title,
          picture: fixture.attributes.picture?.url,
          pictureAlt: fixture.attributes.picture?.alt,
          date: fixture.attributes.date,
          timeReading: fixture.attributes.timeReading,
          excerpt: fixture.attributes.meta.description,
        }))}
        hideLinks
      />
    </div>
  );
}
