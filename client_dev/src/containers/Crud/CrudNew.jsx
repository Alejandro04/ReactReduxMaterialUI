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

// store
import { connect } from 'react-redux';
import getAllProducts from '../../initializers/actions'

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

     this.state = {
         quantityProducts: []
     }
}

componentDidMount(){
    this.props.getAllProducts()
    if (this.props.products.products[0] == undefined){
        console.log('vacio')
    }else{
        //this.props.products.products.length-1 = indice // muestra la cantidad de registros del estado mas reciente
        this.setState({quantityProducts: this.props.products.products[this.props.products.products.length-1].length}, () => {})
    }
}

AddProduct(data){
    axios.request({
        method: 'post',
        url: 'http://localhost:3001/api/products',
        data: data
    }).then(response => {
        this.props.history.push('/crud')
    }).catch(err => console.log(err))
}

onSubmit(e){
    e.preventDefault()

    const data = {
        name: this.refs.name.value,
        description: this.refs.description.value,
        sales_price: this.refs.sales_price.value,
        stock: this.refs.stock.value,
    }

    this.AddProduct(data)
}

 render(){
  return (
    <div>
        <form onSubmit={this.onSubmit.bind(this)}>
            <GridContainer>
                <p>CANTIDAD DE REGISTROS = {this.state.quantityProducts}</p>
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

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

const mapDispatchToProps = {
    getAllProducts
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles({
    cardsItem: {
        padding: '10px !important',
    }
})(CrudNew));
