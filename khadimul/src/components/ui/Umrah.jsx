import React, { useEffect, useState } from "react";

export const Umrah = () => {
  const [mainData, setMainData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/umrah", {
          method: "GET",
        });
        if (response) {
          const data = await response.json();
          const dataMap = await data.data;
          setMainData(dataMap);
          dataMap.map((item) => {
            console.log(item.month);
          });
        } else {
          console.log("Data not fetched", data.data);
        }
      } catch (err) {
        console.log("INTERNAL SERVER ERROR", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="h-full w-full flex items-center justify-center flex-col gap-10 py-20 text-center bg-third">
        <h1 className="text-5xl font-bold text-secoundary shadow-md">
          Umrah Packages
        </h1>
        <p>
          The reward for an accepted Hajj is nothing less than Paradise." <br />{" "}
          Prophet Muhammad (peace be upon him)
        </p>
        <div className="h-full w-full flex items-center justify-center flex-col gap-12">
        {mainData &&
          mainData.map((item) => (

              <div className="py-10 w-full h-100 flex items-center justify-center gap-14 ">
                <div className="w-1/4 h-full rounded-2xl border-1 border-black shadow-2xl">
                  <div className="w-full h-50 bg-umrah rounded-t-2xl bg-no-repeat bg-center bg-cover"></div>
                  <div className="w-full  bg-white text-left pl-3 rounded-b-2xl">
                    <h1 className="font-semibold text-xl my-2 "> {item.month}</h1>
                    <p className="text-sm text-grey font-semibold">
                      {item.type.toUpperCase()}
                    </p>
                    <p className="text-sm text-grey font-semibold">
                      {item.duration}
                    </p>
                    <p className="text-sm text-grey font-semibold">
                      {item.makkahHotel}
                    </p>
                    <p className="text-sm text-grey font-semibold">
                      {item.madinaHotel}
                    </p>
                    <p className="text-sm text-grey font-semibold">
                      {item.Price}
                    </p>
                    <button className="px-6 py-3 my-3 text-white rounded-md text-sm bg-primary border-none outline-none">
                      View More
                    </button>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Umrah;
