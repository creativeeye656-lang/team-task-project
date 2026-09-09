# Team Project — Task List (Task Manager)

This is a team practice project. The goal is for everyone to work together on a real project and get hands-on experience with Git and GitHub.

## Working rules

1. No one pushes directly to `main`.
2. Create a new branch for each feature: `feature/feature-name`
3. After finishing the code, open a Pull Request.
4. Your code is merged after review by the instructor or a classmate.

## Open features (Issues)

| # | Feature | Description |
|---|---------|-------------|
| 1 | Add Task | Example implemented in app.js — use it as a template |
| 2 | Delete Task | Remove a task by clicking a button |
| 3 | Mark as Complete | Check off a task and update its style |
| 4 | Filter Tasks | Show only completed or active tasks |
| 5 | Task Counter | Complete the remaining task count |
| 6 | Clear Completed | Remove all completed tasks |
| 7 | Local Storage | Save the list in the browser (advanced level) |
| 8 | Styling / Responsive | Improve the appearance and make the page responsive |

## How to start work on a feature

```bash
git clone <repo-url>
cd team-project
git checkout -b feature/delete-task
# Write your code...
git add .
git commit -m "Add delete task feature"
git push origin feature/delete-task
```

After pushing, open a Pull Request on GitHub toward `main`.

## File structure

```text
team-project/
├── index.html      ← page structure
├── style.css       ← styles
├── app.js          ← main logic (tasks array and rendering)
├── features/       ← each student adds their own feature file here
└── README.md
```
