import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from "axios";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderLeftWidth: 4,
    borderRightWidth: 4
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
});

class FilledTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient1Name: "",
      patient1Details: "",
      patient2Name: "",
      patient2Details: "",
      patient3Name: "",
      patient3Details: "",
      patient4Name: "",
      patient4Details: "",
      patient5Name: "",
      patient5Details: "",
      patient6Name: "",
      patient6Details: "",
      patient7Name: "",
      patient7Details: "",
      patient1ID: "1",
      patient2ID: "2",
      patient3ID: "3",
      patient4ID: "4",
      patient5ID: "5",
      patient6ID: "6",
      patient7ID: "7",
      id: "1",
      action: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event, "event");
    console.log(this.state, "state");
    var twins = null;
    var serial_no = null;
    var introduction = null;
    if (this.state.patient1Name) {
      twins = this.state.patient1Name;
      serial_no = this.state.patient1ID;
      introduction = this.state.patient1Details;
    } else if (this.state.patient2Name) {
      twins = this.state.patient2Name;
      serial_no = this.state.patient2ID;
      introduction = this.state.patient2Details;
    } else if (this.state.patient3Name) {
      twins = this.state.patient3Name;
      serial_no = this.state.patient3ID;
      introduction = this.state.patient3Details;
    } else if (this.state.patient4Name) {
      twins = this.state.patient4Name;
      serial_no = this.state.patient4ID;
      introduction = this.state.patient4Details;
    } else if (this.state.patient5Name) {
      twins = this.state.patient5Name;
      serial_no = this.state.patient5ID;
      introduction = this.state.patient5Details;
    } else if (this.state.patient6Name) {
      twins = this.state.patient6Name;
      serial_no = this.state.patient6ID;
      introduction = this.state.patient6Details;
    }

    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };
    //   },
    //   twins: querystring.stringify(twins),
    //   url: 'https://twin-patient.herokuapp.com/api/users/setTwin'
    // };
    var data = {
      twins: twins,
      serial_no: serial_no,
      introduction: introduction
    };
    console.log(data, "data");

    axios
      .post("https://twin-patient.herokuapp.com/api/users/setTwin", data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleEdit(event) {
    event.preventDefault();
    console.log(event, "event");
    console.log(this.state, "state");
    var twins = null;
    var serial_no = null;
    var introduction = null;
    if (this.state.patient1Name) {
      twins = this.state.patient1Name;
      serial_no = this.state.patient1ID;
      introduction = this.state.patient1Details;
    } else if (this.state.patient2Name) {
      twins = this.state.patient2Name;
      serial_no = this.state.patient2ID;
      introduction = this.state.patient2Details;
    } else if (this.state.patient3Name) {
      twins = this.state.patient3Name;
      serial_no = this.state.patient3ID;
      introduction = this.state.patient3Details;
    } else if (this.state.patient4Name) {
      twins = this.state.patient4Name;
      serial_no = this.state.patient4ID;
      introduction = this.state.patient4Details;
    } else if (this.state.patient5Name) {
      twins = this.state.patient5Name;
      serial_no = this.state.patient5ID;
      introduction = this.state.patient5Details;
    } else if (this.state.patient6Name) {
      twins = this.state.patient6Name;
      serial_no = this.state.patient6ID;
      introduction = this.state.patient6Details;
    }

    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };
    //   },
    //   twins: querystring.stringify(twins),
    //   url: 'https://twin-patient.herokuapp.com/api/users/setTwin'
    // };
    var data = {
      twins: twins,
      serial_no: serial_no,
      introduction: introduction
    };
    console.log(data, "data");

    axios
      .post("https://twin-patient.herokuapp.com/api/users/editTwin", data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> My Twins</h4>
            </CardHeader>
            <CardBody>
              <Paper className={classes.root} elevation={1}>
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient1"
                          className={classes.textField}
                          value={this.state.patient1ID}
                          onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 1"
                          fullWidth
                          margin="normal"
                          name="patient1Name"
                          className={classes.textField}
                          value={this.state.patient1Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                        <input type="hidden" value={(this.state.id = "1")} />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 1"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient1Details"
                      className={classes.textField}
                      value={this.state.patient1Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient1"
                          className={classes.textField}
                          value={this.state.patient2ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 2"
                          fullWidth
                          margin="normal"
                          name="patient2Name"
                          className={classes.textField}
                          value={this.state.patient2Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 2"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient2Details"
                      className={classes.textField}
                      value={this.state.patient2Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient3ID"
                          className={classes.textField}
                          value={this.state.patient3ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 3"
                          fullWidth
                          margin="normal"
                          name="patient3Name"
                          className={classes.textField}
                          value={this.state.patient3Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 3"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient3Details"
                      className={classes.textField}
                      value={this.state.patient3Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient4ID"
                          className={classes.textField}
                          value={this.state.patient4ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 4"
                          fullWidth
                          margin="normal"
                          name="patient4Name"
                          className={classes.textField}
                          value={this.state.patient4Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 4"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient4Details"
                      className={classes.textField}
                      value={this.state.patient4Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient5ID"
                          className={classes.textField}
                          value={this.state.patient5ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 5"
                          fullWidth
                          margin="normal"
                          name="patient5Name"
                          className={classes.textField}
                          value={this.state.patient5Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                        <input type="hidden" value={(this.state.id = "5")} />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 5"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient5Details"
                      className={classes.textField}
                      value={this.state.patient5Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient6ID"
                          className={classes.textField}
                          value={this.state.patient6ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 6"
                          fullWidth
                          margin="normal"
                          name="patient6Name"
                          className={classes.textField}
                          value={this.state.patient6Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                        <input type="hidden" value={(this.state.id = "6")} />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 6"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient6Details"
                      className={classes.textField}
                      value={this.state.patient6Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
              <Paper
                className={classes.root}
                elevation={1}
                style={{ "margin-top": "2%" }}
              >
                <form onSubmit={this.handleSubmit}>
                  <Typography variant="headline" component="h3">
                    <GridContainer className={classes.container}>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="full-width-text-field"
                          label="Patient ID"
                          fullWidth
                          margin="normal"
                          name="patient7ID"
                          className={classes.textField}
                          value={this.state.patient7ID}
                          // onChange={this.handleChange}
                          variant="outlined"
                          readonly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="full-width-text-static"
                          label="Patient Name 7"
                          fullWidth
                          margin="normal"
                          name="patient7Name"
                          className={classes.textField}
                          value={this.state.patient7Name}
                          onChange={this.handleChange}
                          variant="outlined"
                          required
                        />
                      </GridItem>
                    </GridContainer>
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="full-width-text-static"
                      label="Patient Details 7"
                      fullWidth
                      multiline
                      rows="4"
                      margin="normal"
                      name="patient7Details"
                      className={classes.textField}
                      value={this.state.patient7Details}
                      onChange={this.handleChange}
                      variant="outlined"
                      required
                    />
                    <Button
                      color="primary"
                      type="submit"
                      style={{ "margin-top": "2%" }}
                    >
                      Add
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.handleEdit}
                      style={{ "margin-top": "2%" }}
                    >
                      Edit
                    </Button>
                  </Typography>
                </form>
              </Paper>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilledTextFields);