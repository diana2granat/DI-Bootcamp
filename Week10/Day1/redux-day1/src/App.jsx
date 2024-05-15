import { useState, useReducer, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";

export const initialState = {
  count: 0,
  tasks: [],
};

/** Action */
const INCREMENT = "jkerhg;jakshg;etsrhu";
const DECREMENT = "decrement";
const ADD_TASK = "add_task";

export const reducer = (state, action) => {
  // if (action.type === INCREMENT) {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === DECREMENT) {
  //   return { ...state, count: state.count - 1 };
  // }
  // else if(action.type === ADD_TASK) {
  //   state.tasks.push("task 1")
  //   return {...state, task: [...tasks]}
  // }
  // return state;

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ADD_TASK:
      const newTasks = [...state.tasks];
      newTasks.push({ name: action.payload });
      return { ...state, tasks: newTasks };
    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef("");

  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <>
      {/* <div className='card'>
        <h2>React - useState</h2>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        count is {count}
        <button onClick={() => setCount((count) => count - 1)}> - </button>
      </div> */}
      <div className='card'>
        <h2>React - useReducer</h2>
        <button onClick={() => dispatch({ type: INCREMENT, payload: 10 })}>
          {" "}
          +{" "}
        </button>
        count is {state.count}
        <button onClick={() => dispatch({ type: DECREMENT, payload: 5 })}>
          {" "}
          -{" "}
        </button>
      </div>
      <div>
        <h2>Tasks</h2>
        <input ref={inputRef} />
        <button onClick={() => addTask()}>Add TAsk</button>
        <div>
          {state.tasks.map((item, i) => {
            return <div key={i}>{item.name}</div>;
          })}
        </div>
      </div>
      <Counter/>
    </>
  );
}

export default App;
