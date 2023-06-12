import { AiOutlineCheck } from 'react-icons/ai';
import { fetchDataCearch } from 'ApiSwrver/ApiServer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import css from './Home.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('idle');

  const paramsValue = searchParams.get('query') || '';

  const hendleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.movie.value;
    if (!query) {
      toast('Enter please a movie name.', {});
    }
    setSearchParams(query !== '' ? { query } : {});
  };
  useEffect(() => {
    getDataCearch(paramsValue);
  }, [paramsValue]);

  async function getDataCearch(paramsValue) {
    try {
      setStatus('pending');
      const data = await fetchDataCearch(paramsValue);
      setMovies(data.results);
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  }

  return (
    <div className={css.searchContainer}>
      <h2>Search movies:</h2>
      <form className={css.form} onSubmit={hendleSubmit}>
        <button className={css.btnSubmit} type="submit">
          <AiOutlineCheck size="2rem" />
        </button>
        <input
          defaultValue={paramsValue}
          name="movie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search name"
        />
      </form>

      {status === 'resolved' && (
        <div>
         {movies.length > 0 && <MovieList movie={movies}  Title={`Resoult movies: ${paramsValue}`} />} 
        </div>
      )}
    </div>
  );
};
export default Movies;
