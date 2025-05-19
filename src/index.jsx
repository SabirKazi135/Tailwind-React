function Index() {
  return (
    <div className="grid grid-cols-2">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24">
        <img
          className="h-10"
          src="../public/img/logo-brand.svg"
          alt="Workcation"
        />
        <img
          className="mt-6 lg:hidden sm:mt-8 rounded-lg sm:h-64 sm:w-full sm:object-cover sm:object-center shadow-xl"
          src="../public/img/beach-work.jpg"
          alt=""
        />
        <h1 className="mt-6 sm:mt-8 text-2xl font-bold sm:text-4xl text-gray-900 lg:text-3xl ">
          You can work from anywhere.{" "}
          <span className="text-indigo-500"> Take advantage of it.</span>
        </h1>
        <p className="mt-2 sm:mt-4 sm:text-xl text-gray-600">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            className="uppercase sm:text-base tracking-wider font-semibold text-sm bg-indigo-500 rounded-lg text-white inline-block px-5 py-3 shadow-lg"
            href="#"
          >
            Book Your escape
          </a>
        </div>
      </div>
      <div>
        <img
          className="hidden lg:block "
          src="../public/img/beach-work.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Index;
