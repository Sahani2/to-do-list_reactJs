import logo from './logo.svg';
import './App.css';
import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {
  const[tasks, setTasks] = useState([]);
// save the tasks in localstorage
useEffect(() => {
if (tasks.length === 0) return;
  localStorage.setItem( 'tasks', JSON.stringify(tasks));
}, [tasks]);

useEffect( () => {
const tasks =JSON.parse(localStorage.getItem('tasks'));
setTasks(tasks);
}, []);

  function addTask(name){
setTasks(prev => {
return [...prev,{name:name , done:false}]
});
  }

  function removeTask(indexToRemove){
setTasks(prev => {
return prev.filter((taskObject, index) => 
   index !== indexToRemove);

});
  }
  function updateTaskDone( taskIndex, newDone){
setTasks(prev => {
  const newTasks = [...prev];
  newTasks[taskIndex].done=newDone;
  return newTasks;
});
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessege(){
    const percentage = numberComplete/numberTotal *100 ;
    if(percentage===0){
      return 'Try to do atleast one 😐'
    }
    if(percentage===100){
      return 'You did great 🎉'
    }
return 'Keep it up 😍'
  }


 function renameTask(index, newName){
setTasks(prev => {
  const newTasks = [...prev];
  newTasks[index].name = newName;
  return newTasks;
})
 }


  const messege= '';
  return (
   <main>
    <h1>{numberComplete}/{numberTotal} Completed</h1>
    <h2>{getMessege()}</h2>
<TaskForm onAdd={addTask}/>
{tasks.map((task, index ) => (
  <Task {...task} 
  onRenamed={newName =>  renameTask(index, newName)}
  onTrash={() => removeTask(index)}
  onToggle={done => updateTaskDone(index, done) }/>
) )}


   </main>
  );
}

export default App;
