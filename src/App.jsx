import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RandomNumber } from './Utils/RandomNumber';
import Location from './Componentes/Location';
import ResidenList from './Componentes/ResidenList';
import imgaesF from '../public/rick3.jpg';

const App = () => {
  const [locationRes, setLocationRes] = useState(null);
  const [idLocation, setIdLocation] = useState('');

  const idLocantionRandom = () => RandomNumber(1, 126);

  const carryInfo = async (idLocationL) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocationL}`;

    try {
      const res = await axios.get(url);

      setLocationRes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handle = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setIdLocation(newValue);
  };

  const serchHandle = (e) => {
    e.preventDefault();

    if (idLocation) carryInfo(idLocation);
    else carryInfo(idLocantionRandom());
  };

  useEffect(() => {
    carryInfo(idLocantionRandom());
  }, []);

  return (
    <div className="bg-teal-900 flex flex-col justify-center items-center text-white relative">
      <img src={imgaesF} alt="" className=" w-full  h-auto " />

      <form className=" w-full flex justify-center px-20" onSubmit={serchHandle}>
        <input
          className="bg-emerald-900 my-5 lg:px-72 py-4 sm:px-36 px-16"
          type="search"
          name=""
          value={idLocation}
          onChange={handle}
          placeholder="Type a number between 1 and 126"
        />
        <input
          className="border-gray-200 bg-slate-900 my-5 py-4 px-14"
          type="submit"
          value={'Serch'}
        />
      </form>
      {locationRes && <Location {...locationRes} />}
      {locationRes && <ResidenList residents={locationRes.residents} />}
    </div>
  );
};

export default App;
