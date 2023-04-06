import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidenList = ({ residents }) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(270px,_2fr))] gap-8  py-8  mx-10">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidenList;
