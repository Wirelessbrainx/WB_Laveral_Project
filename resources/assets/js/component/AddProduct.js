import React, { Component } from 'react';
import '../../../sass/app.scss';


class AddProduct extends Component {

    constructor(props){
        super(props);
            this.state = {
                newProduct: {
                    title: '',
                    description: '',
                    price: 0,
                    availibility: 0
                }
            }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(key, e){
        let state = Object.assign({}, this.state.newProduct);

        state[key] = e.target.value;
        this.setState({newProduct : state});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.newProduct);
    }

    render() {
        
        return(
            <React.Fragment>
                <div>
                    <h2>Add new product</h2>

                    <form onSubmit={ this.handleSubmit }>
                        <label>Title:</label>
                        <input className='form-control' type='text' onChange={(e)=>this.handleInput('title', e)}/>
                        <label>Description:</label>
                        <input className='form-control' type='text' onChange={(e)=>this.handleInput('description', e)}/>
                        <label>Price:</label>
                        <input className='form-control' type='number' onChange={(e)=>this.handleInput('price', e)} />
                        <input className='form-control' type='submit' value="Submit" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddProduct;