import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export function EventCard({
  img,
  eventName,
  date,
  cityName,
  weather,
  distance,
}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <LazyLoadImage src={img} width={600} height={400}  className="z-0 h-full w-full rounded-md object-cover" alt="Image Alt" />
      {/* <img
        src={img}
        alt="Event Image"
        className="z-0 h-full w-full rounded-md object-cover"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-sm  text-white">
          <span className="text-md"> {eventName}</span>{" "}
          <span className="pl-[1rem]">
            March {date.slice(8, 10)}, {date.slice(0, 4)}
          </span>
        </h1>
        <h1 className="text-sm  text-white">
          <span>&#x1F4CD;</span>
          {cityName} <span className="ml-[3rem]"> </span>
          {weather} | {distance.slice(0, 2)}Km{" "}
        </h1>
      </div>
    </div>
  );
}
