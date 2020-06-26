You're mission, should you choose to accept it is to build a simple task list in React.

# Requirements

## Mockup

![Task List Mockup](/TaskList.png)

The provided mockup what the desired outcome should look like.  Please note that making things pretty is not a major focus here (The input, buttons, and checkboxes are all browser default styles).

## Specifications

### Suggested Simplifications

A backend is not a requirement for this project.  You are welcome to simply store the data on the client side (it doesn't need to persist across refreshes).  If you still prefer to build a backend, that is completely fine.

### Task Data Model

```
{
    id: String,
    body: String,
    completed: Boolean
}
```

### User Stories

1. As a user, I can type a task in the input bar and hitting create will add to the list below.
2. As a user, I can mark a task completed using the checkbox.
3. As a user, I can mark a task as incomplete.
4. As a user, clicking "Remove" button should remove the task from the list.
5. As a user, I should see incomplete tasks at the top of the list followed by the completed tasks.

# Submission

Once completed, please submit your code [here](https://hello.dubsado.com/public/form/view/5ef6409eaea76a75c59ea006.com).  Submissions can be in the form of a zip file of the project (excluding the node_modules folder) or a link to a public repository on Github.

# Boilerplate App

This repository is provided to simplify getting started. You are welcome to use it or start from scratch if you would prefer.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.