import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ options, onControlClick }) => {
    return (
        <>
            {options.map((option) => (
                <li>
                <button
                    key={option}
                    type='button'
                    className={s.control}
                    onClick={onControlClick}
                >
                    {option}
                    </button>
                </li>
            ))}
        </>
    )   
}

Controls.propTypes = {
    onControlClick: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}

export default Controls;