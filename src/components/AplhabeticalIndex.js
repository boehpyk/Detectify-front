import React, { Component } from 'react';
import {loadTablesByLetter} from '../AC/search';
import {connect} from 'react-redux';

class AplhabeticalIndex extends Component {


    render() {
        return (
            <div className='AlphabeticalIndex'>
                <h2>Search pages by their name's first letter</h2>
                { this.showAlphabet() }
            </div>
        );
    }

    showAlphabet = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        return (
            <ul>
                {
                    alphabet.split('').map((item) => {
                        return <li key={item} onClick={ this.loadTables } value={ item } data-id={ item }>{item}</li>
                    })
                }
                {
                    numbers.split('').map((item) => {
                        return <li key={item} onClick={ this.loadTables } value={ item } data-id={ item }>{item}</li>
                    })

                }
                <li key="other" onClick={ this.loadTables } value="other" data-id="other">#</li>
            </ul>
        );
    }

    loadTables = (e) => {
        this.props.loadTablesByLetter(e.currentTarget.getAttribute('data-id'));
    }


}

// export default Contacts;
export default connect(null, { loadTablesByLetter })(AplhabeticalIndex);
