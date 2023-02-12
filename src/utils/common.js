export const darkMode = localStorage.getItem("mode");
export const setDarkMode = (e) => {
  localStorage.setItem("mode", e);
};
export const styleForDarkModeNav = {
  backgroundColor: "hsl(209, 23%, 22%)",
  color: "hsl(0, 0%, 100%)",
};
export const styleForLightModeNav = {
  backgroundColor: "hsl(0, 0%, 100%)",
  color: "hsl(200, 15%, 8%)",
};
export const styleForDarkModeBody = {
  backgroundColor: " hsl(207, 26%, 17%)",
  position: "absolute",
  top: 50,
  right: "0",
  bottom: "0",
  left: "0",
  color: "hsl(0, 0%, 100%)",
};
export const styleForLightModeBody = {
  backgroundColor: " hsl(0, 0%, 98%)",
  position: "absolute",
  top: 50,
  right: "0",
  bottom: "0",
  left: "0",
};
export const styleForDarkModeSearchBar = {
  backgroundColor: "hsl(209, 23%, 22%)",
  color: "hsl(0, 0%, 100%)",
  border: "none",
  boxShadow: " 5px 5px 9px 0px hsl(209, 23%, 22%)",
};
export const styleForLightModeSearchBar = {
  backgroundColor: "hsl(0, 0%, 100%)",
  color: "hsl(200, 15%, 8%)",
  border: "none",
  boxShadow: " 5px 5px 9px 0px #8888",
};
