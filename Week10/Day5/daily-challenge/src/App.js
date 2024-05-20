import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import CategorySelector from './CategorySelector';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Productivity Tracker</h1>
        <CategorySelector onSelectCategory={handleSelectCategory} />
        {selectedCategory && <TaskList categoryId={selectedCategory} />}
      </div>
    </Provider>
  );
};

export default App;
