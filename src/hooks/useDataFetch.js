import { useState, useEffect } from "react";

const useDataFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataResponse = await fetch(url);
    const textResponse = await dataResponse.text();
    console.log(textResponse);
    setData(textResponse.split(""));
  };

  return data;
};

export default useDataFetch;
