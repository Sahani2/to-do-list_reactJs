// import { useState } from "react";

// export default function TaskForm ({ onAdd }){
// // add a state for work with react
// const [taskName,setTaskName] = useState('');

// function handleSubmit(ev) {
// ev.preventDefault();    
// onAdd(taskName);
// }

// return(
//     <form onSubmit={handleSubmit}>
//       <button>+</button>
// <input type='text'
//        placeholder="Your next task" 
//        value={taskName}
//        onChange={ev => setTaskName(ev.target.value)}/>
// </form>
// );
// }
import { useState } from "react";

export default function TaskForm({ onAdd }) {
  // add a state for work with react
  const [taskName, setTaskName] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();    
    onAdd(taskName);
    setTaskName(''); // Clear input after submitting
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">+</button>
      <input 
        type='text'
        placeholder="Your next task" 
        value={taskName}
        onChange={ev => setTaskName(ev.target.value)}
      />
    </form>
  );
}