import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/taskReducer';

export default configureStore({
    reducer: {
        taskReducer,
    }
})

// import { createStore } from 'redux';
// import taskReducer from '../features/TaskReducer';

// const store = createStore(taskReducer);

// export default store;
