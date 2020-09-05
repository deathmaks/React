import { makeStyles, Box } from '@material-ui/core';
let green = "#219653";
let grey = "#e0e0e0";
export const useStyles = makeStyles(
  () => ({
    paper: {

    },
    grid: {
      backgroundColor: "#fff",
      border: "1px solid" + grey,
      borderRadius: 10,
      paddingLeft: 40,
      paddingRight: 40,
      width: 428,
      height: 566,
      textAlign: "center",
    },
    log: {
      width: 348,
      height: 56,
      border: "none",
      background: "#fafafa",
      borderRadius: "4px 4px 0px 0px",
      marginBottom: 16,
    },
    pass: {
      width: 348,
      height: 56,
      border: "none",
      background: "#fafafa",
      borderRadius: "4px 4px 0px 0px",
      marginBottom: 16,
    },
    SignIn: {
      textTransform: "none",
      background: green,
      border: "1px solid" + green,
      borderRadius: 4,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 32,
      width: 348,
      height: 56,
      '$:hover': {
        background: green,
        border: "1px solid" + green,
        borderRadius: 4,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 32,
        width: 348,
        height: 56,
        borderBox: "4px solid " + grey,
      }
    },
    pforgot: {
      color: "#828282",
    },
    pnew: {
      marginLeft: 5,
      color: green,
    },
  }),
  { name: 'AuthPage' },
);
