# To-Do List Application

A modern, responsive to-do list application with local storage functionality. Build with HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with priority levels
- ✅ **Complete Tasks** - Mark tasks as done
- ✅ **Edit Tasks** - Modify existing tasks
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Local Storage** - Persist data in browser
- ✅ **Clear Operations** - Clear completed or all tasks

### Filtering & Sorting
- 🔍 **Filter Options**:
  - All tasks
  - Active tasks
  - Completed tasks
  - High priority tasks
- 📊 **Sort Options**:
  - Newest first
  - Oldest first
  - By priority
  - Alphabetical

### User Interface
- 📈 **Statistics Dashboard** - Total, active, completed, completion rate
- 📊 **Progress Bar** - Visual completion progress
- 🎨 **Responsive Design** - Works on all devices
- ⚡ **Smooth Animations** - Professional transitions
- 🎯 **Priority Levels** - Low, Medium, High
- 📅 **Timestamps** - Task creation date/time
- 📤 **Export** - Download tasks as CSV

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Extra Small**: Below 360px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, animations, grid layout
- **JavaScript (Vanilla)**: Class-based architecture
- **Local Storage API**: Data persistence
- **Bootstrap 5**: UI components and utilities
- **Font Awesome**: Icons

## 📦 Project Structure

```
portfolio/
├── todo-index.html      # Main HTML file
├── todo-styles.css      # CSS stylesheets
├── todo-script.js       # JavaScript functionality
└── README-todo.md       # Documentation
```

## 🚀 Getting Started

### 1. Open the Application
Simply open `todo-index.html` in your web browser.

### 2. Add a Task
1. Type your task in the input field
2. Select priority level (Low, Medium, High)
3. Click "Add" or press Enter
4. Task appears in the list

### 3. Manage Tasks
- **Complete**: Click the checkbox
- **Edit**: Click the edit button
- **Delete**: Click the trash button

### 4. Filter & Sort
- Use filter buttons to view specific task types
- Use sort dropdown to organize tasks
- Stats update automatically

## 💾 Local Storage

All tasks are automatically saved to browser's local storage:
- Tasks persist across browser sessions
- No server required
- Data stored locally on your device
- Clear data anytime with "Clear All" button

### How It Works

```javascript
// Automatic saving
saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
}

// Automatic loading
loadFromStorage() {
    const stored = localStorage.getItem('todos');
    this.todos = stored ? JSON.parse(stored) : [];
}
```

## 🎨 Features Breakdown

### Task Management
- Add tasks with text and priority
- Edit task text
- Mark complete/incomplete
- Delete tasks
- Bulk operations (clear completed/all)

### Filtering System
- **All**: Show all tasks
- **Active**: Show incomplete tasks
- **Completed**: Show finished tasks
- **High Priority**: Show high-priority tasks

### Sorting Options
- **Date Descending**: Newest tasks first
- **Date Ascending**: Oldest tasks first
- **Priority**: High → Medium → Low
- **Alphabetical**: A → Z

### Statistics
- **Total Tasks**: Count of all tasks
- **Active**: Incomplete tasks
- **Completed**: Finished tasks
- **Completion Rate**: Percentage done

### Export
- Download tasks as CSV file
- Includes task name, priority, status, date
- Compatible with Excel, Google Sheets

## 📋 Keyboard Shortcuts

| Action | Key |
|--------|-----|
| Add Task | Enter |
| Delete Task | Click delete button |
| Complete Task | Click checkbox |
| Edit Task | Click edit button |

## 🎯 Priority Levels

| Priority | Color | Use Case |
|----------|-------|----------|
| **High** | 🔴 Red | Urgent tasks |
| **Medium** | 🟡 Yellow | Regular tasks |
| **Low** | 🔵 Blue | Optional tasks |

## 💡 Usage Examples

### Adding Tasks

1. **Work Tasks**
   - Text: "Complete project report"
   - Priority: High
   - Due: Today

2. **Personal Tasks**
   - Text: "Buy groceries"
   - Priority: Medium
   - Due: Soon

3. **Reminders**
   - Text: "Call mom"
   - Priority: Low
   - Due: Later

### Organization

- Use filters to focus on specific task types
- Sort by priority to tackle important tasks first
- Track completion rate for motivation
- Export weekly tasks for records

## 🔒 Data Privacy

- All data stored locally in your browser
- No data sent to any server
- No tracking or analytics
- You have complete control of your data
- Clear all data anytime

## 🐛 Troubleshooting

### Tasks Not Saving
- Ensure local storage is enabled
- Check browser settings
- Try clearing cache and reload
- Use incognito mode to test

### Tasks Not Displaying
- Refresh the page
- Check browser console for errors
- Verify JavaScript is enabled
- Try different browser

### Edit/Delete Not Working
- Ensure JavaScript is enabled
- Check for console errors
- Reload the page
- Try different browser

## ⚡ Performance

- Lightweight (< 50KB)
- Fast load time
- Smooth animations
- Responsive interactions
- Optimized storage queries

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Future Enhancements

- [ ] Categories/Projects
- [ ] Due dates and reminders
- [ ] Recurring tasks
- [ ] Subtasks
- [ ] Tags and labels
- [ ] Search functionality
- [ ] Sync across devices
- [ ] Dark mode toggle
- [ ] Multiple lists
- [ ] Notifications

## 🎓 Learning Resources

- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [CSS Grid & Flexbox](https://css-tricks.com/)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name** - To-Do List Application

- GitHub: [@sivasrib2006](https://github.com/sivasrib2006)
- LinkedIn: [Your Profile](https://linkedin.com)
- Email: your.email@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Support

If you found this project helpful, please give it a star! ⭐

---

**Made with ❤️ using HTML, CSS & JavaScript**

## Quick Tips

### Maximize Productivity
1. Set realistic daily goals
2. Prioritize important tasks
3. Break large tasks into smaller ones
4. Review completed tasks regularly
5. Export weekly summaries

### Best Practices
- Add tasks immediately when you think of them
- Review daily before starting work
- Mark tasks complete as soon as done
- Organize by priority
- Keep task descriptions clear and concise