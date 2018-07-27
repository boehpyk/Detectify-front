import React, { Component } from 'react';
import {loadTablesByString} from '../AC/search';
import {connect} from 'react-redux';

class SearchInput extends Component {

    state = {
        searchString: ''
    }

    render() {
        return (
            <div className='Search'>
                <h2>Search pages by their name</h2>
                <input type='text' onChange={ this.handleInputChange } placeholder="begin to enter name of the page" />
            </div>
        );
    }

    handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
                [name]: value
            }
        );
        if (value.length > 3) {
            this.props.loadTablesByString(value);
        }
    }

}

// export default Contacts;
export default connect(null, { loadTablesByString })(SearchInput);
