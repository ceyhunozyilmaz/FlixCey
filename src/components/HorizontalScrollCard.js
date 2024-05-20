import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HorizontalScrollCard = ({ data = [], heading }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300; //or 1020
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300; //or 1020
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-lg lg:text-2xl font-bold mb-3 text-white">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none"
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={data}
                index={index + 1}
                trending={true}
              />
            );
          })}
        </div>
        <div className="absolute top-0 flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-white p-1 text-black rounded-full -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-1 text-black rounded-full -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
