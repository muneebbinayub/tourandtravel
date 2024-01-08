import React, { useEffect, useState } from "react";

export const Frequent = () => {
  const [visiblity, setVisiblity] = useState(false);
  const [visiblity2, setVisiblity2] = useState(false);
  const [visiblity3, setVisiblity3] = useState(false);
  const handleClick = (buttonNumber) => {
    switch(buttonNumber)
    {
        case 1:
            setVisiblity((prevVisibility) => !prevVisibility);
            break;
        case 2:
            setVisiblity2((prevVisibility) => !prevVisibility);
            break;
        case 3:
            setVisiblity3((prevVisibility) => !prevVisibility);
            break;

    }
};
  useEffect(() => {
    // Attach the event listener to the button
    const button = document.getElementById("toggleButton");
    const button2 = document.getElementById("toggleButton2");
    const button3 = document.getElementById("toggleButton3");
    const handleClick1 = ()=>handleClick(1)
    const handleClick2 = ()=>handleClick(2)
    const handleClick3 = ()=>handleClick(3)
    button.addEventListener("click", handleClick1);
    button2.addEventListener("click", handleClick2);
    button3.addEventListener("click", handleClick3);
    console.log(visiblity);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col py-40 bg-white">
      <h1>Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo
        iure deserunt?
      </p>
      <div className="w-4/5 p-14 bg-primary flex items-center justify-center flex-col rounded-3xl">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold">
            How Can We Reach You
          </h1>
          <button
            className="text-white text-5xl font-extrabold"
            id="toggleButton"
          >
            {visiblity ? `^` : "v"}
          </button>
        </div>
        {visiblity && (
          <div className="w-full mt-4 bg-dark p-8 rounded-xl">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              perspiciatis laudantium. Asperiores tempore cumque quisquam
              delectus voluptas, eaque est magni
            </p>
          </div>
        )}
      </div>
      <div className="w-4/5 p-14 mt-12 bg-primary flex items-center justify-center flex-col rounded-3xl">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold">
            How Do I Know I can Trust This Travel Site
          </h1>
          <button
            className="text-white text-5xl font-extrabold"
            id="toggleButton2"
          >
            {visiblity2 ? `^` : "v"}
          </button>
        </div>
        {visiblity2 && (
          <div className="w-full mt-4 bg-dark p-8 rounded-xl">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              perspiciatis laudantium. Asperiores tempore cumque quisquam
              delectus voluptas, eaque est magni
            </p>
          </div>
        )}
      </div>
      <div className="w-4/5 p-14 mt-12 bg-primary flex items-center justify-center flex-col rounded-3xl">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold">
            How Can We Reach You
          </h1>
          <button
            className="text-white text-5xl font-extrabold"
            id="toggleButton3"
          >
            {visiblity3 ? `^` : "v"}
          </button>
        </div>
        {visiblity3 && (
          <div className="w-full mt-4 bg-dark p-8 rounded-xl">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              perspiciatis laudantium. Asperiores tempore cumque quisquam
              delectus voluptas, eaque est magni
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frequent;
