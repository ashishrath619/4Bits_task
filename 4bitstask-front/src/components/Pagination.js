import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "80vh",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "#18dcff",
  },
}));

export default function PaginationC(props) {
  const classes = useStyles();

  const [getList, setList] = useState([]);

  const fetchapi = (value) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setList(result.data);
        // setDataTemp(JSON.stringify(result));
        console.log("aagya", JSON.stringify(result));
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchapi();
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    fetchapi(value);
  };

  const showData = () => {
    return getList.map((item) =>
      item.title !== null ? (
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        </ul>
      ) : (
        <div></div>
      )
    );
  };

  return (
    <div>
      <Grid container spacing={1} style={{}}>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>Show Titles</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div>{showData()}</div>
            <div
              style={{ paddingTop: "80px", position: "relative", left: "40%" }}
            >
              <Pagination
                count={5}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={(event, value) => handleChange(event, value)}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
