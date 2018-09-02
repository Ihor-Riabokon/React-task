import React from 'react';
import { DataTable } from './components/DataTable';

import './css/style.css';

const data = {
  columns: [
    { type: 'phone', sorting: true, filtering: true },
    { type: 'memory', sorting: true, filtering: false },
    { type: 'producent', sorting: false, filtering: true },
  ],
  items: [
    { phone: 'IPhone', memory: 3, producent: 'USA' },
    { phone: 'Samsung', memory: 2, producent: 'Korea' },
    { phone: 'LG', memory: 3, producent: 'Korea' },
    { phone: 'Xiaomi', memory: 4, producent: 'China' },
  ],
};


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <DataTable data={data} />
      </div>
    );
  }
}

export const App = AppComponent;
