import PropTypes from 'prop-types';
import css from './Button.module.css'



const ButtonPage = ({ page, totalPages, handlePageChange }) => {
  
  if (totalPages === 1) {
    return null;
  }

  return (
    <div>
      <button
      className={css.btnPage}
        type="button"
        disabled={page === 1}
        onClick={() => handlePageChange( page - 1)}
      >
        Prev pages
      </button>
      <button
      className={css.btnPage}
        type="button"
        disabled={page === totalPages}
        onClick={() => handlePageChange( page + 1)}
      >
        Next pages
      </button>
    </div>
  );
};
ButtonPage.propTypes = {
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
};

export default ButtonPage;
