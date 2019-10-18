import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    
//nedan: component level state. Till skillnad från app level state som görs när man ska dela en förändring 
// med flera components
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState( {title: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]:e.target.value});


    render() {
        return (
           <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
               <input 
               type="text" 
               style={{ flex: '10', padding: '5px' }}
               name="title"
               placeholder="Add Todo ..."
               value={this.state.title}
               onChange={this.onChange}
               />
               <input 
               type="submit"
               value="Submit"
               className="btn"
               style={{ flex: '1'}}
               />
           </form>
        )
    }
}

// PropTypes . Validering av korrekt datatyp
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo
