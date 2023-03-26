import React, { useState } from 'react';
import mobiscroll, { Time } from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import "./Reservation.css";

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light',
    display: 'bubble'
};

const Reservation = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    
    const handleDateChange = (event, inst) => {
        event.preventdefault();
        setSelectedDate(inst.getVal());

    };

    const handleTimeChange = (event, inst) => {
        event.preventdefault();
        setSelectedTime(inst.getVal());
    };

    // const handleSaveClick = () => {
    // };

    return (
        <div>
            <mobiscroll.Form className="mbsc-form-box">
                <div className="mbsc-grid">
                    <div className="mbsc-row">
                        <div className="mbsc-col-sm-12 mbsc-offset-md-3 mbsc-col-md-7">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Enter your date and time:</mobiscroll.FormGroupTitle>
                                <div className="mbsc-row mbsc-form-grid">
                                    <div className="mbsc-col-sm-12 mbsc-col-lg-6">
                                        <mobiscroll.Date onChange={handleDateChange} value={selectedDate}>
                                            <mobiscroll.Input inputStyle="box" labelStyle="stacked">Date</mobiscroll.Input>
                                        </mobiscroll.Date>
                                    </div>
                                    <div className="mbsc-col-sm-12 mbsc-col-lg-6">
                                        <mobiscroll.Time onChange={handleTimeChange} value={selectedTime}>
                                            <mobiscroll.Input inputStyle="box" labelStyle="stacked">Time</mobiscroll.Input>
                                        </mobiscroll.Time>
                                    </div>
                                </div>
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                    {/* <div id='button'>
                    <button id='but' onClick={handleSaveClick}>Save</button>
                    </div> */}
                </div>
            </mobiscroll.Form>
            <br></br>
            
        </div>
    );
};

export default Reservation;
