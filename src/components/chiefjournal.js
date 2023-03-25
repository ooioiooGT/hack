import React from "react";
import Navigation from "./navigation";
import Working from "./working";

const Journal = () => {
  return (
    <div>
      <Navigation body={<Working />} />
    </div>
  );
};

export default Journal;
