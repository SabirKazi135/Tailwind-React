function Index() {
  return (
    <div>
      <div className="px-8 py-12 w-1/3">
        <img
          className="h-10"
          src="../public/img/logo-brand.svg"
          alt="Workcation"
        />
        <img
          className="mt-6 rounded-lg shadow-xl"
          src="../public/img/beach-work.jpg"
          alt=""
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere.{" "}
          <span className="text-indigo-500"> Take advantage of it.</span>
        </h1>
        <p className="mt-4">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
      </div>
    </div>
  );
}

export default Index;
