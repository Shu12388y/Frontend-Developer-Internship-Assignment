import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import { Card } from "./FeatureCard";
import getEventData from "../api/EventApi";
import getRecommendedData from "../api/RecommendedApi";
// import Banner from "./Banner.svg";
import "../../index.css";

const Banner = "./Banner.svg";
const imgs=["./Rectangle1.svg","./Rectangle2.svg","./Rectangle3.svg","./Rectangle4.svg","./Rectangle5.svg","./Rectangle6.svg","./Rectangle7.svg","./Rectangle8.svg"]
const imges=["./Rectangle9.svg","./Rectangle10.svg","./Rectangle11.svg","./Rectangle12.svg","./Rectangle13.svg","./Rectangle14.svg","./Rectangle15.svg","./Rectangle16.svg","./Rectangle17.svg","./Rectangle18.svg"]


function HeroSection() {
  const [card, setCard] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const cardData = await getEventData();
      const cardData1 = await getRecommendedData();
      if (cardData) {
        setCard(cardData);
      }
      if (cardData1) {
        setCards(cardData1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="relative">
        <div className="absolute  p-20 z-10 text-white md:top-[4rem] lg:top-[10rem] lg:left-[7rem] text-center  ">

        <h1 className=" text-l lg:text-4xl md:text-4xl font-bold">
          Discover Exciting Events Happening <br /> Near You-Stay Tuned for Updates!
        </h1>
        <p className="text-sm  lg:mx-[14rem] md:mx-[14rem] text-center lg:mt-10">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolores
          dolor fugit neque in consequuntur, repudiandae 
        </p>
        </div>
        <img
          className="h-[400px] w-full object-cover md:h-full lg:h-full"
          src={Banner}
          alt=""
        />
        <div className="absolute w-full top-[20rem] md:top-[25rem] lg:left-[2rem] lg:text-white font-bold lg:mt-[20rem] text-2xl z-10">
          <h1 className=" md:text-3xl lg:text-3xl text-md text-white ml-[2rem]">Recommended Shows &rarr;</h1>
          <div className="overflow-x-auto flex gap-3 mt-3 pb-6 hide-scrollbar">
            <div className="md:ml-[7rem]"></div>
            {card.map((el, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <EventCard img={imges[index]} eventName={el.eventName} cityName={el.cityName} date={el.date} weather={el.weather} distance={el.distanceKm}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="overflow-x-hidden  mt-[25rem] md:mt-[20rem] lg:px-[8rem]">
        <h1 className="text-2xl font-bold mt-3 mb-10">Upcoming Events &rarr;</h1>
        <div className="flex flex-col mx-10 items-center justify-center flex-wrap md:grid grid-cols-3 gap-3 auto-rows-max">
          {cards.map((el, index) => (
            <div key={index}>
              <Card img={imgs[index]} eventName={el.eventName} cityname={el.cityName}  date={el.date} weather={el.weather} distance={el.distanceKm} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSection;