function Map() {
  return (
    <div className="flex flex-col items-center mt-0 py-8 px-4 sm:px-8 bg-black">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
        Where to find us?
      </h1>
      <div className="w-full max-w-screen-lg">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAh4XQWIUmpr36ew1SANDe9jys0PIywnUM&q=Antica+Osteria+1+Rosso,Florence"
          className="w-full h-64 sm:h-96 lg:h-[500px] rounded-md shadow-md"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
