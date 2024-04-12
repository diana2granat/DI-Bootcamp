// In todo.js, define an ES6 module that exports a TodoList class.
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// Export the TodoList class.

class TodoList{
    constructor() {
        this.tasks = [];
    }  
    addTasks(task){
        this.tasks.push({ task: task, completed: false });
    }
    markComplete(task){
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].completed = true;
        } else {
            console.error("Task index out of range");
        }
    }
    listTasks(){
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Pending'}`);
        });
    } 
    }  
    export {TodoList};