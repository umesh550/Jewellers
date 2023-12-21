import React from "react";
import { GrPhone } from "react-icons/gr";

function ContactCard({ imgSrc, name, number }) {
  return (
    <div className="m-5 my-8 p-4 bg-white shadow-lg rounded-lg">
      <img
        className="mx-auto rounded-full hover:border-4 hover:scale-105 hover:border-orange-500 transition-transform duration-300"
        height={300}
        width={300}
        src={imgSrc}
        alt="photo"
      />
      <p className="text-lg font-bold text-center mt-4 text-gray-800">
        Mr. {name}
      </p>
      <p className="text-md font-bold flex justify-center items-center mt-2 text-gray-600">
        <GrPhone className="mr-2" /> {number}
      </p>
    </div>
  );
}

export default ContactCard;
