import { useState, useEffect } from 'react';
import { fetchData } from '../components/ApiSwrver/ApiServer';
import { Link } from 'react-router-dom';
import ButtonPage from 'components/Button/ButtonPage';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css'

const Home = () => {
  const location = useLocation();
  
  const [moviesTop, setMoviesTop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(page).then(data => {
      setMoviesTop(data.results);
      setData(data.total_pages);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <main >
      <h1 className={css.titleHome}>Top movies</h1>
      <ul className={css.movieList}>
        {moviesTop.map(({id, original_title }) => (
          <li className={css.movieListComponent} key={id}>
            <Link className={css.link} key={id} to={`/movies/${id}`} state={{from: location}}>{original_title}</Link>
          </li>
        ))}
      </ul>
      {isLoading && <div>...Загрузка</div>}
      <div className={css.btnPage}>
      <ButtonPage
      className={css.btnPage}
        page={page}
        totalPages={data.total_pages}
        handlePageChange={setPage}
      />
      </div>
      
    </main>
  );
};
export default Home;
