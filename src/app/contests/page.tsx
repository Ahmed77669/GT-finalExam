import React from 'react';

const Contests = () => {
  // Create an array to hold the data for rows
  const rows = Array.from({ length: 13 }, (_, i) => i + 1); // Generates numbers from 1 to 13

  return (
    <section>
      <table style={{border:"10px solid #006565" , borderCollapse: 'collapse',}}  cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <td>Row {row}, Col 1</td>
              <td>Row {row}, Col 2</td>
              <td>Row {row}, Col 3</td>
              <td>Row {row}, Col 4</td>
              <td>Row {row}, Col 5</td>
              <td>Row {row}, Col 6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Contests;