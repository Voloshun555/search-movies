import { getReviews } from 'components/ApiSwrver/ApiServer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css'

function Reviews() {
  const { movieId } = useParams();
  const [dataReviews, setdataReviews] = useState({});

  useEffect(() => {
    getReviews(movieId).then(data => {
      setdataReviews(data.results);
    });
  }, [movieId]);

  return (
    <div className={css.contReviews}>
      <ul className={css.listReviews}>
        {dataReviews.length > 0
          ? dataReviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3 className={css.titleReviews}>{author}</h3>
                <p>{content}</p>
              </li>
            ))
          : "Sorry, we don't have any review for this movie"}
      </ul>
    </div>
  );
}

export default Reviews;
