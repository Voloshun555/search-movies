import { fetchReviews } from 'ApiSwrver/ApiServer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.scss'
import Loader from 'components/Loader/Loader';

function Reviews() {
  const { movieId } = useParams();
  const [dataReviews, setdataReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getReviews(movieId)
  }, [movieId]);


  async function getReviews(movieId){
    try {
      setStatus('pending')
      const data = await fetchReviews(movieId)
      setdataReviews(data.results)
      setStatus('resolved')
    } catch (error) {
      setStatus('rejected')
    }
  }

  return (
    <div className={css.contReviews}>
      {status === 'resolved' &&  <ul className={css.listReviews}>
        {dataReviews.length > 0
          ? dataReviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3 className={css.titleReviews}>{author}</h3>
                <p className={css.content}>{content}</p>
              </li>
            ))
          : "Sorry, we don't have any review for this movie"}
      </ul>}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry, we can't find this page</h2>}
     
    </div>
  );
}

export default Reviews;
