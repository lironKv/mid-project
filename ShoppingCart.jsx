import React, {Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component{
    state={
        products:[
            {id:1, productName:"Dates",weight:1 + "kg", price:49.99 + "₪", quantity:0},
            {id:2, productName:"Dates",weight:5 + "kg", price:199.99 + "₪", quantity:0},
            {id:3, productName:"Dates",weight:20 + "kg", price:699.99 + "₪", quantity:0},
        ],
    };
    render() {
      return <div className="container-fluid"> 
        <h4>ShoppingCart</h4>
        <div className="row"> 
            {this.state.products.map((prod)=>{
                return (
                <Product 
                key={prod.id} 
                product={prod}
                onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease}
                onDelete={this.handleDelete}
                >
                    <button className="btn btn-primary">Buy</button> 
                </Product>
                )
            })}
        </div>
      </div>;
    }
    
// render ends here
handleIncrease = (product, maxVal) => {
//   console.log("OnIncrease", product);
  let allProducts= [...this.state.products];
  let index = allProducts.indexOf(product);
  if (allProducts[index].quantity <maxVal) {
  allProducts[index].quantity ++
 this.setState({products:allProducts});
  }
}

handleDecrease = (product, minVal) => {
//  console.log("On Decrease", product)
let allProducts= [...this.state.products];
let index = allProducts.indexOf(product);
if (allProducts[index].quantity > minVal){
allProducts[index].quantity --
this.setState({products:allProducts});
  }
 }
 
handleDelete = (product) => {
    let allProducts= [...this.state.products];
let index = allProducts.indexOf(product);
if(window.confirm("Are you sure you would liek to delete this product?")){


allProducts.splice(index,1);
this.setState({products:allProducts});
} 
}
}
