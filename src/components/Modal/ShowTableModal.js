import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadTableIntoModal } from '../../AC/tables';
import {connect} from 'react-redux';
import Loader from '../Utils/Loader';
import ReactHtmlParser from 'react-html-parser';

class ShowTableModal extends Component {

    static propTypes = {
        tableId: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.props.loadTableIntoModal(this.props.tableId);
    }


    render() {

        return (
            <div>{ this.showTable() }</div>
        );
    }


    showTable = () => {
        const fetching  = this.props.tables.fetching;
        const table = this.props.tables.tables[this.props.tableId];

        if (fetching || table === undefined) {
            return (
                <div className="ModalContent-content">
                    <Loader text="Loading" />
                </div>
            );

        }
        else {
            return (
                <div>
                    <div className="ModalContent-content Table-Modal">
                        {(table.pageTitle.length > 0) ? ReactHtmlParser(`<h1>${table.pageTitle}</h1>`) : ''}
                        {(table.textBeforeTable.length > 0) ? ReactHtmlParser(`<p>${table.textBeforeTable}</p>`) : ''}
                        { ReactHtmlParser(this.renderTable(table)) }
                        {(table.textAfterTable.length > 0) ? ReactHtmlParser(`<p>${table.textAfterTable}</p>`) : ''}
                    </div>
                </div>
            );
        }
    }

    renderTable = (table) => {

        const arrToRender = (table.tableOrientation === 'VERTICAL') ? this.transpose(table.relation) : table.relation;

        const res = arrToRender.reduce((str, current, index) => {
            return str += (table.hasHeader && index == 0) ? `<tr><th>${current.join('</th><th>')}</th></tr>` : `<tr><td>${current.join('</td><td>')}</td></tr>`;
        }, '<table><tbody>');
        return res + '</tbody></table>';
    }

    renderVerticalTable = (table) => {
        const relationArr = table.relation;
        const transposedArr = this.transpose(relationArr);

        console.log(transposedArr);
    }

    transpose = (arr) => {
        return arr[0].map(function (_, iCol) {
            return arr.map(function (row) {
                return row[iCol];
            })
        });
    }

}

export default connect((state) => ({
    tables: state.tables
}), { loadTableIntoModal })(ShowTableModal);
