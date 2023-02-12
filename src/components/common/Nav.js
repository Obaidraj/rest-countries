import { Layout, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeColorMode, colorMode } from "../../features/darkModeSlice";
import { useEffect } from "react";
import {
  darkMode,
  styleForDarkModeNav,
  styleForLightModeNav,
} from "../../utils/common";
import "../../styles/nav_styles.css";
const { Header } = Layout;

const NavBar = () => {
  const mode = useSelector(colorMode);
  const dispatch = useDispatch();

  useEffect(() => {
    darkMode === null
      ? dispatch(changeColorMode("light"))
      : dispatch(changeColorMode(darkMode));
  }, [dispatch]);

  const handleClick = (e) => {
    if (mode === "light") {
      dispatch(changeColorMode("dark"));
    } else {
      dispatch(changeColorMode("light"));
    }
  };
  return (
    <Header
      className="navHead"
      style={mode === "light" ? styleForLightModeNav : styleForDarkModeNav}
    >
      <Col xs={12} sm={8} className="title">
        <span className="titleName">Where in the world?</span>
      </Col>

      <Col
        span={8}
        className="darkSwitch"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          className="modSwitch"
          onClick={(e) => handleClick(e)}
          title="change Mode"
        >
          {mode === "light" ? (
            <>
              <i
                className="fa-sharp fa-regular fa-moon"
                style={{ paddingRight: "5px" }}
              ></i>
              Dark Mode
            </>
          ) : (
            <>
              <i
                className="fa-sharp fa-regular fa-sun"
                style={{ paddingRight: "5px" }}
              ></i>
              Light Mode
            </>
          )}
        </span>
      </Col>
    </Header>
  );
};

export default NavBar;
