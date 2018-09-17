import React from "react";
// @material-ui/core components
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import TextField from "@material-ui/core/TextField";
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
import querystring from "querystring";

const styles = {
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
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient1: "",
      patient2: "",
      patient3: "",
      patient4: "",
      patient5: "",
      patient6: "",
      patient7: "",
      id1: "",
      id2: "",
      id3: "",
      id4: "",
      id5: "",
      id6: "",
      id7: "",
      action: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event, "event");
   
    var twins = this.state.patient1 + ';' + this.state.patient2 + ';' + this.state.patient3 + ';' + this.state.patient4 + ';' + this.state.patient5 + ';' + this.state.patient6 + ';' + this.state.patient7
  
    var headers= {
        'x-access-key': 'KOOY-9CV8-RO09-Q43W'
     }
    //   },
    //   twins: querystring.stringify(twins),
    //   url: 'https://twin-patient.herokuapp.com/api/users/setTwin'
    // };
    var data = {
      'twins' : twins
    }

    axios.post('https://twin-patient.herokuapp.com/api/users/setTwin', data, { headers : headers})
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  handleDelete(event) {
    event.preventDefault();
    console.log(this.state, "state");
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <form onSubmit={this.handleSubmit}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}> My Twins</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 1"
                        fullWidth
                        margin="normal"
                        name="id1"
                        value={this.state.id1}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 1"
                        fullWidth
                        margin="normal"
                        name="patient1"
                        value={this.state.patient1}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 2"
                        fullWidth
                        margin="normal"
                        name="id2"
                        value={this.state.id2}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 2"
                        fullWidth
                        margin="normal"
                        name="patient2"
                        value={this.state.patient2}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 3"
                        fullWidth
                        margin="normal"
                        name="id3"
                        value={this.state.id3}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 3"
                        fullWidth
                        margin="normal"
                        name="patient3"
                        value={this.state.patient3}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 4"
                        fullWidth
                        margin="normal"
                        name="id4"
                        value={this.state.id4}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 4"
                        fullWidth
                        margin="normal"
                        name="patient4"
                        value={this.state.patient4}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 5"
                        fullWidth
                        margin="normal"
                        name="id5"
                        value={this.state.id5}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 5"
                        fullWidth
                        margin="normal"
                        name="patient5"
                        value={this.state.patient5}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 6"
                        fullWidth
                        margin="normal"
                        name="id6"
                        value={this.state.id6}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 6"
                        fullWidth
                        margin="normal"
                        name="patient6"
                        value={this.state.patient6}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        id="full-width-text-field"
                        label="ID 7"
                        fullWidth
                        margin="normal"
                        name="id7"
                        value={this.state.id7}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="full-width-text-field"
                        label="Patient 7"
                        fullWidth
                        margin="normal"
                        name="patient7"
                        value={this.state.patient7}
                        onChange={this.handleChange}
                        required
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button
                    color="primary"
                    type="submit"
                  >
                    Add All
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    onClick={this.handleDelete}
                  >
                    Delete All
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
