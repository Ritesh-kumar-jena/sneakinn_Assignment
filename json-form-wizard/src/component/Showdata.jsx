import React from "react";

function Showdata({ formData }) {
  return (
    <div>
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(formData).map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((v, i) => (
                      <li key={i}>{JSON.stringify(v)}</li>
                    ))}
                  </ul>
                ) : value?.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Showdata;
