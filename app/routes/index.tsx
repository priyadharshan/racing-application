import * as React from "react";
import type { MetaFunction } from "remix";
import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";
import Racers from "../components/Racers";
import Stats from "../components/Stats";
import ARTICLES from "../data/fixtures";
import FeaturedFixtures from "../components/FeaturedFixtures";

export const meta: MetaFunction = () => {
  const title = "ABC Racing Company";
  const description = "Pioneer in Racing.";
  return {
    title,
    description,
  };
};

export default function Index() {
  return (
    <div>
      <HomeIntro />

      <main>
        <ShowCase />

        <Racers
          picture="/images/racer-2.PNG"
          name="OLIVER ROWLAND"
          position="Single-seater champion and Formula E race"
          content="As an established and respected single-seater champion and Formula E race winner, the 29-year-old British driver joins the Mahindra Racing outfit for Season 8 of the ABB FIA Formula E World Championship."
        />

        <Racers
          picture="/images/racer-1.PNG"
          name="ALEXANDER SIMS"
          position="A highly-experienced single-seater and sports car driver"
          content="Sims has been involved in Formula E since the series’ inception in 2014, initially testing cars before securing a race seat in Season Five and once again demonstrated his versatility as a racing driver. His highlights in his first season were a pole position and second-place finish in New York. Sims had an impressive start to his second season, taking pole positions for both races of the opening round in Saudi Arabia and taking his maiden win in race two. It also made him the first driver to take three consecutive pole positions in Formula E."
          reverse
        />

        <Stats
          title={`Racing Stats`}
          subtitle="At the heart of our business, and where our passion lies. We pour investment into racing innovation and celebrate the industry wherever possible."
          stats={[
            {
              value: "5",
              label: "Wins",
            },
            { value: `2`, label: "FASTEST LAP" },
            { value: `1000+`, label: "Exciting Fixtures All Year Round" },
          ]}
        />

        <FeaturedFixtures
          title="Fixtures"
          subtitle="Hundreds of fixtures with ABC Racing Company - The world's leading racecourse group !"
          posts={ARTICLES.slice(0, 3).map((article) => ({
            href: article.href,
            title: article.attributes.meta.title,
            picture: article.attributes.picture?.url,
            pictureAlt: article.attributes.picture?.alt,
            date: article.attributes.date,
            timeReading: article.attributes.timeReading,
            excerpt: article.attributes.meta.description,
          }))}
        />
      </main>
    </div>
  );
}
