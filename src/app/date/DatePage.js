import React, { useState } from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import "./DatePage.css";
// import { AiFillCalendar } from "react-icons/ai";
// import { FiCalendar } from "react-icons/fi";
// const date = () => {
//     return (
//         <>
//         <div className='date-data'>
//             <div>mm/dd/yyyy</div>
//             <div><AiFillCalendar /></div>
//         </div>
//         </>
//     )
// }  
const DatePage = () => {
    const [startDate, setStartDate] = useState(""); 
    return (
        <>
         <DatePicker selected={startDate} onChange={(date) =>   
setStartDate(date)} placeholderText="dd/mm/yyyy"  id="dateofbirth" /> 
        </>
    )
}
export default DatePage;