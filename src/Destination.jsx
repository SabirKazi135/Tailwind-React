import data from "./data/popularDestinations.js";
import DestinationCard from "./components/DestinationCard.jsx";

function Destination() {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900">Popular destinations</h2>
      <p className="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((destination) => (
          <DestinationCard destination={destination} key={destination.city} />
        ))}
      </div>
    </div>
  );
}

export default Destination;
