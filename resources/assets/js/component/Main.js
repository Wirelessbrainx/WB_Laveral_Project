import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import AddProduct from './AddProduct';

/* An example React component */
class Main extends Component {
    
    constructor(){

        super();
        this.state = {
            products: [],
            currentProduct: null
        }

        this.handleAddProduct = this.handleAddProduct.bind(this);
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
                <div className='product' onClick={ ()=>this.handleClick(product) }
                    key={product.id} >
                        { product.title }
                </div>
            );
        })
    }

    handleClick(product) {
        this.setState({currentProduct:product});
    }

    handleAddProduct(product) {
     
        product.price = Number(product.price);
        /*Fetch API for post request */
        fetch( 'api/products/', {
            method:'post',
            /* headers are important*/
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
           
            this.setState((prevState)=> ({
                products: prevState.products.concat(data),
                currentProduct : data
            }))
        })
     //update the state of products and currentProduct
      }  

    render() {
        return (
            <React.Fragment>
                <div className='React-nav'>
                    <AddProduct onAdd= { this.handleAddProduct } />
                </div>
                <div className='React-content'>
                    <h3>All Products</h3>
                    <div className='wrapper'>
                        { this.renderProducts() }
                    </div>
                </div>
                <div className='aside-1'>
                <Product product = { this.state.currentProduct } />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
