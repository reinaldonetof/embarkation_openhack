import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax";

import { Perfil, PersonalRank, Description, Rank } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginTop: -250,
    zIndex: 2,
    position: 'relative'
  },
  header: {
    zIndex: 0,
  },
  gri: {
    zIndex: 2
  }
}));

const ProfileCompany = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax
        small
        filter
        image={require("../../assets/img/profile-bg.jpg")}
        className={classes.header}
      />
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item lg={8} sm={2} xl={3} xs={12}>
            <Perfil />
          </Grid>
          <Grid item lg={3} sm={2} xl={3} xs={12}>
            <PersonalRank valuerank={"embassador"} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={8}>
            <Description />
          </Grid>
          <Grid item lg={4} md={8} xl={9} xs={8}>
            <Rank />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProfileCompany;
