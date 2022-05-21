import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
    return (
        <ul className={s.listButtons}>
            <li><button className={s.button} type="button" onClick={handleGood}>Good</button></li>
            <li><button className={s.button} type="button" onClick={handleNeutral}>Neutral</button></li>
            <li><button className={s.button} type="button" onClick={handleBad}>Bad</button></li>
        </ul>
    );
};

FeedbackOptions.propTypes = {
    handleGood: PropTypes.func.isRequired,
    handleNeutral: PropTypes.func.isRequired,
    handleBad: PropTypes.func.isRequired,
};

export default FeedbackOptions