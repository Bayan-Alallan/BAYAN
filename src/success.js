import React, { useState } from 'react';
import './Success.css'; // Import the CSS file

const Success = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.restful-api.dev/objects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderTable = () => {
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Data</th>
            {/* Add more columns as needed based on the structure of your data */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{JSON.stringify(item.data)}</td>
              {/* Add more cells as needed based on the structure of your data */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="success-container">
      <h2>Login Successful..!</h2>
      <button onClick={fetchData} className="fetch-button">Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {data && (
        <div>
          <h3>Data from API:</h3>
          {renderTable()}
        </div>
      )}
    </div>
  );
};

export default Success;




