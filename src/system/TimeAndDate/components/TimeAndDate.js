import React from 'react';
import 'system/TimeAndDate/components/TimeAndDate.css';

const TimeAndDate = ({hoursAndMinutes, day, month, dayNumber}) => (
    <div className='time-and-date'>
        <h1>{hoursAndMinutes}</h1>
        <h2>{day}, {month}
            &nbsp;{dayNumber}</h2>
    </div>
);

export default TimeAndDate;