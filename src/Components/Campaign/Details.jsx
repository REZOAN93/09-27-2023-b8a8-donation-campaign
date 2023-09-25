import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const specificData = data.find((na) => na.id === idInt);
  const {name,donation_amount,description,picture2}=specificData
  console.log(specificData);

  return (
    <div className="max-w-7xl mx-auto my-2 pb-20">
      <div className="card space-y-5">
        <figure className="w-full h-screen rounded-lg">
          <img
          className="w-full h-fit rounded-lg"
            src={picture2}
            alt="Shoes"
          />
        </figure>
       
          <h2 className=" text-4xl">
            {name}
          </h2>
          <p className=" text-base text-justify text-gray-500">{description}</p>      
      </div>
    </div>
  );
};

export default Details;
