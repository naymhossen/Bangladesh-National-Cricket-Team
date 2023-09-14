
import Players from "../Players/Players";

const NationalTeam = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-500  font-bold underline text-center animate-pulse">
        Bangladesh National Cricket Team
      </h1>

      <div className="mt-5 w-11/12 mx-auto">
      <Players></Players>
      </div>
    </div>
  );
};



export default NationalTeam;
