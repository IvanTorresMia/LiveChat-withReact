import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    height: "300px",
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography component="p">place holder</Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {[].map((topic) => (
                <ListItem button>
                  <ListItemText primary="Drafts" />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}></div>
        </div>
        <div className={classes.flex}></div>
      </Paper>
    </div>
  );
};

export default Dashboard;