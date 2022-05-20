// import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = () => {
    return (
        <ul>
            <li className={s.item}>
                Positive results:
                <span>
                    {}
                </span>
            </li>
            <li className={s.item}>
                Neutral results:
                <span>
                    {}
                </span>
            </li>
            <li className={s.item}>
                Negative results:
                <span>
                    {}
                </span>
            </li>
        </ul>
    )
}

// Statistics.propTypes = {
//     option:PropTypes.string.isRequired,
// }

export default Statistics;