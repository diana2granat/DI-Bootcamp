const tasks = [];

function addTask(taskText) {
    tasks.push(taskText);

    // Create a new list item element
    var listItem = document.createElement("li");

    // Create checkbox input
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create label for the checkbox
    var label = document.createElement("label");
    label.textContent = taskText;

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>'; // Font Awesome "X" icon

    // Add event listener to delete button
    deleteButton.addEventListener("click", function() {
        var listItem = this.parentNode;
        var list = listItem.parentNode;
        list.removeChild(listItem);
    });

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    // Append the new list item to the task list
    document.querySelector(".listTasks").appendChild(listItem);
}

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value from the input field
    var task = document.getElementById("taskInput").value.trim(); // Trim whitespace

    // Check if the input is not empty
    if (task !== "") {
        // Add task
        addTask(task);

        // Clear the input field
        document.getElementById("taskInput").value = "";
    } else {
        // If input is empty, alert the user
        alert("Please enter a task.");
    }
});
