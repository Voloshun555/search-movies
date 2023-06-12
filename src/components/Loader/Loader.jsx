import { Triangle } from  'react-loader-spinner'
import css from './Loader.module.css'

const Loader = () => {
    return (
        <div className={css.Loader}> 
        <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{position: 'absolute',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',}}
        wrapperClassName=""
        visible={true}
      /></div>
       
    );
  };

  export default Loader