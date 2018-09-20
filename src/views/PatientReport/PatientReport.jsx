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
import Button from '@material-ui/core/Button';
import axios from "axios";
import Workbook from 'react-excel-workbook'
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
const data1 = [
  {
    foo: '123',
    bar: '456',
    baz: '789'
  },
  {
    foo: 'abc',
    bar: 'dfg',
    baz: 'hij'
  },
  {
    foo: 'aaa',
    bar: 'bbb',
    baz: 'ccc'
  }
]


class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      group_a: {'1':'','2':'','3':'','4':'','5':'','6':'','7':''},
      group_b: {'1':'','2':'','3':'','4':'','5':'','6':'','7':''},
      group_c: {'1':'','2':'','3':'','4':'','5':'','6':'','7':''},
      group_d: {'1':'','2':'','3':'','4':'','5':'','6':'','7':''},
      patient1: [],
      patient2: [],
      patient3: [],
      patient4: [],
      patient5: [],
      patient6: [],
      patient7: []
    };
    this.getTwins();
  }
  getTwins() {
    let group_a={'1':'','2':'','3':'','4':'','5':'','6':'','7':''};
    let group_b={'1':'','2':'','3':'','4':'','5':'','6':'','7':''};
    let group_c={'1':'','2':'','3':'','4':'','5':'','6':'','7':''};
    let group_d={'1':'','2':'','3':'','4':'','5':'','6':'','7':''};
    var headers = {
      "x-access-key": "KOOY-9CV8-RO09-Q43W"
    };
    axios
      .get("https://twin-patient.herokuapp.com/api/users/getResult", {
        headers: headers
      })
      .then(response => {
        if(response)
       { 
          response.data.message.map(userData => {
         // console.log("userData",userData)
          switch (userData.panel_id) {
            case 1:
              switch(userData.patient_no){
                case 1:
                        group_a[1]=userData
                break;
                case 2:
                         group_a[2]=userData
                break;
                case 3:
                        group_a[3]=userData
                break;
                case 4:
                       group_a[4]=userData
                break;
                case 5:
                         group_a[5]=userData
                break;
                case 6:
                       group_a[6]=userData
                break;
                case 7:
                       group_a[7]=userData
                break;
              }
              // group_a[userData.patient_no]=new Array()
              // group_a[userData.patient_no].push(userData)
              break;
            case 2:
            switch(userData.patient_no){
              case 1:
                      group_b[1]=userData
              break;
              case 2:
                       group_b[2]=userData
              break;
              case 3:
                      group_b[3]=userData
              break;
              case 4:
                     group_b[4]=userData
              break;
              case 5:
                       group_b[5]=userData
              break;
              case 6:
                     group_b[6]=userData
              break;
              case 7:
                     group_b[7]=userData
              break;
            }
              break;
            case 3:
            switch(userData.patient_no){
              case 1:
                      group_c[1]=userData
              break;
              case 2:
                       group_c[2]=userData
              break;
              case 3:
                      group_c[3]=userData
              break;
              case 4:
                     group_c[4]=userData
              break;
              case 5:
                       group_c[5]=userData
              break;
              case 6:
                     group_c[6]=userData
              break;
              case 7:
                     group_c[7]=userData
              break;
            }
              break;
            case 4:

            switch(userData.patient_no){
              case 1:
                      group_d[1]=userData
              break;
              case 2:
                       group_d[2]=userData
              break;
              case 3:
                      group_d[3]=userData
              break;
              case 4:
                     group_d[4]=userData
              break;
              case 5:
                       group_d[5]=userData
              break;
              case 6:
                     group_d[6]=userData
              break;
              case 7:
                     group_d[7]=userData
              break;
            }
              break;
            // case 5:
            //   this.setState({ patient5: userData });
            //   break;
            // case 6:
            //   this.setState({ patient6: userData });
            //   break;
            // case 7:
            //   this.setState({ patient7: userData });
            //   break;
            default:
              break;
          }
          this.setState({ group_a,group_b,group_c,group_d });
         return userData
        });
      }
     } 
      )
      .catch(error => {
        console.log(error);
      });
  }
   printXLS(){
     let a= new Array();
     let b=new Array();
     let c=new Array();
     let d=new Array();
     //  b[0]  = new Array()
    //  c[0]  = new Array()
    //  d[0]  = new Array()
     const keys1 = Object.keys(this.state.group_a)
     const keys2 = Object.keys(this.state.group_b)
     const keys3 = Object.keys(this.state.group_c)
     const keys4 = Object.keys(this.state.group_d)
     for (const key1 of keys1) {
      a.push(this.state.group_a[key1])
    }
    for (const key2 of keys2) {
      b.push(this.state.group_b[key2])
    }
    for (const key3 of keys3) {
      c.push(this.state.group_c[key3])
    } for (const key4 of keys4) {
      d.push(this.state.group_d[key4])
    }   
     return( 
   <div className="row text-center">
      <Workbook filename="survey.xlsx" element={<Button color="secondary" variant="outlined" ><p>Downloard Patient Report</p></Button>}>
        <Workbook.Sheet data={a} name="Group A">
          <Workbook.Column label="id" value="id"/>
          <Workbook.Column label="description" value="description"/>
          <Workbook.Column label="panel_id" value="panel_id"/>
          <Workbook.Column label="patient_no" value="patient_no"/>
          <Workbook.Column label="priority" value="priority"/>
          <Workbook.Column label="treatment" value="treatment"/>
          <Workbook.Column label="twin" value="twin"/> 
        </Workbook.Sheet>
        <Workbook.Sheet data={b} name="Group B">
        <Workbook.Column label="id" value="id"/>
          <Workbook.Column label="description" value="description"/>
          <Workbook.Column label="panel_id" value="panel_id"/>
          <Workbook.Column label="patient_no" value="patient_no"/>
          <Workbook.Column label="priority" value="priority"/>
          <Workbook.Column label="treatment" value="treatment"/>
          <Workbook.Column label="twin" value="twin"/> 
        </Workbook.Sheet>
        <Workbook.Sheet data={c} name="Group C">
        <Workbook.Column label="id" value="id"/>
          <Workbook.Column label="description" value="description"/>
          <Workbook.Column label="panel_id" value="panel_id"/>
          <Workbook.Column label="patient_no" value="patient_no"/>
          <Workbook.Column label="priority" value="priority"/>
          <Workbook.Column label="treatment" value="treatment"/>
          <Workbook.Column label="twin" value="twin"/> 
        </Workbook.Sheet>
        <Workbook.Sheet data={d} name="Group D">
        <Workbook.Column label="id" value="id"/>
          <Workbook.Column label="description" value="description"/>
          <Workbook.Column label="panel_id" value="panel_id"/>
          <Workbook.Column label="patient_no" value="patient_no"/>
          <Workbook.Column label="priority" value="priority"/>
          <Workbook.Column label="treatment" value="treatment"/>
          <Workbook.Column label="twin" value="twin"/> 
        </Workbook.Sheet>
      </Workbook>
    </div>
    )
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
              {this.printXLS()}  
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
                          <td>{this.state.group_a[1] ? this.state.group_a[1].twin :null}</td>
                          <td>{this.state.group_a[2] ? this.state.group_a[2].twin:null}</td>
                          <td>{this.state.group_a[3] ? this.state.group_a[3].twin :null}</td>
                          <td>{this.state.group_a[4] ? this.state.group_a[4].twin:null}</td>
                          <td>{this.state.group_a[5] ? this.state.group_a[5].twin:null}</td>
                          <td>{this.state.group_a[6] ? this.state.group_a[6].twin :null}</td>
                          <td>{this.state.group_a[7] ? this.state.group_a[7].twin:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.group_a[1] ? this.state.group_a[1].treatment :null}</td>
                          <td>{this.state.group_a[2] ? this.state.group_a[2].treatment:null}</td>
                          <td>{this.state.group_a[3] ? this.state.group_a[3].treatment :null}</td>
                          <td>{this.state.group_a[4] ? this.state.group_a[4].treatment:null}</td>
                          <td>{this.state.group_a[5] ? this.state.group_a[5].treatment:null}</td>
                          <td>{this.state.group_a[6] ? this.state.group_a[6].treatment :null}</td>
                          <td>{this.state.group_a[7] ? this.state.group_a[7].treatment:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.group_a[1] ? this.state.group_a[1].priority :null}</td>
                          <td>{this.state.group_a[2] ? this.state.group_a[2].priority:null}</td>
                          <td>{this.state.group_a[3] ? this.state.group_a[3].priority :null}</td>
                          <td>{this.state.group_a[4] ? this.state.group_a[4].priority:null}</td>
                          <td>{this.state.group_a[5] ? this.state.group_a[5].priority:null}</td>
                          <td>{this.state.group_a[6] ? this.state.group_a[6].priority :null}</td>
                          <td>{this.state.group_a[7] ? this.state.group_a[7].priority:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.group_a[1] ? this.state.group_a[1].description :null}</td>
                          <td>{this.state.group_a[2] ? this.state.group_a[2].description:null}</td>
                          <td>{this.state.group_a[3] ? this.state.group_a[3].description :null}</td>
                          <td>{this.state.group_a[4] ? this.state.group_a[4].description:null}</td>
                          <td>{this.state.group_a[5] ? this.state.group_a[5].description:null}</td>
                          <td>{this.state.group_a[6] ? this.state.group_a[6].description :null}</td>
                          <td>{this.state.group_a[7] ? this.state.group_a[7].description:null}</td>
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
                          <td>{this.state.group_b[1] ? this.state.group_b[1].twin :null}</td>
                          <td>{this.state.group_b[2] ? this.state.group_b[2].twin:null}</td>
                          <td>{this.state.group_b[3] ? this.state.group_b[3].twin :null}</td>
                          <td>{this.state.group_b[4] ? this.state.group_b[4].twin:null}</td>
                          <td>{this.state.group_b[5] ? this.state.group_b[5].twin:null}</td>
                          <td>{this.state.group_b[6] ? this.state.group_b[6].twin :null}</td>
                          <td>{this.state.group_b[7] ? this.state.group_b[7].twin:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.group_b[1] ? this.state.group_b[1].treatment :null}</td>
                          <td>{this.state.group_b[2] ? this.state.group_b[2].treatment:null}</td>
                          <td>{this.state.group_b[3] ? this.state.group_b[3].treatment :null}</td>
                          <td>{this.state.group_b[4] ? this.state.group_b[4].treatment:null}</td>
                          <td>{this.state.group_b[5] ? this.state.group_b[5].treatment:null}</td>
                          <td>{this.state.group_b[6] ? this.state.group_b[6].treatment :null}</td>
                          <td>{this.state.group_b[7] ? this.state.group_b[7].treatment:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.group_b[1] ? this.state.group_b[1].priority :null}</td>
                          <td>{this.state.group_b[2] ? this.state.group_b[2].priority:null}</td>
                          <td>{this.state.group_b[3] ? this.state.group_b[3].priority :null}</td>
                          <td>{this.state.group_b[4] ? this.state.group_b[4].priority:null}</td>
                          <td>{this.state.group_b[5] ? this.state.group_b[5].priority:null}</td>
                          <td>{this.state.group_b[6] ? this.state.group_b[6].priority :null}</td>
                          <td>{this.state.group_b[7] ? this.state.group_b[7].priority:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.group_b[1] ? this.state.group_b[1].description :null}</td>
                          <td>{this.state.group_b[2] ? this.state.group_b[2].description:null}</td>
                          <td>{this.state.group_b[3] ? this.state.group_b[3].description :null}</td>
                          <td>{this.state.group_b[4] ? this.state.group_b[4].description:null}</td>
                          <td>{this.state.group_b[5] ? this.state.group_b[5].description:null}</td>
                          <td>{this.state.group_b[6] ? this.state.group_b[6].description :null}</td>
                          <td>{this.state.group_b[7] ? this.state.group_b[7].description:null}</td>
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
                          <td>{this.state.group_c[1] ? this.state.group_c[1].twin :null}</td>
                          <td>{this.state.group_c[2] ? this.state.group_c[2].twin:null}</td>
                          <td>{this.state.group_c[3] ? this.state.group_c[3].twin :null}</td>
                          <td>{this.state.group_c[4] ? this.state.group_c[4].twin:null}</td>
                          <td>{this.state.group_c[5] ? this.state.group_c[5].twin:null}</td>
                          <td>{this.state.group_c[6] ? this.state.group_c[6].twin :null}</td>
                          <td>{this.state.group_c[7] ? this.state.group_c[7].twin:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.group_c[1] ? this.state.group_c[1].treatment :null}</td>
                          <td>{this.state.group_c[2] ? this.state.group_c[2].treatment:null}</td>
                          <td>{this.state.group_c[3] ? this.state.group_c[3].treatment :null}</td>
                          <td>{this.state.group_c[4] ? this.state.group_c[4].treatment:null}</td>
                          <td>{this.state.group_c[5] ? this.state.group_c[5].treatment:null}</td>
                          <td>{this.state.group_c[6] ? this.state.group_c[6].treatment :null}</td>
                          <td>{this.state.group_c[7] ? this.state.group_c[7].treatment:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.group_c[1] ? this.state.group_c[1].priority :null}</td>
                          <td>{this.state.group_c[2] ? this.state.group_c[2].priority:null}</td>
                          <td>{this.state.group_c[3] ? this.state.group_c[3].priority :null}</td>
                          <td>{this.state.group_c[4] ? this.state.group_c[4].priority:null}</td>
                          <td>{this.state.group_c[5] ? this.state.group_c[5].priority:null}</td>
                          <td>{this.state.group_c[6] ? this.state.group_c[6].priority :null}</td>
                          <td>{this.state.group_c[7] ? this.state.group_c[7].priority:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.group_c[1] ? this.state.group_c[1].description :null}</td>
                          <td>{this.state.group_c[2] ? this.state.group_c[2].description:null}</td>
                          <td>{this.state.group_c[3] ? this.state.group_c[3].description :null}</td>
                          <td>{this.state.group_c[4] ? this.state.group_c[4].description:null}</td>
                          <td>{this.state.group_c[5] ? this.state.group_c[5].description:null}</td>
                          <td>{this.state.group_c[6] ? this.state.group_c[6].description :null}</td>
                          <td>{this.state.group_c[7] ? this.state.group_c[7].description:null}</td>
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
                          <td>{this.state.group_d[1] ? this.state.group_d[1].twin :null}</td>
                          <td>{this.state.group_d[2] ? this.state.group_d[2].twin:null}</td>
                          <td>{this.state.group_d[3] ? this.state.group_d[3].twin :null}</td>
                          <td>{this.state.group_d[4] ? this.state.group_d[4].twin:null}</td>
                          <td>{this.state.group_d[5] ? this.state.group_d[5].twin:null}</td>
                          <td>{this.state.group_d[6] ? this.state.group_d[6].twin :null}</td>
                          <td>{this.state.group_d[7] ? this.state.group_d[7].twin:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Treatment</th>
                          <td>{this.state.group_d[1] ? this.state.group_d[1].treatment :null}</td>
                          <td>{this.state.group_d[2] ? this.state.group_d[2].treatment:null}</td>
                          <td>{this.state.group_d[3] ? this.state.group_d[3].treatment :null}</td>
                          <td>{this.state.group_d[4] ? this.state.group_d[4].treatment:null}</td>
                          <td>{this.state.group_d[5] ? this.state.group_d[5].treatment:null}</td>
                          <td>{this.state.group_d[6] ? this.state.group_d[6].treatment :null}</td>
                          <td>{this.state.group_d[7] ? this.state.group_d[7].treatment:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Priorities</th>
                          <td>{this.state.group_d[1] ? this.state.group_d[1].priority :null}</td>
                          <td>{this.state.group_d[2] ? this.state.group_d[2].priority:null}</td>
                          <td>{this.state.group_d[3] ? this.state.group_d[3].priority :null}</td>
                          <td>{this.state.group_d[4] ? this.state.group_d[4].priority:null}</td>
                          <td>{this.state.group_d[5] ? this.state.group_d[5].priority:null}</td>
                          <td>{this.state.group_d[6] ? this.state.group_d[6].priority :null}</td>
                          <td>{this.state.group_d[7] ? this.state.group_d[7].priority:null}</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Description</th>
                          <td>{this.state.group_d[1] ? this.state.group_d[1].description :null}</td>
                          <td>{this.state.group_d[2] ? this.state.group_d[2].description:null}</td>
                          <td>{this.state.group_d[3] ? this.state.group_d[3].description :null}</td>
                          <td>{this.state.group_d[4] ? this.state.group_d[4].description:null}</td>
                          <td>{this.state.group_d[5] ? this.state.group_d[5].description:null}</td>
                          <td>{this.state.group_d[6] ? this.state.group_d[6].description :null}</td>
                          <td>{this.state.group_d[7] ? this.state.group_d[7].description:null}</td>
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
              {/* <CardFooter>
              <div style={{'width': '100%'}}>
               <ReactHighcharts config={config}></ReactHighcharts>
               </div>
              </CardFooter> */}
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