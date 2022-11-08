import React, {Component} from 'react';
import {NavBar} from './NavBar';
import {MainContent} from './CustomerList'
import ShoppingCart from './ShoppingCart'
export class App extends Component {
    render (){
         return (
            <React.Fragment>
            <NavBar />,
            <ShoppingCart/>
            </React.Fragment>
         ); 
         }

}