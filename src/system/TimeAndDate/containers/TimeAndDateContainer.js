import React from 'react';
import TimeAndDate from 'system/TimeAndDate/components/TimeAndDate';

class TimeAndDateContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoursAndMinutes: null,
            day: null,
            month: null,
            dayNumber: null
        };

    }

    componentDidMount() {
        this.getTimeAndDate();
        var intervalId = setInterval(this.getTimeAndDate, 1000);
        this.intervalId = intervalId;
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    getTimeAndDate = () => {
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

        this.setState({hoursAndMinutes, day, month, dayNumber});
    }

    render() {
        return (<TimeAndDate
            hoursAndMinutes={this.state.hoursAndMinutes}
            day={this.state.day}
            month={this.state.month}
            dayNumber={this.state.dayNumber}/>);
    }

}

export default TimeAndDateContainer;