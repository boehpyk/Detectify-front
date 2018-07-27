import React, { Component } from 'react';
import {openModal} from '../AC/modals'
import {connect} from 'react-redux';
import Loader from "./Utils/Loader";
import {SHOW_TABLE} from "../constants/modals";

class TablesList extends Component {

    render() {
        return (
            <div className="TablesList">
                <div className="content">
                    { this.showTablesList() }
                </div>
            </div>
        );
    }

    showTablesList = () => {
        const fetching = this.props.fetching;
        const articles = this.props.articles || [];
        if (fetching) {
            return <Loader text="Loading articles" />
        }
        else {
            return (
                <ul>
                    {
                        articles.map((item) => {
                            return <li key={item.id} onClick={ this.showModal } value={ item.id }>{item.pageTitle}</li>
                        })
                    }
                </ul>
            );
        }
    }

    showModal = (e) => {
        this.props.openModal({
            id: e.currentTarget.value,
            type: SHOW_TABLE
        });
    }



}

// export default TablesList;
export default connect((state) => ({
    articles: state.search.tableNames,
    fetching: state.search.fetching
}), { openModal })(TablesList);
