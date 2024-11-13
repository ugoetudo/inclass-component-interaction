import './App.css';
import {useState} from 'react';
import Schedule from './Schedule';

function App() {

  const [showSched, setShowSched] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOptionSelected = (e) => {
    setSelectedDate(e.target.value);
    setShowSched(true);
  }

  const handleGoBack = () => {
    setShowSched(false);
    setSelectedDate("");
  }

  if (showSched) {
    return (
      <Schedule selected_date={selectedDate} 
                goBack={() => handleGoBack}/>
    );
  }
  else {
    return (
      <div className="App">
      <label>
        Choose a date: &nbsp;
        <select defaultValue="choose a day" onChange={(e) => handleOptionSelected(e)}>
          <option value="choose a day">Date</option>
          <option value="11/11/2024">11/11/2024</option>
          <option value="11/12/2024">11/12/2024</option>
          <option value="11/13/2024">11/13/2024</option>
        </select>
      </label>
      </div>
    );
  }
}

export default App;
