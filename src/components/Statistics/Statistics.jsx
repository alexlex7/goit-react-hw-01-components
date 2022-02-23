import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from '../../js/randomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => {
          return (
            <li
              className={s.item}
              key={stat.id}
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 12777215).toString(16);
// }

// console.log(getRandomColor());
