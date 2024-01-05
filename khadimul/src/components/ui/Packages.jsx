import React from "react";

export const Packages = () => {
  return (
    <div className="">
      <div className="bg-white-400 h-screen w-full flex items-center justify-center flex-col gap-10 py-20 text-center ">
        <h1 className="text-5xl font-bold text-secoundary shadow-md">
          Our Popular Package
        </h1>
        <p>
          The reward for an accepted Hajj is nothing less than Paradise." <br />{" "}
          Prophet Muhammad (peace be upon him)
        </p>
        <div className="py-10 w-full h-3/4 flex items-center justify-center gap-14">
          <div className="w-1/4 h-full rounded-2xl shadow-2xl border-1 border-black ">
            <div className="w-full h-3/5 bg-hajj rounded-t-2xl bg-no-repeat bg-center bg-cover"></div>
            <div className="w-full h-2/5 bg-white text-left pl-3 rounded-b-2xl">
              <h1 className="font-semibold text-2xl my-2 "> HAJJ</h1>
              <p className="text-sm text-grey font-semibold">
                إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّـهِ <br />
                Indeed, Safa and Marwah are among the symbols of Allah.
              </p>
              <button className="px-6 py-3 my-3 text-white rounded-md text-sm bg-primary border-none outline-none">
                View More
              </button>
            </div>
          </div>
          <div className="w-1/4 h-full rounded-2xl shadow-2xl border-1 border-black">
            <div className="w-full h-3/5 bg-umrah rounded-t-2xl bg-no-repeat bg-center bg-cover"></div>
            <div className="w-full h-2/5 bg-white text-left pl-3 rounded-b-2xl">
              <h1 className="font-semibold text-2xl my-2"> UMRAH</h1>
              <p className="text-sm text-grey font-semibold">
                إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّـهِ <br />
                Indeed, Safa and Marwah are among the symbols of Allah.
              </p>
              <button className="px-6 py-3 my-3 text-white rounded-md text-sm bg-primary border-none outline-none">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
