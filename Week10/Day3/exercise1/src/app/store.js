//"app/store.js"
// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from '../features/taskReducer';

// export default configureStore({
//     reducer: {
//         taskReducer,
//     }
// })


// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

