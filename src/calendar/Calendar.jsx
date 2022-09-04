
import React, { useState } from "react";
import { Calendar, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import "./Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Toolbar from "./Toolbar";
import moment from 'moment';
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

const events = [
];

const Container = styled.div`
    text-align:center;
    width: 90%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:40px 0;
`;

const Button = styled.button`
    padding: 5px 10px;
    display: flex;
    width: 40%;
    justify-content: center;
    border:none;
    border-radius:5px;
    background-color:#7451f8;
    color:white;
    cursor:pointer;
`;

function App() {
    moment.locale("en-GB");
    const localizer = momentLocalizer(moment);

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <Container>
            <Calendar components={{toolbar: Toolbar,}} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500}} />
            <Wrapper>
                <input style={{ "width":"100%","padding":"5px", "fontSize":"12px", "border":"none", "borderBottom":"1px solid gray"}} type="text" placeholder="할 일" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker  locale={ko}  placeholderText="시작일" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker  placeholderText="종료일" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <Button onClick={handleAddEvent}>
                    일정 추가
                </Button>
            </Wrapper>
        </Container>
    );
}

export default App;