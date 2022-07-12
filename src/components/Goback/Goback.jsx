import PropTypes from 'prop-types';
import s from './Goback.module.css';

export default function Goback({ goBack }) {
  return (
    <div className={s.wrap}>
      <button className={s.btn} type="button" onClick={goBack}>
        Go back
      </button>
    </div>
  );
}

Goback.propTypes = {
  goBack: PropTypes.func.isRequired,
};
