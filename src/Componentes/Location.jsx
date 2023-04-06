import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className=" bg-emerald-900 w-full ">
      <h2 className="text-center text-lime-400 text-5xl item ">{name}</h2>
      <ul className=" lg:text-2xl justify-center lg:py-16 lg:grid grid-cols-3 text-center  sm:flex flex-col ">
        <li className="flex flex-col m-3 ">
          <span className="text-lime-500">Type: </span>
          {type}
        </li>
        <li className="flex flex-col m-3">
          <span className="text-lime-500">dimension: </span>
          {dimension}
        </li>
        <li className="flex flex-col m-3">
          <span className="text-lime-500">Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
