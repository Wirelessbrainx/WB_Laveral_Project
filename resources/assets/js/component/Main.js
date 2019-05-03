import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

/* An example React component */
class Main extends Component {
    
    constructor(){

        super();
        this.state = {
            products: [],
            currentProduct: null
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(responce => {
            return responce.json();
        })
        .then(products => {
            this.setState({ products });
        });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <div class='product' onClick={ ()=>this.handleClick(product) }
                    key={product.id} >
                        { product.title }
                </div>
            );
        })
    }

    handleClick(product) {
        this.setState({currentProduct:product});
    }

    render() {
        return (
            <div>
            <div>
                <h3>All Products</h3>
                <div class='wrapper'>
                
                    { this.renderProducts() }
                
                </div>
            </div>
            <div>
                <Product product = { this.state.currentProduct } />
            </div>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
