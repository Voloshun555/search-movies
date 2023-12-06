import { useState, useEffect } from 'react';
import { fetchData } from '../ApiSwrver/ApiServer';
import MovieList from 'components/MovieList/MovieList';
import css from './Home.module.scss';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [moviesTop, setMoviesTop] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getFetchData();
  }, []);

  async function getFetchData() {
    try {
      setStatus('pending');
      const data = await fetchData();
      setMoviesTop(data.results);
       setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  }

  return (
    <main>
      <h1 className={css.titleHome}>Top movies</h1>
      {status === 'resolved' && <MovieList movie={moviesTop}  />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry, we can't find this page</h2>}
    </main>
  );
};
export default Home;
