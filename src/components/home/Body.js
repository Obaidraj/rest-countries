import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { countries } from "../../features/countrySlice";
import "../../styles/home_body.css";

import CardItem from "./CardItem";

const Body = () => {
  const [countriesItems, setcountries] = useState([]);
  const [loading, setloading] = useState(false);
  const countriesList = useSelector(countries);
  useEffect(() => {
    setloading(true);
    setcountries(countriesList);

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [countriesList]);

  return (
    <Row justify={"center"} className="homeBody">
      {loading ? (
        <h2> Loading...</h2>
      ) : (
        <>
          {countriesItems && countriesItems.length > 0 ? (
            countriesItems.map((item, id) => <CardItem item={item} key={id} />)
          ) : (
            <h2> --No data available--</h2>
          )}
        </>
      )}
    </Row>
  );
};

export default Body;
