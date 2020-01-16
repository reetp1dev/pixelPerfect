import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

export default function OutlinedCard(props) {
  const [buttonToggle, setButtonToggle] = useState({
    variant: "outlined",
    view: "View",
    bookmarkColor: "#f5f5f5"
  });
  const [variant, setVariant] = useState("outlined");
  function handleRevise(event) {
    setButtonToggle({
      ...buttonToggle,
      variant: "contained",
      view: "Revised",
      bookmarkColor: "green"
    });
    setVariant("default");
    console.log(buttonToggle.variant);
  }

  return (
    <Box
      className={props.className}
      style={{ backgroundColor: buttonToggle.bookmarkColor }}
    >
      <Card className={props.pad} variant="outlined">
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
            <Chip variant={variant} label="STATUS" color="secondary"></Chip>
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
      </Card>
    </Box>
  );
}
