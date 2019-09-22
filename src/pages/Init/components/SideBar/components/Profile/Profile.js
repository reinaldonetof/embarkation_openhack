import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";

import perfil from "../../../../../../assets/perfil/8biticon.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  body: {
    border: 0
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const [imgurl, setImgUrl] = useState(perfil);
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [country, setCountry] = useState("Country");
  const [region, setRegion] = useState("Region");

  useEffect(() => {
    setImgUrl(localStorage.getItem("imgurl"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setCountry(localStorage.getItem("country"));
    setRegion(localStorage.getItem("region"));
  }, []);

  const classes = useStyles();

  const user = {
    name: name,
    avatar: imgurl,
    bio: email,
    country: country,
    region: region
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={perfil}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography className={classes.body} variant="body2">
        {user.bio}
      </Typography>
      <Typography className={classes.body} variant="body2">
        {user.country} - {user.region}
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
