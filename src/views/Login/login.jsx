import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import SweetAlert from "sweetalert2-react";

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

class login extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      pass:"MyTwin2018",
      show:false,
      title:'',
      text:''
    };
  }
  handleEdit=()=>{
    console.log(this.props.history)
    const {history}=this.props;
    history.push("/mytwin");
  }
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <form>
            <Card>
              <SweetAlert
                show={this.state.show}
                title={this.state.title}
                text={this.state.text}
                onConfirm={() => this.setState({ show: false })}
              />
              <CardHeader color="primary">
                <Button onClick={this.handleEdit}>Edit</Button>
-              </CardHeader>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}


export default withStyles(styles)(login);