import { AiOutlineCheck } from 'react-icons/ai';
import { fetchDataCearch } from 'components/ApiSwrver/ApiServer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import ButtonPage from 'components/Button/ButtonPage';
import css from './Home.module.css';

const Movies = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataPage, setDataPage] = useState(false);

  const onValue = searchParams.get('query') || '';

  const hendleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.movie.value;
    if (!query) {
      toast('Enter please a movie name.', {});
    }
    setSearchParams(query !== '' ? { query } : {});
    setPage(1);
  };
  useEffect(() => {
    setIsLoading(true);
    try {
      fetchDataCearch(onValue, page).then(data => {
        setMovies(data.results);
        setDataPage(data.total_pages);
        setIsLoading(false);
      });
    } catch (error) {}
  }, [onValue, page]);

  return (
    <Suspense>
      <div className={css.searchContainer}>
        <h2>Search movies:</h2>
        <form className={css.form} onSubmit={hendleSubmit}>
          <button className={css.btnSubmit} type="submit">
            <AiOutlineCheck size="2rem" />
          </button>
          <input
            defaultValue={onValue}
            name="movie"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search name"
          />
        </form>

        {movies.length > 0 && (
          <ul>
            {' '}
            <h1>Resoult movies: {onValue}</h1>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {isLoading && <div>...Загрузка</div>}
        {movies.length > 0 && (
          <ButtonPage
            page={page}
            totalPages={dataPage}
            handlePageChange={setPage}
          />
        )}
        <Outlet />
      </div>
    </Suspense>
  );
};
export default Movies;
