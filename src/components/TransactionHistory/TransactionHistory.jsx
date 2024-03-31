import css from "./TransactionHistory.module.css"

export default function TransactionHistory ({ items })  {
    return (
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tdbody}>
          {items.map(({ id, type, amount, currency }, index) => (
                 <tr key={id} className={index % 2 === 0 ? css.evenRow : css.oddRow}>
              <td className={css.th}>{type}</td>
              <td className={css.th}>{amount}</td>
              <td className={css.th}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
