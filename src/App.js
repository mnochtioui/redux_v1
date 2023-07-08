 
import './App.css';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import FilterTask from './Components/FilterTask';

function App() {
  return (
    <div className="App container">
      <h1>Hello </h1> 
      <FilterTask />
      <TaskList  />
      <AddTask />
      
    </div>
  );
}

export default App;
