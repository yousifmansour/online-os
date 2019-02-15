import React from 'react';
import 'user/components/TimeAndDate.css';

const TimeAndDate = () => {
    let date = new Date();
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

    let hoursAndMinutes = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return (
        <div className='time-and-date'>
            <h1>{hoursAndMinutes}</h1>
            <h2>{day}, {month}
                &nbsp;{dayNumber}</h2>
        </div>
    );
};

export default TimeAndDate;