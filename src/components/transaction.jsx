const transactionsHistory = ({transactions}) => {
    return (
        <table className="transaction-history">
         <thead>
          <tr>
           <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
          </tr>
         </thead>

         <tbody>
          <tr>
           <td>{transactions[0].type}</td>
           <td>{transactions[0].amount}</td>
           <td>{transactions[0].currency}</td>
          </tr>
          <tr>
           <td>{transactions[1].type}</td>
           <td>{transactions[1].amount}</td>
           <td>{transactions[1].currency}</td>
          </tr>
          <tr>
           <td>{transactions[2].type}</td>
           <td>{transactions[2].amount}</td>
           <td>{transactions[2].currency}</td>
          </tr>
          <tr>
           <td>{transactions[3].type}</td>
           <td>{transactions[3].amount}</td>
           <td>{transactions[3].currency}</td>
          </tr>
          <tr>
           <td>{transactions[4].type}</td>
           <td>{transactions[4].amount}</td>
           <td>{transactions[4].currency}</td>
          </tr>
         </tbody>
        </table>
    )
}

export default transactionsHistory;