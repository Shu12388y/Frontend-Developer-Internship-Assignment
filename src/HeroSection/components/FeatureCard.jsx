import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Card({ img, distance, cityname, weather, eventName, date }) {
  return (
    <div className="w-[300px] rounded-md border">
      <LazyLoadImage src={img} width={600} height={400} className="h-[200px] w-full rounded-md object-cover" alt="Image Alt" />

      {/* <img
        src={`${img}`}
        alt="image"
        className="h-[200px] w-full rounded-md object-cover"
      /> */}
      <div className="bg-slate-100 p-1 transparent">
        March {date.slice(8, 10)}, {date.slice(0, 4)}
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{eventName}</h1>
        <p className="mt-3 text-sm text-gray-600">
          <span> &#x1F4CD;</span>
          {cityname} <span className="ml-[2rem]"></span>
          {weather} | {distance.slice(0, 2)}Km
        </p>
      </div>
    </div>
  );
}
