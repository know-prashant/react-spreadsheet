import React from 'react';
import Table from './components/Table';

const App = () =>
  (<div style={{ width: 'max-content' }}>
    <Table x={4} y={4} id={"1"} saveToLocalStorage={true}/>
  </div>);

export default App;
