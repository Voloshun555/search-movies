import { fetchCredits } from 'ApiSwrver/ApiServer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css'

function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState({});
  useEffect(() => {
    fetchCredits(movieId).then(data => {
      setCastList(data.cast);
    });
  }, [movieId]);

  return (
    <div className={css.contCast}>
      <ul className={css.castList}>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li className={css.castListComonent} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
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
    </div>
  );
}

export default Cast;
