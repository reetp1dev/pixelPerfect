import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

export default function OutlinedCard(props) {
  const [buttonToggle, setButtonToggle] = useState({
    variant: "outlined",
    view: "View"
  });
  function handleRevise(event) {
    setButtonToggle({ ...buttonToggle, variant: "contained", view: "Revised" });
    console.log(buttonToggle.variant);
  }

  return (
    <Card className={props.pad} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="h3">
              {props.name}
            </Typography>
            <Typography>
              <b>{props.value}</b>
            </Typography>
            <Fab variant="extended" style={{ backgroundColor: "lightGreen" }}>
              status
            </Fab>
            <Typography>{props.time} </Typography>
            <Button
              variant={buttonToggle.variant}
              onClick={event => {
                handleRevise(event);
              }}
              color="secondary"
            >
              {buttonToggle.view}
            </Button>
          </Grid>

          <Typography variant="body2" component="p" color="textSecondary">
            <br />
            ebook | Travel and Tourism | 400 words
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
