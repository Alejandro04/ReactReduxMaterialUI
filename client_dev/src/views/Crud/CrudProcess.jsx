import React, { Component } from 'react';
import axios from 'axios'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  buttonAdd:{
    float: 'right'
  }
};

class CrudProcess extends Component{
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentWillMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get('http://localhost:3001/api/products')
    .then(response => {
        this.setState({products: response.data}, () => {
            console.log(this.state.products)
        })
    })
    .catch (err => console.log(err))
  }

  render(){
    const productItems = this.state.products.map((prod, i) => {
        return(
            [
                prod.name, prod.description, prod.sales_price, prod.stock
            ]
        )
    })
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button variant="outlined" href="/crudnew" className={this.props.classes.buttonAdd} color="primary">
            Nuevo Producto
          </Button>
          </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={this.props.classes.cardTitleWhite}>Lista de Productos</h4>
              <p className={this.props.classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Nombre", "Descripcion", "Precio de Venta", "Stock"]}
                tableData={productItems}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles)(CrudProcess)

/*

function CrudProcess(props) {
  const { classes } = props;
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Button variant="outlined" href="/crudnew" className={classes.buttonAdd} color="primary">
          Nuevo Producto
        </Button>
        </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Lista de Productos</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nombre", "Descripcion", "Precio de Venta", "Stock"]}
              tableData={[
                ["Producto 1", "Ejecuta x tarea", "100 USD", "25"],
                ["Producto 2", "Ejecuta x tarea", "100 USD", "30"],
                ["Producto 3", "Ejecuta x tarea", "100 USD", "100"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

*/

//export default withStyles(styles)(CrudProcess);
