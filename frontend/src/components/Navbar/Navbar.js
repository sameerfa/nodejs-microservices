import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const token = useSelector((state) => state.auth?.authData?.token);
  // const token = 1;
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h5"
          align="center"
        >
          Home
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {token ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={(e) => dispatch({ type: actionType.LOGOUT })}
          >
            Logout
          </span>
        ) : (
          <Link to="/">Login</Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
