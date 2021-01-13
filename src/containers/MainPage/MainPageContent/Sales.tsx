import React, { useState, useEffect } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
const Sales = (props) => {
  useEffect(() => {
    setLoading(false);
  }, []);
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <Spinner />;
  } else {
    return <div>Sales</div>;
  }
};
export default Sales;
