import React from "react";
import { useFetch } from "../customHook/useFetch";
import useonLineStatus from "../customHook/useonLineStatus";

const DataPresentation = () => {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const { isOnline } = useonLineStatus();
  const handleClick = () => {
    console.log("✅ Progress saved");
  };
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
      <button disabled={!isOnline} onClick={handleClick}>
        {isOnline ? "Save Progress" : "Reconnecting"}
      </button>
    </div>
  );
};

export default DataPresentation;
