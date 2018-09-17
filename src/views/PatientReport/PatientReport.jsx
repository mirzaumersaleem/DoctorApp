import React from "react";
import ReactDOM from "react-dom"; // Example Data
// @material-ui/core components
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// Example Data
var tableData = {
  columns: ["Service", "Cost/Unit", "Unit", "Units Requested"],
  rows: [
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "Veterinary Assitance",
      "Cost/Unit": 50,
      Unit: "1 Hour",
      "Units Requested": 12
    },
    {
      Service: "foo",
      Unit: null,
      "Cost/Unit": undefined,
      "Units Requested": 42
    }
  ]
};

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

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.data = tableData;
  }
  render() {
    const { classes } = this.props;
    // Data
    var dataColumns = this.data.columns;
    var dataRows = this.data.rows;
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
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
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
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
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
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>A2</td>
                          <td>A3</td>
                          <td>A4</td>
                          <td>A3</td>
                          <td>A4</td>
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