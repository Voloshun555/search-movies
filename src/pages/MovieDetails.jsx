import { Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../components/ApiSwrver/ApiServer';
import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import css from './Home.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { original_title, overview, genres, poster_path, vote_average } = movie;

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
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
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
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
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
