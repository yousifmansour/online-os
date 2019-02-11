import React from 'react';
import './TimeAndDate.css';

const TimeAndDate = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT'
    ];
    let day = days[+ date.getDay()];

    let months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ];
    let month = months[+ date.getMonth()];

    let dayNumber = date.getDate();

    return (
        <div className='time-and-date'>
            <h1>{hours}:{minutes}</h1>
            <h2>{day}, {month}
                &nbsp;{dayNumber}</h2>
        </div>
    );
};

export default TimeAndDate;