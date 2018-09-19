import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from "@material-ui/core/TextField";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

var names = [];

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      patinet: "",
      patientDetails: "",
      data: null,
      multiline: "Controlled"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mypatients();
  }

  handleSelectChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  mypatients() {
    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };
    axios
      .get("https://twin-patient.herokuapp.com/api/users/getTwins", {
        headers: headers
      })
      .then(response => {
        // console.log(response);
        this.setState({ data: response.data });
        var patients = [];
        for (var i = 0; i < response.data.message.length; i++) {
          names.push(response.data.message[i]);
        }
        patients = names;
        console.log(patients, "patients");
        this.setState({ values: patients });
        console.log(this.state.values, "data");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };

    var data = {
      introduction: this.state.patientDetails
    };
    axios
      .post("https://twin-patient.herokuapp.com/api/users/setPriority", data, {
        headers: headers
      })
      .then(response => {
        this.myPriorities();
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <form>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}> Add Patient Details</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="select">Select Patient</InputLabel>
                      <Select
                        fullWidth
                        value={this.state.name}
                        onChange={this.handleSelectChange}
                        input={<Input id="select" />}
                        MenuProps={MenuProps}
                      >
                        {names.map(name => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={{
                              fontWeight:
                                this.state.name.indexOf(name) === -1
                                  ? theme.typography.fontWeightRegular
                                  : theme.typography.fontWeightMedium
                            }}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="multiline-flexible"
                      label="Patient Details"
                      multiline
                      fullWidth
                      rowsMax="4"
                      value={this.state.patientDetails}
                      onChange={this.handleChange("patientDetails")}
                      className={classes.textField}
                      margin="normal"
                      required
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Update Details
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);