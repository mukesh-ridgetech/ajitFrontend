import React from "react";
import ProgressCircle from "./ProgressCircle";
const Progress = ({ initialValues, isHovered }) => {
  return (
    <div>
      <ProgressCircle initialValues={initialValues} isHovered={isHovered} />
    </div>
  );
};

export default Progress;
