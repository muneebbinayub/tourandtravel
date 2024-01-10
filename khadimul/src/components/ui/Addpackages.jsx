import React, { useEffect, useState } from "react";

export const Addpackages = () => {
    const [formVisibilty, setFormVisibilty] = useState(false);
    const [buttonText,setButtonText] = useState("Add Package");
    const [formData, setFormData] = useState({
      month: "",
      depDate: "",
      ArrDate: "",
      madinahHotel: "",
      makkahHotel: "",
      Price: "",
      duration: "",
      type: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:8000/api/v1/package", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) console.log("data saved");
        else if (response.status(404)) console.log("data not saved");
      } catch (err) {
        console.log("Internal server error", err);
      }
    };
  
    useEffect(() => { 
      const handleVisiblity = ()=>{
        setFormVisibilty((prev)=>!prev);
        setButtonText((prevText) => (prevText === "Add Package" ? "X" : "Add Package"));
      }
      document.getElementById("toggleVisiblity").addEventListener("click",handleVisiblity);
      return ()=>{
        document.getElementById("toggleVisiblity").removeEventListener("click",handleVisiblity);
      }
    },[]);
  return (

    <div className="w-full flex items-center justify-center flex-col gap-4">
      <h1 className="text-secoundary text-4xl  font-bold shadow-sm">
        ADD PACKAGE
      </h1>
      <button className="bg-primary py-2 px-4 outline-none text-white" id="toggleVisiblity">{buttonText}</button>
      {/* form visibility */}
      {formVisibilty && (
        <form
          onSubmit={handleSubmit}
          className=" w-full flex items-center justify-center flex-col gap-5 my-12"
        >
          <input
            type="text"
            name="month"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Month"
            required
          />
          <input
            type="date"
            name="depDate"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Departure"
            required
          />
          <input
            type="date"
            name="ArrDate"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Arrival"
            required
          />
          <input
            type="text"
            name="madinahHotel"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Madinah Hotel"
            required
          />
          <input
            type="text"
            name="makkahHotel"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Makkah Hotel"
            required
          />
          <input
            type="number"
            name="Price"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Price"
            required
          />
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Duration"
            required
          />
          <input
            type="text"
            name="type"
            onChange={handleChange}
            className="w-1/3 py-4 rounded-lg shadow-xl px-2"
            placeholder="Type"
            required
          />
          <button
            className="w-1/3 py-4 rounded-lg shadow-xl px-2 bg-primary text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}{" "}
    </div>  )
}

export default Addpackages;