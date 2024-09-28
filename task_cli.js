const fs = require('fs');
const filePath = 'tasks.json'; // Path to your JSON file

// Check if the file exists, if not create an empty array of tasks
let tasks = [];
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
} else {
  // Load existing tasks if the file exists
  tasks = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Simple counter for ID (based on the length of the task array)
let currentId = tasks.length ? tasks[tasks.length - 1].id : 0;

// Function to add a task
function addTask(description) {
  currentId++;  // Increment ID

  const newTask = {
    id: currentId,
    description: description,
    status: "todo",  // Default status is "todo"
    createdAt: new Date().toISOString(),  // Task creation time
    updatedAt: new Date().toISOString(),  // Task last update time
  };

  tasks.push(newTask); // Add the new task to the array

  // Write the updated tasks array back to the file
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  console.log(`Task added: ${description} (ID: ${currentId})`);
}

// Function to update a task by id
function updateTask(id, updatedDescription) {
    const taskIndex = tasks.findIndex(task => task.id === id); // Find task by id
  
    if (taskIndex !== -1) {
      // Update task details
      tasks[taskIndex].description = updatedDescription || tasks[taskIndex].description; // Update description if provided
      tasks[taskIndex].updatedAt = new Date().toISOString(); // Update the updatedAt timestamp
  
      // Write the updated tasks array back to the file
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
      console.log(`Task with ID ${id} has been updated.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // Function to delete a task by id
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id); // Find task by id
  
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1); // Remove the task from the array
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
      console.log(`Task with ID ${id} has been deleted.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  // Function to update the status of a task
function updateTaskStatus(id, newStatus) {
    const taskIndex = tasks.findIndex(task => task.id === id); // Find task by id
  
    if (taskIndex !== -1) {
      // Update task status
      tasks[taskIndex].status = newStatus;
      tasks[taskIndex].updatedAt = new Date().toISOString(); // Update the updatedAt timestamp
  
      // Write the updated tasks array back to the file
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
      console.log(`Task with ID ${id} marked as ${newStatus}.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  // Accept command-line arguments for adding or updating tasks
  const args = process.argv.slice(2);
  
  if (args[0] === 'add' && args[1]) {
    const description = args.slice(1).join(' '); // Capture the description from the command line
    addTask(description);
  } else if (args[0] === 'update' && args[1] && args[2]) {
    const id = parseInt(args[1], 10); // Task ID to update
    const newDescription = args[2];   // New task description
    updateTask(id, newDescription);
  } else if (args[0] === 'mark-in-progress' && args[1]) {
    const id = parseInt(args[1], 10); // Task ID to update
    updateTaskStatus(id, "in-progress"); // Mark as "in-progress"
  } else if (args[0] === 'mark-done' && args[1]) {
    const id = parseInt(args[1], 10); // Task ID to update
    updateTaskStatus(id, "done"); // Mark as "done"
  } else if (args[0] === 'delete' && args[1]) {
        const id = parseInt(args[1], 10); // Task ID to delete
        deleteTask(id);
  } else {
    console.log('To add a task, use: node task_cli.js add "task description"');
    console.log('To update a task, use: node task_cli.js update <id> "new description"');
    console.log('To mark a task as done, use: node task_cli.js mark-done <id>');
    console.log('To delete a task, use: node task_cli.js delete <id>');
  }
  
