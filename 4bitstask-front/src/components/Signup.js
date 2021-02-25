import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {
  checkRequire,
  checkMobile,
  checkEmail,
  checkPassword,
} from "../Checks";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import { postDataAxios } from "../FetchNodeService";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [pwd, setpwd] = React.useState("");
  const [gender, setgender] = React.useState("");
  const [mob, setmob] = React.useState("");
  const [nameerr, setnameerr] = React.useState("");
  const [emailerr, setemailerr] = React.useState("");
  const [pwderr, setpwderr] = React.useState("");
  const [gendererr, setgendererr] = React.useState("");
  const [moberr, setmoberr] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date().toString());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setgender(event.target.value);
  };

  const handleSubmit = async () => {
    var err = false;
    if (!checkRequire(name)) {
      err = true;
      setnameerr("/images/cross.png");
    } else {
      setnameerr("/images/tick.png");
    }
    if (!checkEmail(email)) {
      err = true;
      setemailerr("/images/cross.png");
    } else {
      setemailerr("/images/tick.png");
    }
    if (!checkPassword(pwd)) {
      err = true;
      setpwderr("/images/cross.png");
    } else {
      setpwderr("/images/tick.png");
    }
    if (!checkMobile(mob)) {
      err = true;
      setmoberr("/images/cross.png");
    } else {
      setmoberr("/images/tick.png");
    }
    if (!checkRequire(gender)) {
      err = true;
      setgendererr("/images/cross.png");
    } else {
      setgendererr("/images/tick.png");
    }
    var body = {
      name: name,
      email: email,
      mobile: mob,
      password: pwd,
      dob: selectedDate,
      gender: gender,
    };
    if (!err) {
      var result = await postDataAxios("registration/add", body);
      console.log("result", result);
      if (result.length === 0) {
        alert("Failed to Recored Submit....");
      } else {
        alert("Recored Submit....");
      }
    } else {
      alert("Failed to Recored Submit please fill currect fields....");
    }
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img src={nameerr} width="10" height="10" />

              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={name}
                onChange={(event) => setname(event.target.value)}
                fullWidth
                id="firstName"
                label=" Name"
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={moberr} width="10" height="10" />

              <TextField
                variant="outlined"
                fullWidth
                value={mob}
                onChange={(event) => setmob(event.target.value)}
                label="Mobile No"
                required={true}
              />
            </Grid>

            <Grid item xs={12}>
              <img src={emailerr} width="10" height="10" />

              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(event) => setemail(event.target.value)}
                autoComplete="email"
                required={true}
              />
            </Grid>
            <Grid item xs={12}>
              <img src={pwderr} width="10" height="10" />

              <TextField
                variant="outlined"
                fullWidth
                value={pwd}
                onChange={(event) => setpwd(event.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={gendererr} width="10" height="10" />

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={gender}
                  onChange={handleChange}
                  label="Gender"
                  required={true}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"other"}>other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="outlined"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date of Birth"
                    value={selectedDate}
                    required={true}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleSubmit()}
          >
            Sign Up
          </Button>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
