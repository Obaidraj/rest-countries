import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { colorMode } from "../features/darkModeSlice";
import { styleForDarkModeBody, styleForLightModeBody } from "../utils/common";
import Data from "../app/data.json";
import { Button, Col, Row } from "antd";
import "../styles/detailPage_styles.css";
import CountryDetail from "../components/detail/CountryDetail";

const Detail = () => {
  const mode = useSelector(colorMode);
  const [selectedcountry, setselectedcountry] = useState({});
  const [bordercountry, setselectedbordercountry] = useState([]);

  let { country } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let selCountry = Data.filter((item) => item.name === country);

    setselectedcountry(selCountry[0]);
    let border = Data.filter((item) =>
      selCountry[0]?.borders?.includes(item.alpha3Code)
    );
    setselectedbordercountry(border);
  }, [country]);
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div
      style={mode === "light" ? styleForLightModeBody : styleForDarkModeBody}
      className="home"
    >
      {selectedcountry ? (
        <>
          {" "}
          <Row>
            <Col span={2} offset={2}>
              <Button
                size="large"
                ghost
                className="backButton"
                style={{ color: mode === "light" ? "black" : "white" }}
                onClick={handleClick}
              >
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ padding: "5px" }}
                ></i>{" "}
                Back
              </Button>
            </Col>
          </Row>
          <CountryDetail
            selectedcountry={selectedcountry}
            bordercountry={bordercountry}
            navigate={navigate}
          />
        </>
      ) : (
        <h3
          style={{
            textAlign: "center",
          }}
        >
          No Data Available
        </h3>
      )}
    </div>
  );
};

export default Detail;
