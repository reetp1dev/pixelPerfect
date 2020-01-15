import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";

export const mainListItems = (
  <div>
    <ListItem button={true} style={{ paddingTop: 20 }}>
      <ListItemIcon>
        <DashboardIcon style={{ fontSize: 40 }} />
      </ListItemIcon>
    </ListItem>
    <ListItem button={true} style={{ paddingTop: 20 }}>
      <ListItemIcon>
        <ShoppingCartIcon style={{ fontSize: 40 }} />
      </ListItemIcon>
    </ListItem>
    <ListItem button={true} style={{ paddingTop: 20 }}>
      <ListItemIcon>
        <PeopleIcon style={{ fontSize: 40 }} />
      </ListItemIcon>
    </ListItem>
  </div>
);
