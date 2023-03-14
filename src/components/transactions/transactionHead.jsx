import css from './transactions.module.css'


export const TransactionHead = () => {
    return (
         <thead className={css.table_head}>
          <tr>
           <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
          </tr>
        </thead>
    )
}