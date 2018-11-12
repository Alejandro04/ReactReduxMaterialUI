import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import axios from 'axios';

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
  },
};


class CrudNew extends Component{

 constructor(props){
     super(props)
 }

AddProduct(newProduct){
    axios.request({
        method: 'post',
        url: 'http://localhost:3000/api/products',
        data: newProduct
    }).then(response => {
        //this.props.history.push('/')
        console.log(response)
    }).catch(err => console.log(err))
}

onSubmit(e){
    const newProduct = {
        name: this.refs.name.value,
        description: this.refs.description.value,
        sales_price: this.refs.sales_price.value,
        stock: this.refs.stock.value,
    }

   // this.AddProduct(newProduct)
   console.log(newProduct)
    e.preventDefault()
}

 render(){
  return (
    <div>
        <form onSubmit={this.onSubmit.bind(this)}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary" className={this.props.classes.cardsItem}>
                    <h4 className={this.props.cardTitleWhite}>Agregar Producto</h4>
                    </CardHeader>
                    <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                        <input type="text" 
                            className="MuiInputBase-input-239"
                            placeholder="Nombre"
                            name="name"
                            ref="name"
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                        <input type="text" 
                            className="MuiInputBase-input-239"
                            placeholder="Descripcion"
                            name="description"
                            ref="description"
                        />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                        <input type="text" 
                            className="MuiInputBase-input-239"
                            placeholder="Precio de Venta"
                            name="sales_price"
                            ref="sales_price"
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                        <input type="text" 
                            className="MuiInputBase-input-239"
                            placeholder="Stock"
                            name="stock"
                            ref="stock"
                        />
                        </GridItem>
                    </GridContainer>
                    </CardBody>
                    <CardFooter>
                    <Button color="primary" type="submit">Guardar Producto</Button>
                    </CardFooter>
                </Card>
                </GridItem>
            </GridContainer>
        </form>
    </div>
  );
 }
}

export default withStyles({
    cardsItem: {
        padding: '10px !important',
    }
})(CrudNew)
