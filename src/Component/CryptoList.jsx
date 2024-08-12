import React from "react";

const CryptoList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Token</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Bit Coin</td>
            <td>$56,000</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>ETH</td>
            <td>$2,500</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Sol</td>
            <td>$160</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
