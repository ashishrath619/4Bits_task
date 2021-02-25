import React, { useState, useEffect } from "react";
import { cars } from "./Listitem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "#18dcff",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ShowList() {
  const classes = useStyles();

  const [audi, setaudi] = useState([]);
  const [ford, setford] = useState([]);
  const [kia, setkia] = useState([]);

  useEffect(() => {
    task();
  }, []);
  // object by "make" key
  const task = () => {
    var result = cars.reduce(
      (h, car) =>
        Object.assign(h, {
          [car.make]: (h[car.make] || []).concat({
            model: car.model,
            year: car.year,
          }),
        }),
      {}
    );
    setaudi(result["audi"]);
    setford(result["ford"]);
    setkia(result["kia"]);

    console.log("result", result);
  };
  /////////////////object into an array that contains  only names
  var studentDetails = [
    { studentName: "Chris", studentMarks: 34 },
    { studentName: "David", studentMarks: 89 },
  ];
  var name = studentDetails.map(function (item) {
    return (
      <>
        <Card className={classes.root}>
          <center>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2> Name -{item.studentName}</h2>
              </Typography>
            </CardContent>
          </center>
        </Card>
      </>
    );
  });
  const Showaudi = () => {
    return (
      <>
        {audi.map((index, key) => (
          <Card className={classes.root}>
            <center>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h4>model {index.model}</h4>
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  Year {index.year}
                </Typography>
              </CardContent>
            </center>
          </Card>
        ))}
      </>
    );
  };
  const Showford = () => {
    return (
      <>
        {ford.map((index) => (
          <Card className={classes.root}>
            <center>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h4>model {index.model}</h4>
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  Year {index.year}
                </Typography>
              </CardContent>
            </center>
          </Card>
        ))}
      </>
    );
  };
  const Showkia = () => {
    return (
      <>
        {kia.map((index) => (
          <Card className={classes.root}>
            <center>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h4>model {index.model}</h4>
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  Year {index.year}
                </Typography>
              </CardContent>
            </center>
          </Card>
        ))}
      </>
    );
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>Show Data from Array</Paper>
        </Grid>

        <Grid
          item
          xs={4}
          sm={3}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <center>
            <h3>Student name</h3>
          </center>
          {name}
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <center>
            <h3>Audi</h3>
          </center>

          {Showaudi()}
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <center>
            <h3>ford</h3>
          </center>

          {Showford()}
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <center>
            <h3>Kia</h3>
          </center>

          {Showkia()}
        </Grid>
      </Grid>
    </div>
  );
}
