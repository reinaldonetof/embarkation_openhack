import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import axios from "axios";

import {
  PersonalRank,
  NextRank,
  NextHacks,
  Rank,
  Participated
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const abortController = new AbortController();

  const storeLocal = (name, nickname, isCompany, country, region, imgurl) => {
    localStorage.setItem("name", name);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("isCompany", isCompany);
    localStorage.setItem("country", country);
    localStorage.setItem("region", region);
    localStorage.setItem("imgurl", imgurl);
  };

  useEffect(async () => {
    await axios
      .get("https://red-equinox-253000.appspot.com/User")
      .then(response => {
        let Id = localStorage.getItem("id");
        var dataArray = response.data;
        let dataJSON = dataArray.filter(dados =>
          dados.id === Id ? dados : null
        );
        console.log(dataJSON[0])
        let { nickname, isCompany, name, imgurl } = dataJSON[0].data;
        let country = dataJSON[0].data.document.country;
        let region = dataJSON[0].data.document.region;
        storeLocal(name, nickname, isCompany, country, region, imgurl);
        return function cleanup() {
          abortController.abort();
        };
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={2} xl={3} xs={12}>
          <PersonalRank valuerank={"newbie"} />
        </Grid>
        <Grid item lg={3} sm={2} xl={3} xs={12}>
          <NextRank valuerank={"newbie"} />
        </Grid>
        <Grid item lg={3} sm={2} xl={3} xs={12}>
          <Participated valuerank={"embassador"} />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={8}>
          <NextHacks />
        </Grid>
        <Grid item lg={4} md={8} xl={9} xs={8}>
          <Rank />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
