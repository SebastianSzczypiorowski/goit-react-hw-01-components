import css from './transactions.module.css'
import PropTypes from 'prop-types';

export const TransactionBody = ({transactions}) => {
    return (
        <tbody>
            {transactions.map(transaction => {
                return (
                    <tr key={transaction.id} className={css.row}>
                     <td>{transaction.type}</td>
                     <td>{transaction.amount}</td>
                     <td>{transaction.currency}</td>
                    </tr>
                )
            })}
      
       </tbody>
    )
}

TransactionBody.propTypes = {
    transaction: PropTypes.array,
  };