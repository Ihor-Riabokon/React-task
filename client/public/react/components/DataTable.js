import React, { Component } from 'react';
import { Table, Input } from 'semantic-ui-react';
import { sortBy, searchBy } from '../utils/utils';


class DataTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: props.data.items,
      column: null,
      sortOrder: null,
    }
  }
  onSort = clickedColumn => {
    const { column, filteredList, sortOrder } = this.state;
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        filteredList: sortBy(filteredList, clickedColumn),
        sortOrder: 'ascending',
      })
      return false;
    }
    this.setState({
      filteredList: filteredList.reverse(),
      sortOrder: sortOrder === 'ascending' ? 'descending' : 'ascending',
    })
  }
  onSearch = (e, field) => {
    const { items } = this.props.data;
    this.setState({
      filteredList: searchBy(items, e.target.value, field),
    });
  }
  handleSortedState = data => {
    const { column, sortOrder } = this.state;
    const { type } = data;
    return type === column ? sortOrder : null;
  }
  generateHeaders = () => {
    const { columns } = this.props.data;
    return (
      <Table.Row>
        {columns.map((colData, i) =>
          <Table.HeaderCell
            sorted={this.handleSortedState(colData)}
            key={`header-${i}`}
            onClick={() => colData.sorting && this.onSort(colData.type)}
            className={!colData.sorting ? 'not-sortable' : ''}
            style={{ position: 'relative' }}
          >
            {colData.filtering ? <div className="th-content">
              <div className="th-item name-field">{colData.type}</div>
              <div className="th-item input-field">
                <Input 
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.onSearch(e, colData.type)}
                  placeholder={`Search by ${colData.type}`}
                />
              </div>
            </div> : colData.type}
          </Table.HeaderCell>
        )}
      </Table.Row>
    )
  };

  generateRows = () => {
    const { filteredList } = this.state;
    return filteredList.map(({ phone, memory, producent }) => (
      <Table.Row key={phone}>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>{memory}</Table.Cell>
        <Table.Cell>{producent}</Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    return (
      <Table fixed sortable celled>
        <Table.Header>{this.generateHeaders()}</Table.Header>
        <Table.Body>{this.generateRows()}</Table.Body>
      </Table>
    );
  }
}


export const DataTable = DataTableComponent;
