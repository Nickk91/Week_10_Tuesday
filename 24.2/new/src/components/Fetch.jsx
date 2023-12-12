import React from "react";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const { data, isLoading, error } = useFetch("https://api.jokes.one/");
  console.log(data);

  return (
    <div>
      <h1>Data fetching</h1>
      {isLoading && <p>loading</p>}
      {error && <p>error fetching</p>}
      {data && <div> null</div>}
    </div>
  );
};

export default Fetch;
