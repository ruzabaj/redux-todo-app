import Todo from './components/Todo';
import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';

function App() {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <Todo/>
      {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
    </div>
  );
}

export default App;
