import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import { mainListItems } from "../components/listItems";
import Cards from "../components/Cards";
import TablePagination from "@material-ui/core/TablePagination";
import DropMenu from "../components/DropMenu";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  spacing: 4,
  root: {
    display: "flex",
    backgroundColor: "#f5f5f5"
  },
  toolbar: {
    paddingRight: 30 // keep right padding when drawer closed
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  avatar: {
    background: "green"
  },

  appBar: {
    marginLeft: theme.spacing(10),
    background: "white",
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
    // marginLeft: theme.spacing(6)
  },

  list: {
    marginTop: theme.spacing(15)
  },

  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    display: "inline",

    flexGrow: 1,
    color: "black",
    marginLeft: theme.spacing(16.4),
    width: "20 px"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  cardname: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  box: {
    zIndex: -1,
    paddingLeft: theme.spacing(0.75),
    backgroundColor: "#f5f5f5"
  }
}));

export default function Dashboard() {
  const booklist = [
    { name: "name 1", value: "value1", time: "time1" },
    { name: "name 2", value: "value2", time: "time2" },
    { name: "name 3", value: "value3", time: "time3" },
    { name: "name 4", value: "value4", time: "time4" }
  ];

  const rows = [1];

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar} color="secondary">
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" className={classes.title}>
            Your Logo
          </Typography>
          <IconButton color="primary">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{ fontSize: 40, color: "black" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar className={classes.avatar}>AB</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <Divider />
        <List className={classes.list}>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Typography component="h1" variant="h4" color="inherit">
            Your Jobs
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <DropMenu className={classes.formControl} type="categories" />
            <DropMenu className={classes.formControl} type="industry" />
            <DropMenu className={classes.formControl} type="status" />
          </Grid>

          {booklist.map(book => (
            <Cards
              pad={classes.cardname}
              name={book.name}
              value={book.value}
              time={book.time}
              className={classes.box}
            />
          ))}
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Container>

        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}
