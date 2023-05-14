import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useState } from 'react';



function App() {

  const [isdarkmode, setisdarkmode] = useState(false);
  const handleDarkModeToggle = () => {
    setisdarkmode(!isdarkmode);
  };
  return (
<div className={`app ${isdarkmode ? 'dark-mode' : ''}`}>
<button onClick={handleDarkModeToggle}> 🌞/🌃</button>
    <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
