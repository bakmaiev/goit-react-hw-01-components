import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {{ title } && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(e => {
          return (
            <li key={e.id} className="item">
              <span className="label">{e.label}</span>
              <span className="percentage">{e.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
