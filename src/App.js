import React from 'react';

function App() {
  const data = [
    { id: 1, name: 'John Doe', age: 28, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 34, country: 'Canada' },
    { id: 3, name: 'Michael Johnson', age: 41, country: 'UK' },
    { id: 4, name: 'Emily Davis', age: 25, country: 'Australia' },
  ];

  return (
    <div>
      <h1>Data Overview</h1>
      <p>This is a simple React app displaying some basic data in a table format.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
