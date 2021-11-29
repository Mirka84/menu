import React, { useState }  from 'react'; 
import Button from '@mui/material/Button';
import DateFnsUtils from '@date-io/date-fns';
import { setDate } from 'date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { TextField } from '@mui/material';


function App() {

  const [date, setDate] = useState(new Date()); 
  const [desc, setDesc] = useState('');
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]; 
  const [todos, setTodos] = useState([]); 
  const [todo, setTodo] = useState({desc: '', selectedDate: ''});
  
  
  const selectedDate=day + '.' + (month+1) + '.'+ year; 
  

  const addTodo = (event) => {
    event.preventDefault();
    
    console.log(todos); 
    const newTodo={desc, selectedDate}; 
    setTodo(newTodo); 
    setTodos([...todos, newTodo]);  
    
  }

 
  const inputChanged = (event) => { 
     
    setDesc(event.target.value); 
 
  } 


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>
    <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={date} onChange={date => setDate(date)} />
    </MuiPickersUtilsProvider>
    <TextField variant="standard" name="desc" label="Description" name="desc" value={desc} onChange={inputChanged}/>
    <Button size="small" variant="contained" onClick={addTodo}>Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => (
        <tr key={index}>
          <td>{todo.selectedDate}</td>
          <td>{todo.desc}</td>
        </tr>))
      }; 
      </tbody></table>
    </div>
    </div>
  );
}

export default App;
