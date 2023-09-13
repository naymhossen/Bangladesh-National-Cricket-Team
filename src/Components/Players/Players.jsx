/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Players = () => {

    const [playerData, setPlayerData] = useState([]);


    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setPlayerData(data))
    },[])


  return (
    <div>
     <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
        {
             playerData.map((player) => (
                <div className="card bg-gray-300 shadow-xl">
               <figure className="px-10 pt-10">
                 <img
                   src={player.image}
                   alt="Shoes"
                   className="rounded-[50%] w-40"
                 />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{player.name}</h2>
                 <p>Category: {player.category}</p>
                 <p>Total ODI Match: {player.odi_played_match}</p>
                 <p>Position: {player.position}</p>
                 <p>Wickets: {player?.wickets}</p>
                 <p>Total: {player.total_run} Run</p>
                 <div className="flex gap-5 justify-center items-center">
                    <p>Salary: {player.salary}</p>
                    <button className="btn bg-green-600 text-red-600 text-2xl font-bold "> Heard Me</button>
                 </div>
               </div>
             </div>
           ))
        }
     </div>
    </div>
  );
};

export default Players;
