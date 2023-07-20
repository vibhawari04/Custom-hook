import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// custom hook
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    try {
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      console.log(data);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      console.log(imageSource);
      setLoading(false);
    } catch (e) {
      toast.error("something went wrong", { position: "top-center" });
    }
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
