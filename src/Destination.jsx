import data from "./data/popularDestinations.js";

function Destination() {
  return (
    <div>
      {data.map((distination) => (
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden ">
          <img
            className="h-32 w-32 flex-shrink-0"
            src={distination.imageUrl}
            alt={distination.imageAlt}
          />
          <div className="px-6 py-4">
            <h3>{distination.city}</h3>
            <p>{distination.averagePrice}</p>
            <div>
              <a href="#">{distination.propertyCount}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;
