import React from "react";

export const Explore = () => {
  return (
    <div className="h-60 w-full bg-third flex items-center justify-center">
      <div className="h-4/5 w-full bg-primary flex items-center justify-center flex-col ">
        <div className="w-4/5 h-43 flex items-center justify-center border-b-4 border-line">
          <div className="w-2/5 h-full flex items-center justify-center border-white">
            <h1 className="text-white text-3xl font-bold">
              Lets Explore this pious journy with our experienced team
            </h1>
          </div>
          <div className="w-2/5 h-full flex items-center justify-center text-white pl-7">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem repudiandae aperiam sequi debitis praesentium.
              Cumque perspiciatis doloremque impedit eos assumenda.
            </p>
          </div>
        </div>
        <div className="w-4/5 text-white h-43 border-t-4 border-line flex items-center justify-center">
          <div className="w-1/3  flex items-center justify-center flex-col gap-4 border-r-2 border-white">
            <h1 className="text-4xl font-bold">24/7</h1>
            <p className="">Ready to support</p>
          </div>
          <div className="w-1/3  flex items-center justify-center flex-col gap-4">
            <h1 className="text-4xl font-bold">24/7</h1>
            <p className="">Ready to support</p>
          </div>
          <div className="w-1/3 flex items-center justify-center flex-col gap-4 border-l-2 border-white">
            <h1 className="text-4xl font-bold">24/7</h1>
            <p className="">Ready to support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
