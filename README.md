# Task Manager CLI

Project URL: https://roadmap.sh/projects/task-tracker

A simple command-line interface (CLI) application for managing tasks. You can create, update, delete, and list tasks using various commands. Tasks are stored in a `tasks.json` file with properties such as `id`, `description`, `status`, `createdAt`, and `updatedAt`.

## Features
- Add new tasks
- Update task descriptions
- Mark tasks as `in-progress` or `done`
- Delete tasks
- List all tasks or filter them by status (`todo`, `in-progress`, `done`)

## Installation

1. Clone the repository to your local machine:

   git clone <https://github.com/Bryce76/Task-Manager.git>
   

2. Install Node.js if you haven't already. You can download it [here](https://nodejs.org/).

## Usage

1. Add a Task

   Add a new task with a description. The task will have a default status of `todo`.

   node task_cli.js add "task description"
   

   Example:
   node task_cli.js add "Finish reading JavaScript book"
   

2. Update a Task Description

   Update the description of an existing task by its `ID`.

   node task_cli.js update <id> "new description"
   

   Example:
   node task_cli.js update 1 "Update the README file"
   

3. Mark a Task as In-Progress

   Update the status of a task to `in-progress` using the task's `ID`.

   node task_cli.js mark-in-progress <id>
   

   Example:
   node task_cli.js mark-in-progress 1
   

4. Mark a Task as Done

   Update the status of a task to `done` using the task's `ID`.

   node task_cli.js mark-done <id>
   

   Example:
   node task_cli.js mark-done 1
   

5. Delete a Task

   Delete an existing task by its `ID`.

   node task_cli.js delete <id>
   

   Example:
   node task_cli.js delete 1
   

6. List All Tasks

   List all tasks currently stored in `tasks.json`.

   node task_cli.js list
   

7. List Tasks by Status

   List tasks filtered by their status (`todo`, `in-progress`, `done`).

   node task_cli.js list <status>
   

   Example:
   node task_cli.js list done
   

## Task Structure

Each task has the following properties:
- id: A unique identifier for the task.
- description: A short description of the task.
- status: The current status of the task (`todo`, `in-progress`, or `done`).
- createdAt: The date and time the task was created.
- updatedAt: The date and time the task was last updated.

## Example `tasks.json`

json
[
  {
    "id": 1,
    "description": "Finish reading JavaScript book",
    "status": "done",
    "createdAt": "2024-09-28T10:00:00.000Z",
    "updatedAt": "2024-09-28T11:00:00.000Z"
  },
  {
    "id": 2,
    "description": "Write project documentation",
    "status": "in-progress",
    "createdAt": "2024-09-28T12:00:00.000Z",
    "updatedAt": "2024-09-28T13:00:00.000Z"
  }
]


This `README` should provide a comprehensive overview of your Task Manager CLI and how to use it. Let me know if you'd like any changes!