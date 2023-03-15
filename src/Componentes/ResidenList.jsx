import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidenList = ({ residents }) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(270px,_1fr))] gap-8 px-32 py-8  ">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidenList;
