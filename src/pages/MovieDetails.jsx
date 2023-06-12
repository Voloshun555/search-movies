import { Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../ApiSwrver/ApiServer';
import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import css from './Home.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  const backLinkRef = useRef(location.state?.from ?? '/');
  

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  async function getMovieDetails(movieId) {
    try {
      setStatus('pending');
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  }
  const { original_title, overview, genres, poster_path, vote_average } = movie;
  return (
    <>
      {status === 'resolved' && (
        <main className={css.mainCont}>
          <div>
            <Link className={css.btnLink} to={backLinkRef.current}>
              <button className={css.btnBack}>Назад</button>
            </Link>
          </div>
          <div className={css.movieDetails}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              width={320}
              height={400}
              alt="poster"
            />
            <div className={css.movieListDetails}>
              <h1>{original_title}</h1>
              <p className={css.userScore}>
                User Score: <span>{vote_average}</span>{' '}
              </p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <ul>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>

          <div>
            <h3>Additional informatio</h3>
            <ul className={css.btnRevue}>
              <li className={css.btnList}>
                <Link
                  className={css.btnRevueLink}
                  to="cast"
                  state={backLinkRef.current}
                >
                  <button>cast</button>
                </Link>
              </li>
              <li className={css.btnList_Reviews}>
                <Link
                  className={css.btnRevueLink}
                  to="reviews"
                  state={backLinkRef.current}
                >
                  <button>reviews</button>
                </Link>
              </li>
            </ul>
          </div>
        </main>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry, we can't find this page</h2>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
