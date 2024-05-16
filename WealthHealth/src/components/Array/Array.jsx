import React from 'react';

class Array extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: null,
      sortOrder: 'asc'
    };
  }

  sortData = (key) => {
    let sortOrder = 'asc';
    if (this.state.sortBy === key && this.state.sortOrder === 'asc') {
      sortOrder = 'desc';
    }
    const sortedData = this.props.data.sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    this.setState({
      sortBy: key,
      sortOrder: sortOrder,
    });
  };

  render() {
    const { data } = this.props;
    const { sortBy, sortOrder } = this.state;

    if (!data || data.length === 0) {
      return <p>Aucune donnée à afficher</p>;
    }

    const headers = Object.keys(data[0]);

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => this.sortData(header)}>
                {header} {sortBy === header && (
                  sortOrder === 'asc' ? '▲' : '▼'
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Array;