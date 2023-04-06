import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <>
      {residentInfo && (
        <article className="bg-emerald-900 rounded-lg  font-sans ">
          <div className="">
            <img
              className="w-full rounded-t-lg"
              src={residentInfo.image}
              alt={residentInfo.name}
            />
          </div>
          <h3 className="py-3 px-3 text-center text-2xl bg-emerald-600 rounded-full my-4 ">
            {residentInfo.name}
          </h3>
          <ul className="mx-5 text-xl">
            <li className="">{residentInfo.status}</li>
            <li className="py-3 flex flex-col">
              <span>Origin: </span>
              {residentInfo.origin.name}
            </li>
            <li className="py-3 flex flex-col">
              <span>Number of episode where it appears: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
