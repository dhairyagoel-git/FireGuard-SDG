import React, { useEffect, useState } from "react";
export function Card1(props) {
  return (
    <>
      <span className="w-31/100 border bg-white text-black p-10 rounded-3xl shadow-xl  border-gray-200 shadow-gray-400 hover:shadow-3xl">
        <i className={`${props.class} text-3xl`}></i>
        <h1 className="font-semibold text-xl mb-10 mt-10 ">{props.title}</h1>
        <p className="pb-10 text-gray-700">{props.description}</p>
        <button className="bg-gray-100 p-3 rounded-xl hover:bg-gray-300 hover:scale-105 transition-all duration-300">
          {" "}
          {props.button}
        </button>
      </span>
    </>
  );
}

export function Card2(props) {
  const [seedata, setseedata] = useState(0);
  const SeeMore = () => {
    if (seedata == 0) {
      setseedata(1);
    } else {
      setseedata(0);
    }
    console.log("status changed to ", seedata);
  };

  return (
    <>
      <span className="flex m-10 border overflow-hidden">
        <div className="w-1/5 p-5 pt-25">
          <p className="text-[10px]  opacity-80 pb-3">{props.head}</p>
          <h1 className="font-bold text-xl mb-4">{props.heading}</h1>
          <p className="mb-5">{props.description}</p>
          <button className="p-2 cursor-pointer hover:scale-105 border rounded-lg ease-in transition-all duration-100">{props.button}</button>
        </div>
        <img className="w-1/5" src={props.image} alt={props.image} />
      </span>
    </>
  );
}
