/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Team from "../Team/Team";

const Players = () => {
  const [playerData, setPlayerData] = useState([]);
  const [bookPLayer, setBookPlayer] = useState([]);

  //Player biodata histriy info
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

//Booking Button Function 
  const handaleBookedPLayer = (player) => {
    setBookPlayer([...bookPLayer, player]);
  };
  console.log(bookPLayer);

  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-2 gap-5 w-2/3">

        {/* map player bio info */}
        {
        playerData.map((player) => (
          <div key={player.name} className="card bg-gray-300 shadow-xl">
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
                <button onClick={() => handaleBookedPLayer(player)} className="btn bg-green-600 text-red-600 text-2xl font-bold ">
                  Heard Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2nd section */}
      <div className="w-1/2 text-center items-center bg-gray-300 rounded-xl">
        <Team bookPLayer={bookPLayer}></Team>
      </div>
    </div>
  );
};

export default Players;
