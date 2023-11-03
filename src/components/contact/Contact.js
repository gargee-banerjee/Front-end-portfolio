import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";
import classes from './Style.module.css';

const Contact = () => {
  const gitHubLink = `https://github.com/gargee-banerjee`;
  const linkedInLink = `https://www.linkedin.com/in/gargeebanerjee/`;
  return (
    <div id="contactSection" className={classes.contactOuterContainer}>
      <div className={classes.contactInnerContainer}>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <IconButton >
            <GitHubIcon className={classes.contactIcon} />
          </IconButton>
        </a>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <IconButton>
            <LinkedInIcon className={classes.contactIcon} />
          </IconButton>
        </a>
        <IconButton>
          <EmailIcon className={classes.contactIcon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
