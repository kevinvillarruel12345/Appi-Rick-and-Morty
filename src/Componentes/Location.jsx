import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className=" bg-emerald-900 ">
      <h2 className="text-center">{name}</h2>
      <ul className=" lg:text-2xl justify-center lg:py-16 lg:grid grid-cols-3 px-60 sm:flex flex-col ">
        <li className="flex flex-col m-3 ">
          <span>Type: </span>
          {type}
        </li>
        <li className="flex flex-col m-3">
          <span>dimension: </span>
          {dimension}
        </li>
        <li className="flex flex-col m-3">
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
