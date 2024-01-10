import React, { useEffect, useState } from "react";

export const RemovePackages = () => {
  const [mainData, setMainData] = useState();
  const [packageRemoveVisi, setPackageRemoveVisi] = useState(false);
  const [message,setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/umrah", {
          method: "GET",
        });
        if (response) {
          const data = await response.json();
          const dataMap = await data.data;
          console.log(data);
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

  useEffect(() => {
    const removePackage = () => {
      setPackageRemoveVisi((prev) => !prev);

    };
    document
      .getElementById("RemovePackageBtn")
      .addEventListener("click", removePackage);
    return () => {
      document
        .getElementById("RemovePackageBtn")
        .removeEventListener("click", removePackage);
    };
  }, []);

  const handleDeletePackage = async (delId) => {
    console.log(delId);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/deletepackage/${delId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        if (response.status === 200) {
          console.log("deleted");
          setPackageRemoveVisi((prev)=>!prev)
          setMessage("Package Deleted Successfully");
          setTimeout(() => {
              setMessage("");
          }, 2000);
        } else if (response.status === 404) {
          console.log("not deleted");
        } else if (response.status === 500) {
          console.log("internal server error");
        }
      }
    } catch (err) {
      console.log("errror while deleteing", err);
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-6 flex-col">
      <button
        className="bg-primary py-2 px-4 outline-none text-white mt-10"
        id="RemovePackageBtn"
      >
        Remove Package
      </button>
        {message && <p className="text-red-500 text-3xl text-center font-bold">{message}</p>}
      {packageRemoveVisi && (
        // <div className=" w-full flex items-center justify-center">
        <div className=" w-full flex items-center flex-col gap-10 py-20 text-center bg-third">
          <h1 className="text-5xl font-bold text-secoundary ">
            Umrah Packages
          </h1>
          <p>
            The reward for an accepted Hajj is nothing less than Paradise."{" "}
            <br /> Prophet Muhammad (peace be upon him)
          </p>
          <div className="h-full w-full flex justify-center flex-col gap-12">
            {mainData &&
              mainData.map((item) => (
                <div
                  className="py-10 w-full h-100 flex items-center justify-center gap-14 flex-col"
                  key={item._id}
                >
                  <div className="w-1/4 h-full rounded-2xl border-1 border-black shadow-2xl">
                    <div className="w-full h-50 bg-umrah rounded-t-2xl bg-no-repeat bg-center bg-cover"></div>
                    <div className="w-full  bg-white text-left pl-3 rounded-b-2xl">
                      <h1 className="font-semibold text-xl my-2 ">
                        {" "}
                        {item.month}
                      </h1>
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
                  <button
                    id="delBtn"
                    className="px-6 py-3 my-5 w-1/4 text-white rounded-md text-sm bg-red-800 border-none outline-none"
                    onClick={() => handleDeletePackage(item._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default RemovePackages;
