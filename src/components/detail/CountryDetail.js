import { Button, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { colorMode } from "../../features/darkModeSlice";

const CountryDetail = ({ selectedcountry, bordercountry, navigate }) => {
  const mode = useSelector(colorMode);
  const handleBorderClick = (border) => {
    navigate(`/${border.name}`);
  };
  return (
    <Row justify="center" className="detail">
      <Col xs={24} md={6}>
        <img
          src={selectedcountry?.flags?.svg}
          alt="flag_image"
          className="countryImage"
        />
      </Col>
      <Col xs={24} md={6} offset={4} className="countrydetailsCard">
        <h3 className="titleName">{selectedcountry?.name}</h3>
        <Row>
          <Col xs={24} md={12}>
            <div>
              <strong>Native Name:</strong> {selectedcountry?.nativeName}
            </div>
            <div>
              <strong>Population:</strong> {selectedcountry?.population}
            </div>
            <div>
              <strong>Region:</strong> {selectedcountry?.region}
            </div>
            <div>
              <strong>Sub Region:</strong> {selectedcountry?.subregion}
            </div>
            <div>
              <strong>Capital:</strong> {selectedcountry?.capital}
            </div>
          </Col>
          <Col xs={24} md={10} className="countrydetailsCardright">
            <div>
              <strong>Top Level Domain:</strong>{" "}
              {selectedcountry?.topLevelDomain?.[0]}
            </div>
            <div>
              <strong>Currencies:</strong>{" "}
              {selectedcountry?.currencies &&
                selectedcountry?.currencies.map((currency, id) => (
                  <span key={id}>
                    {currency.code}{" "}
                    {id !== selectedcountry?.currencies.length - 1 && ","}
                  </span>
                ))}
            </div>
            <div>
              <strong>Languages:</strong>{" "}
              {selectedcountry?.languages &&
                selectedcountry?.languages.map((language, id) => (
                  <span key={id}>
                    {language.name}{" "}
                    {id !== selectedcountry?.languages.length - 1 && ","}
                  </span>
                ))}
            </div>
          </Col>
        </Row>
        <Row className="borderArea">
          <Col xs={12} md={7} className="borderTilte">
            Border Countries:
          </Col>
          <Col xs={20} md={17} className="border">
            <>
              {bordercountry && bordercountry.length > 0
                ? bordercountry.map((border, id) => (
                    <div className="borderName" key={id}>
                      <Button
                        className="borderButtonName"
                        ghost
                        style={{
                          color: mode === "light" ? "black" : "white",
                        }}
                        onClick={() => handleBorderClick(border)}
                      >
                        {border.name}
                      </Button>
                    </div>
                  ))
                : "N/A"}
            </>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CountryDetail;
