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

// store
import { connect } from 'react-redux'
import getAllProducts from '../../initializers/actions'

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
   this.props.getAllProducts()

   if (this.props.products.products[0] == undefined){
    console.log('vacio process')
    }else{
        //this.props.products.products.length-1 = indice // muestra el estado mas reciente
        this.setState({products: this.props.products.products[this.props.products.products.length-1]}, () => {})
    }
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

const mapStateToProps = (state) => {
  return {
      products: state
  }
}

const mapDispatchToProps = {
  getAllProducts
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CrudProcess));