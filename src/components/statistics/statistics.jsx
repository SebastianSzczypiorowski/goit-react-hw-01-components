import css from './statistics.module.css'
import PropTypes from 'prop-types';


export const statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentages}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default statistics;


statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};