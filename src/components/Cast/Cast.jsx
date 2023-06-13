import { fetchCredits } from 'ApiSwrver/ApiServer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';

function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getCredits(movieId);
  }, [movieId]);

  async function getCredits(movieId) {
    try {
      setStatus('pending');
      const data = await fetchCredits(movieId);

      setCastList(data.cast);
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  }

  return (
    <div className={css.contCast}>
      {status === 'resolved' && (
        <ul className={css.castList}>
          {castList.length > 0
            ? castList.map(({ id, name, profile_path, character }) => (
                <li className={css.castListComonent} key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://www.suryalaya.org/images/no_image.jpg`
                    }
                    alt="actor"
                    loading="lazy"
                    width={150}
                    height={200}
                  />
                  <h2>{name}</h2>
                  <p> Character: {character}</p>
                </li>
              ))
            : "Sorry, there isn't any info :("}
        </ul>
      )}

      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry, we can't find this page</h2>}
    </div>
  );
}

export default Cast;
