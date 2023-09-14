/* eslint-disable react/prop-types */
const Team = ({ bookPLayer, payment, remainingCost }) => {
  // console.log(bookPLayer);
  return (
    <div>
      <h3 className="text-2xl font-semibold mt-5 border-b-2 w-9/12 mx-auto text-green-800">
        Team Total Budget: ${payment}
      </h3>
      <h3 className="text-2xl font-semibold mt-5 border-b-2 w-9/12 mx-auto text-green-800">
        Remaining Blance: ${remainingCost}
      </h3>
      <h3 className="text-2xl font-semibold mt-5 border-b-2 w-9/12 mx-auto text-green-800">
        Booked Player: {bookPLayer.length}
      </h3>
      {bookPLayer.map((player) => (
        <div
          key={player.id}
          className="flex justify-evenly bg-green-600 mt-5 rounded-xl items-center p-2 w-9/12 mx-auto  "
        >
          <img
            className="w-16 rounded-full bg-cover mt-5"
            src={player.image}
            alt=""
          />
          <div>
            <p className="text-3xl text-red-700 font-bold">☞ {player.name}</p>
            <p className="text-3xl text-red-700 font-bold">
              ☞ {player.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
