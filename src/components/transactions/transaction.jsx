import { TransactionBody } from './transactionBody';
import { TransactionHead } from './transactionHead';
import css from './transactions.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <TransactionHead />
      <TransactionBody transactions={transactions} />
    </table>
  );
};


TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};