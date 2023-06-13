import { Link, useLocation } from 'react-router-dom';
import css from './movieList.module.css';
import PropTypes from 'prop-types';

function MovieList({ movie }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.movieList}>
        {movie.map(({ id, original_title }) => (
          <li className={css.movieListComponent} key={id}>
            <Link
              className={css.link}
              key={id}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
MovieList.propTypers = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// MovieList.propTypes = {
//   movie: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
// };
export default MovieList;
