import { StyleSheet } from "aphrodite/no-important";
var green = "#219653";
var grey = "#e0e0e0";
export default StyleSheet.create({
  block__login: {
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    marginTop: "55px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "64px",
    paddingBottom: "64px",
    width: "428px",
    height: "566px",
    textAlign: "center",
  },
  logo: {
    width: "111px",
    height: "24px",
    marginottom: "56px",
  },
  input__login: {
    marginBottom: "16px",
  },
  input__password: {
    marginBottom: "16px",
  },
  login: {
    width: "348px",
    height: "56px",
    display: "flex",
    justifyContent: "space - between",
    alignItems: "center",
    paddingRight: "12px",
    paddingLeft: "12px",
    border: "none",
    background: "#fafafa",
    borderRadius: "4px 4px 0px 0px",
  },
  password: {
    width: "348px",
    height: "56px",
    display: "flex",
    justifyContent: "space - between",
    alignItems: "center",
    paddingRight: "12px",
    paddingLeft: "12px",
    border: "none",
    background: "#fafafa",
    borderRadius: "4px 4px 0px 0px",
    position: "relative"
  },
  submit: {
    background: "#219653",
    border: "1px solid #219653",
    borderRadius: "4px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "32px",
    width: "348px",
    height: "56px",
  },
  password__ask: {
    marginLeft: "5px",
    color: "#219653"
  },
  hidden: {
    display: "none"
  },
  password__control: {
    cursor: "pointer",
    position: "absolute",
    zIndex: "999",
    display: "inline-block",
    width: "20px",
    height: "20px",
    background: "url(./ Images / no - view.svg) 0 0 no - repeat",
    transform: "translate(140px, -37.5px)",
  },
  // password__control.view: {
  // background: "url(./Images/view.svg) 0 0 no-repeat"
  // },
});