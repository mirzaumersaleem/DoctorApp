import React from "react";
// @material-ui/core components
// import ReactDOM from "react-dom";
import ReactHighcharts from "react-highcharts";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from "axios";
// Example Data

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

const config = {
  /* HighchartsConfig */
   title: {
       text:"Patients Priorities"
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [
    {
      data: [
        {
          name: "Patient 1",
          // color: "#00FF00",
          y: 0
        },
        {
          name: "Patient 2",
          color: "#FF00FF",
          y: 5
        },
        {
          name: "Patient 3",
          color: "#FF00FF",
          y: 10
        },
         {
          name: "Patient 4",
          color: "#FF00FF",
          y: 20
        },
         {
          name: "Patient 5",
          color: "#FF00FF",
          y: 25
        },
        {
          name: "Patient 6",
          color: "#FF00FF",
          y: 30
        },
        {
          name: "Patient 7",
          color: "#FF00FF",
          y: 35
        }
      ]
    }
  ]
};

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patient1: "",
      patient2: "",
      patient3: "",
      patient4: "",
      patient5: "",
      patient6: "",
      patient7: ""
    };
    this.getTwins();
  }

  getTwins() {
    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };
    axios
      .get("https://twin-patient.herokuapp.com/api/users/getResult", {
        headers: headers
      })
      .then(response => {
        response.data.message.map(userData => {
          switch (userData.patient_no) {
            case 1:
              this.setState({ patient1: userData });
              break;
            case 2:
              this.setState({ patient2: userData });
              break;
            case 3:
              this.setState({ patient3: userData });
              break;
            case 4:
              this.setState({ patient4: userData });
              break;
            case 5:
              this.setState({ patient5: userData });
              break;
            case 6:
              this.setState({ patient6: userData });
              break;
            case 7:
              this.setState({ patient7: userData });
              break;
            default:
              break;
          }
         return userData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { classes } = this.props;
    // Data
    // Decorate with Bootstrap CSS
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <form onSubmit={this.handleSubmit}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Patient Report</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <table
                      className="table"
                      border="1px solid black"
                      style={{
                        width: "100%",
                        "border-collapse": "collapse",
                        "background-color": "#dddfdf"
                      }}
                    >
                      <col />
                      <colgroup span="3" />
                      <thead>
                        <tr style={{ "background-color": "#dfdfff" }}>
                          <th scope="col" />
                          <th scope="col">Color</th>
                          <th scope="colgroup">Patient 1</th>
                          <th scope="colgroup">Patient 2</th>
                          <th scope="colgroup">Patient 3</th>
                          <th scope="colgroup">Patient 4</th>
                          <th scope="colgroup">Patient 5</th>
                          <th scope="colgroup">Patient 6</th>
                          <th scope="colgroup">Patient 7</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            rowspan="4"
                            scope="rowgroup"
                            style={{ "background-color": "#dfdfff" }}
                          >
                          Group A
                          </th>
                          <th scope="row">Twins</th>
                          <td>{this.state.patient1 ? this.state.patient1.twin :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.twin :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.twin :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.twin :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.twin :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.twin :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.twin :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.patient1 ? this.state.patient1.treatment :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.treatment :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.treatment :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.treatment :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.treatment :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.treatment :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.treatment :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.patient1 ? this.state.patient1.priority :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.priority :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.priority :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.priority :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.priority :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.priority :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.priority :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.patient1 ? this.state.patient1.description :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.description :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.description :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.description :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.description :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.description :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.description :null}</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th
                            rowspan="4"
                            scope="rowgroup"
                            style={{ "background-color": "#dfdfff" }}
                          >
                          Group B
                          </th>
                          <th scope="row">Twins</th>
                          <td>{this.state.patient1 ? this.state.patient1.twin :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.twin :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.twin :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.twin :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.twin :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.twin :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.twin :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.patient1 ? this.state.patient1.treatment :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.treatment :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.treatment :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.treatment :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.treatment :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.treatment :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.treatment :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.patient1 ? this.state.patient1.priority :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.priority :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.priority :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.priority :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.priority :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.priority :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.priority :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.patient1 ? this.state.patient1.description :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.description :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.description :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.description :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.description :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.description :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.description :null}</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th
                            rowspan="4"
                            scope="rowgroup"
                            style={{ "background-color": "#dfdfff" }}
                          >
                          Group C
                          </th>
                          <th scope="row">Twins</th>
                          <td>{this.state.patient1 ? this.state.patient1.twin :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.twin :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.twin :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.twin :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.twin :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.twin :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.twin :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.patient1 ? this.state.patient1.treatment :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.treatment :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.treatment :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.treatment :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.treatment :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.treatment :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.treatment :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.patient1 ? this.state.patient1.priority :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.priority :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.priority :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.priority :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.priority :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.priority :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.priority :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.patient1 ? this.state.patient1.description :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.description :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.description :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.description :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.description :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.description :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.description :null}</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th
                            rowspan="4"
                            scope="rowgroup"
                            style={{ "background-color": "#dfdfff" }}
                          >
                            Group D
                          </th>
                          <th scope="row">Twins</th>
                          <td>{this.state.patient1 ? this.state.patient1.twin :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.twin :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.twin :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.twin :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.twin :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.twin :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.twin :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.patient1 ? this.state.patient1.treatment :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.treatment :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.treatment :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.treatment :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.treatment :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.treatment :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.treatment :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.patient1 ? this.state.patient1.priority :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.priority :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.priority :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.priority :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.priority :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.priority :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.priority :null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.patient1 ? this.state.patient1.description :null}</td>
                          <td>{this.state.patient2 ? this.state.patient2.description :null}</td>
                          <td>{this.state.patient3 ? this.state.patient3.description :null}</td>
                          <td>{this.state.patient4 ? this.state.patient4.description :null}</td>
                          <td>{this.state.patient5 ? this.state.patient5.description :null}</td>
                          <td>{this.state.patient6 ? this.state.patient6.description :null}</td>
                          <td>{this.state.patient7 ? this.state.patient7.description :null}</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
              <div style={{'width': '100%'}}>
               <ReactHighcharts config={config}></ReactHighcharts>
               </div>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableComponent);