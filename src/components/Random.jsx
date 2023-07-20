import React from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import useGif from "../hooks/useGif";

const Random = () => {
  //   const [gif, setGif] = useState("");
  //   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const { data } = await axios.get(url);
  //     console.log(data);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     console.log(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   function clickHandler() {
  //     fetchData();
  //   }
  const [tag, setTag] = useState("barbie");

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2  bg-green-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className=" mt-[15px] text-xl  underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="400" className="rounded-lg mx-auto" />
      )}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-lg py-1 rounded-lg uppercase mb-[15px] hover:bg-yellow-500  "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
