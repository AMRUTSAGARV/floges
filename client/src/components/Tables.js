import React from "react";
import "../App.css";
const Tables = () => {
  return (
    <div>
      <table>
        <thead>
          Products
          <tr>
            <th>Product_Id</th>
            <th>Product_Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>Product 1</td>
          </tr>
          <tr>
            <td>2 </td>
            <td>Product 2</td>
          </tr>
          <tr>
            <td>3 </td>
            <td>Product 3</td>
          </tr>
          <tr>
            <td>4 </td>
            <td>Product 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
