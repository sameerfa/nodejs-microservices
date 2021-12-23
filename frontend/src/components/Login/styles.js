import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2),
    width: "100%",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 500,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "5px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
