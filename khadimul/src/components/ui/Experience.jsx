import React from "react";

export const Experience = () => {
  return (
    <div className="h-screen w-full bg-third flex items-center justify-center">
      {/* main container */}
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="text-secoundary text-5xl font-bold">
          Experience and Service
        </h1>
        <p className=" mt-3 mb-16 text-lg ">
          Experience the highest quality of service
        </p>
        <div className="w-4/5 h-70 flex items-center justify-center">
          {/* image */}
          <div className="w-1/3 h-full bg-experience bg-no-repeat bg-center bg-cover rounded-3xl"></div>
          {/* 4 box */}
          <div className="w-1/2 h-full  flex items-center justify-center flex-wrap gap-6">
            <div className="h-45 w-2/5 bg-secoundary rounded-3xl flex items-left justify-evenly flex-col p-7 text-primary">
              <h1 className="text-5xl font-bold">5+</h1>
              <h2 className="text-xl font-semibold">Years of experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus eaque expedita!
              </p>
            </div>
            <div className="h-45 w-2/5 bg-primary rounded-3xl flex items-left justify-evenly flex-col p-7 text-white">
              <h1 className="text-5xl font-bold">400+</h1>
              <h2 className="text-xl font-semibold">Happy Travler</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus eaque expedita!
              </p>
            </div>
            <div className="h-45 w-2/5 bg-primary rounded-3xl flex items-left justify-evenly flex-col p-7 text-white">
              <h1 className="text-4xl font-bold">Easy</h1>
              <h2 className="text-xl font-semibold">Booking</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus eaque expedita!
              </p>
            </div>
            <div className="h-45 w-2/5 bg-primary rounded-3xl flex items-left justify-evenly flex-col p-7 text-white">
              <h1 className="text-4xl font-bold">Best</h1>
              <h2 className="text-xl font-semibold">Tour Guide</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus eaque expedita!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
