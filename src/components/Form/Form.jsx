import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import s from './Form.module.css';

export default function Form({ handleSubmit }) {
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get('query') || '');

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(e.target.movie.value);
    setInput('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <button className={s.btn} type="submit">
        <FcSearch />
      </button>
      <input
        className={s.input}
        type="search"
        value={input}
        name="movie"
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
