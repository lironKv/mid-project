import React, {Component} from "react";
export default class Product extends Component  {
    state = {
        product:this.props.product,
        onIncrease:this.props.onIncrease,
        onDecrease:this.props.onDecrease,
        onDelete:this.props.onDelete
    };
    render() {
        return (
        <div className="col-lg-6">  
        <div className="card m-2">
        <div className="card-body"> 
            <div className="text-muted">
                #{this.state.product.id}
                <span className="pull-right hand-hover"  onClick={()=>{this.state.onDelete(this.state.product)}}> 
                <i className="fa fa-times"></i>
                </span>
                </div>

            <h5 className="pt-2 border-top"> {this.state.product.productName}</h5>
            <div>{this.state.product.price}</div>
            </div>


                 {/*fooer from here*/}
             <div className="card-footer d-inline">
                <div className="float-left">
                  <span className="badge badge-primary text-dark">{this.state.product.quantity}</span>
                  <div className="btn-group">
                    <button className="btn btn-outline-success"
                    onClick={()=>{this.props.onIncrease(this.state.product, 10)}}
                    >+</button>
                    <button className="btn btn-outline-success"
                    onClick={()=> {this.props.onDecrease(this.state.product, 0)}}
                    >-</button>
                  </div>
                </div>
                <div className="float-end float-top">{this.props.children}</div> 
             </div>
        </div>
        </div>
       
      
        )
    }
}
