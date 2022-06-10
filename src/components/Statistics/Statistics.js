import React from "react";
import PropTypes from 'prop-types';

import s from './Statistics.module.css'

function Statistics({ good, bad, neutral, total, positivePercentage }) {
    return (
            <ul className={s.list} >
                {good>0 && (<li className={s.item}>Good: <span className={s.value}>{good}</span></li>)}
                {neutral>0 && (<li className={s.item}>Neutral: <span className={s.value}>{neutral}</span></li>)}
                {bad>0 && (<li className={s.item}>Bad: <span className={s.value}>{bad}</span></li>)}
                {total>0 && (<li className={s.item}>Total: <span className={s.value}> {total}</span></li>)}
                {positivePercentage>0 && (<li className={s.item}>Positive feedback: <span className={s.value}>{positivePercentage}%</span></li>)}
            </ul>
    )
}
Statistics.propTypes = {
    good: PropTypes.number,  
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number,
};


export default Statistics