import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

import "../../styles/header_styles.css";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { colorMode } from "../../features/darkModeSlice";
import {
  styleForLightModeSearchBar,
  styleForDarkModeSearchBar,
} from "../../utils/common";
import { Select } from "antd";
import { filteredList } from "../../features/countrySlice";
import Data from "../../app/data.json";
function getRegions() {
  return Data.reduce((regions, country) => {
    const region = country.region;
    if (!regions[region]) {
      regions[region] = [];
    }
    regions[region].push(country);
    return regions;
  }, {});
}
const optionslist = Object.entries(getRegions()).map(([key]) => ({
  key: key,
  value: key,
}));
const Heaader = () => {
  const dispatch = useDispatch();

  const onChange = (value) => {
    if (value.length > 0) {
      let newList = Data.filter((item) => item.region === value);
      dispatch(filteredList(newList));
    } else {
      dispatch(filteredList(Data));
    }
  };

  const handleChange = (e) => {
    let country = e.target.value.trim();
    if (country.length > 0) {
      let newList = Data.filter((item) =>
        item.name.toLowerCase().includes(country.toLowerCase())
      );
      dispatch(filteredList(newList));
    } else {
      dispatch(filteredList(Data));
    }
  };
  const mode = useSelector(colorMode);
  return (
    <Row className="headerBar">
      <Col xs={24} md={6} className="searchBar">
        <Input
          size="large"
          placeholder="Search for a country..."
          prefix={
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                color: mode === "light" ? "#bbbbbb82" : "hsl(0, 0%, 52%)",
              }}
            ></i>
          }
          className={mode === "dark" && "searchInput"}
          style={
            mode === "light"
              ? styleForLightModeSearchBar
              : styleForDarkModeSearchBar
          }
          onChange={(e) => handleChange(e)}
        />
      </Col>
      <Col xs={24} xl={4} className="selectdropdownFilter" style={{}}>
        <Select
          placeholder="Select a person"
          optionFilterProp="children"
          className={`selectFilter ${mode === "dark" && "selectFilterDark"}`}
          popupClassName={`${mode === "dark" && "dropdownItems"}`}
          onChange={onChange}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={optionslist}
        />
      </Col>
    </Row>
  );
};

export default Heaader;
