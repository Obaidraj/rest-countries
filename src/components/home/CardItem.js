import { Card, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { colorMode } from "../../features/darkModeSlice";
import { useNavigate } from "react-router-dom";
import { styleForDarkModeNav, styleForLightModeNav } from "../../utils/common";
const { Meta } = Card;
const CardItem = ({ item }) => {
  const navigate = useNavigate();
  const mode = useSelector(colorMode);
  const handleClick = (item) => {
    navigate(`/${item.name}`);
  };
  return (
    <Col xs={24} md={6}>
      <Card
        // hoverable
        style={mode === "light" ? styleForLightModeNav : styleForDarkModeNav}
        className="countryCard"
        cover={
          <img alt="example" src={item.flags.svg} height={150} width={150} />
        }
        onClick={() => handleClick(item)}
      >
        <Meta
          className={mode === "dark" && "countryCardMeta"}
          style={mode === "light" ? styleForLightModeNav : styleForDarkModeNav}
          title={item.name}
          description={
            <>
              <p>
                Population: {item.population} <br /> Region: {item.region}{" "}
                <br /> Capital:{item.capital}
              </p>
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default CardItem;
