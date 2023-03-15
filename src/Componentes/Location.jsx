import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className=" bg-emerald-900 ">
      <h2 className="text-center text-lime-400 text-5xl ">{name}</h2>
      <ul className=" lg:text-2xl justify-center lg:py-16 lg:grid grid-cols-3 px-60 sm:flex flex-col ">
        <li className="flex flex-col m-3 ">
          <span className='text-lime-500'>Type: </span>
          {type}
        </li>
        <li className="flex flex-col m-3">
          <span className='text-lime-500'>dimension: </span>
          {dimension}
        </li>
        <li className="flex flex-col m-3">
          <span className='text-lime-500'>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
