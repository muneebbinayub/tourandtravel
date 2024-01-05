import React, { useEffect } from "react";
import Packages from "./ui/Packages";
import Experience from "./ui/Experience";
import Explore from "./ui/Explore";

const Hero = () => {
  useEffect(() => {
    // Get the audio element by its ID
    const playlabaik = document.getElementById("playlabaik");  
    const audioElement = document.getElementById("myAudio");
    playlabaik.addEventListener("click",()=>{
      
    // Play the audio when the component mounts
    audioElement.play();

    // Optionally, you can pause the audio when the component unmounts
    return () => {
      audioElement.pause();
    };

    })

  }, []);

  return (
    <div id="playlabaik" className="h-full w-full bg-primary">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-4/5 flex items-center justify-center flex-col gap-7 text-center ">
          <p className="text-white">
            <span>Hajj is forgiveness for sins. </span>الحجُّ مغفرةٌ للذنوب
          </p>
          <h1 className="text-7xl font-rowdies text-white">
            Embrace the <br /> <span className="text-secoundary">journey</span>,
            find peace
          </h1>
          <p className="text-white">
            O Allah! Grant us the opportunity to perform Hajj and Umrah, and
            guide us on the path of righteousness
          </p>
          <button className="px-8 py-2 bg-secoundary border-none outline-none rounded-md">
            Book now
          </button>
          <audio id="myAudio" autoPlay>
            <source src="../src/assets/labaik.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <Packages></Packages>
      <Experience></Experience>
      <Explore></Explore>
    </div>
  );
};

export default Hero;
