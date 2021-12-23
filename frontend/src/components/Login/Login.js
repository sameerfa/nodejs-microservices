import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/auth";

const Login = () => {
  const token = useSelector((state) => state.auth?.authData?.token);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  if (token) {
    return <Navigate to="/dashboard" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signin(loginData));
  };
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5">LOGO</Typography>
          <TextField
            name="email"
            type="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <TextField
            name="password"
            type="password"
            variant="outlined"
            label="Password"
            fullWidth
            rows={4}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <Grid className={classes.links}>
            <Typography variant="body2" component={Link} to="/">
              Recover password?
            </Typography>
            <Typography variant="body2" component={Link} to="/">
              Sign-up
            </Typography>
          </Grid>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Sign-in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
