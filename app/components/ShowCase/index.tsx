import React from "react";
import DotsGrid from "../DotsGrid";

const ShowCase = () => (
  <section className="py-16 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <DotsGrid rootClassNames="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" />

      <div className="relative">
        <h2 className="lg:text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        ABC Racing Company Teams 2022

        </h2>
        <p className="mt-4 max-w-2xl mx-auto lg:text-center text-xl leading-7 text-gray-500">
        Discover everything you need to know about this year's Formula 1 teams - drivers, podium finishes, points earned and championship titles..
        </p>
      </div>

      <video controls width="100%" autoPlay>
        <source src="/videos/racing-video.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="mt-10 -mx-4 relative lg:mt-0">
          <div className="relative mx-auto text-blue-500">
            <p className="mt-4 max-w-2xl mx-auto lg:text-center text-xl leading-7 text-gray-500">
              This is the best of WRC Rally 2020. These are the best crashes,
              action, and maximum attack moments from the year! This is the best
              of WRC Rally 2020. These are the best crashes, action, and maximum
              attack moments from the year! This is the best of WRC Rally 2020.
              These are the best crashes, action, and maximum attack moments
              from the year!
            </p>
          </div>
        </div>
        <div className="w-full">
          <div
            className="video w-full"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/qk7pZnxCX2o"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowCase;
