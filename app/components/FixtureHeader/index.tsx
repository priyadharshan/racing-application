import React from "react";
import { FixtureFrontMatter } from "../../data/fixtures";

export type FixtureTitleProps = FixtureFrontMatter & {
  className?: string;
};

const FixtureHeader = ({
  meta,
  className,
  date,
  timeReading,
  picture,
}: FixtureTitleProps): JSX.Element => (
  <div className={className}>
    <h1 className="article-main-title mt-0 mb-12 sm:my-12 break-words">
      {meta.title}
    </h1>
    <h2 className="mb-4 text-gray-600">{meta.description}</h2>
    <p className="mb-16 sm:text-right text-base leading-5 text-gray-500">
      <time dateTime={date} className="my-0">
        {new Date(date).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <span className="mx-1">&middot;</span>
      {timeReading} read
    </p>
  </div>
);

export default FixtureHeader;
