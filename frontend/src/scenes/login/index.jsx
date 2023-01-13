import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ handleChange }) => {
  const btnstyle = { margin: "8px 0" };
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data }] = useMutation(LOGIN_MUTATION);

  return (
    <Grid container justify="center">
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <FormControl
          style={{
            marginTop: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Email"
            placeholder="xxx@gmail.cz"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl
          style={{
            marginTop: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Password"
            placeholder="Enter your password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => login({ variables: { email, password } })}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;