import Navigator from "../../components/Navigation/Navigator";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
const MainPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return <Navigator />;
  }
};
export default MainPage;
