import data from "./data/popularDestinations.js";

function Destination() {
  return (
    <div>
      {data.map((distination) => (
        <p>{distination.city}</p>
      ))}
    </div>
  );
}

export default Destination;
