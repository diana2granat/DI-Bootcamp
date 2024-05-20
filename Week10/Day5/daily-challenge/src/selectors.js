// "src/selectors.js"
import { createSelector } from 'reselect';

const getTasks = (state) => state.tasks;
const getCategories = (state) => state.categories;
const getCategoryId = (_, categoryId) => categoryId;

export const selectTasksByCategory = createSelector(
  [getTasks, getCategoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  getTasks,
  tasks => tasks.filter(task => task.completed).length
);

export const selectCategoryById = createSelector(
  [getCategories, getCategoryId],
  (categories, categoryId) => categories.find(category => category.id === categoryId)
);
