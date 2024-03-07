import { useEffect, useState } from "react";
import Typewriter from "./components/TypeWriter";
import "./styles.css";
import { URL } from "./utils/constants";
import useDataFetch from "./hooks/useDataFetch";

export default function App() {
  const dataResponse = useDataFetch(URL);

  return (
    <div className="App">
      {dataResponse.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>
            <Typewriter text={dataResponse} delay={500} />
          </h1>
        </>
      )}
    </div>
  );
}
