import React, { useState, useEffect } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
const People = (props) => {
  useEffect(() => {
    setLoading(false);
  }, []);
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <svg
        width="763"
        height="1024"
        viewBox="0 0 763 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          d="M0 0H739.902C739.902 0 567.912 176.5 571.832 285.5C575.752 394.5 631.612 383.5 739.902 518C848.193 652.5 540.472 657 541.942 773C543.412 889 739.902 1024 739.902 1024H0V0Z"
          fill="#3983F3"
        />
      </svg>
    </div>
  );
};
export default People;
