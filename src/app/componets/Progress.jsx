import React from "react";
import ProgressCircle from "./ProgressCircle";
const Progress = ({ initialValues }) => {
  return (
    <div>
      <ProgressCircle initialValues={initialValues} />
    </div>
  );
};

export default Progress;
