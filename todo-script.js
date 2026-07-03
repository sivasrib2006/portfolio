// Todo App Main Class
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.currentSort = 'date-desc';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
        console.log('%cTodo App Initialized', 'color: #007BFF; font-size: 14px; font-weight: bold;');
    }

    // ============ Storage Management ============
    
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        this.todos = stored ? JSON.parse(stored) : [];
    }

    // ============ Event Listeners ============
    
    setupEventListeners() {
        // Form submission
        document.getElementById('todoForm').addEventListener('submit', (e) => this.addTodo(e));

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.closest('button').dataset.filter));
        });

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        // Action buttons
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAll').addEventListener('click', () => this.clearAll());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTodos());

        // Enter key in input
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('todoForm').dispatchEvent(new Event('submit'));
            }
        });
    }

    // ============ Todo Management ============
    
    addTodo(e) {
        e.preventDefault();

        const input = document.getElementById('todoInput');
        const priority = document.getElementById('prioritySelect').value;
        const text = input.value.trim();

        if (!text) {
            this.showAlert('Please enter a task!', 'warning');
            return;
        }

        if (text.length > 100) {
            this.showAlert('Task is too long! (Max 100 characters)', 'warning');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            priority: priority,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.render();

        input.value = '';
        input.focus();
        document.getElementById('prioritySelect').value = 'medium';

        this.showAlert('Task added successfully!', 'success');
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToStorage();
            this.render();
            this.showAlert('Task deleted!', 'info');
        }
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            const newText = prompt('Edit task:', todo.text);
            if (newText && newText.trim()) {
                if (newText.length > 100) {
                    this.showAlert('Task is too long! (Max 100 characters)', 'warning');
                    return;
                }
                todo.text = newText.trim();
                this.saveToStorage();
                this.render();
                this.showAlert('Task updated!', 'success');
            }
        }
    }

    // ============ Filtering & Sorting ============
    
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.render();
    }

    getFilteredTodos() {
        let filtered = this.todos;

        switch (this.currentFilter) {
            case 'active':
                filtered = this.todos.filter(t => !t.completed);
                break;
            case 'completed':
                filtered = this.todos.filter(t => t.completed);
                break;
            case 'high':
                filtered = this.todos.filter(t => t.priority === 'high');
                break;
            case 'all':
            default:
                filtered = this.todos;
        }

        return this.sortTodos(filtered);
    }

    sortTodos(todos) {
        const sorted = [...todos];

        switch (this.currentSort) {
            case 'date-asc':
                sorted.sort((a, b) => a.id - b.id);
                break;
            case 'priority':
                const priorityOrder = { high: 1, medium: 2, low: 3 };
                sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                break;
            case 'name':
                sorted.sort((a, b) => a.text.localeCompare(b.text));
                break;
            case 'date-desc':
            default:
                sorted.sort((a, b) => b.id - a.id);
        }

        return sorted;
    }

    // ============ Statistics ============
    
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;
        const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('activeTasks').textContent = active;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('completionRate').textContent = rate + '%';

        // Update progress bar
        document.getElementById('progressBar').style.width = rate + '%';
        document.getElementById('progressText').textContent = rate + '%';
    }

    // ============ Clear Operations ============
    
    clearCompleted() {
        const completed = this.todos.filter(t => t.completed).length;
        
        if (completed === 0) {
            this.showAlert('No completed tasks to clear!', 'info');
            return;
        }

        if (confirm(`Clear ${completed} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showAlert('Completed tasks cleared!', 'success');
        }
    }

    clearAll() {
        if (this.todos.length === 0) {
            this.showAlert('No tasks to clear!', 'info');
            return;
        }

        if (confirm('This will delete ALL tasks! Are you sure?')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
            this.showAlert('All tasks cleared!', 'success');
        }
    }

    // ============ Export ============
    
    exportTodos() {
        if (this.todos.length === 0) {
            this.showAlert('No tasks to export!', 'info');
            return;
        }

        const data = this.todos.map(t => ({
            'Task': t.text,
            'Priority': t.priority.toUpperCase(),
            'Status': t.completed ? 'Completed' : 'Active',
            'Created': t.createdAt
        }));

        const csv = this.convertToCSV(data);
        this.downloadCSV(csv, 'todos.csv');
        this.showAlert('Tasks exported as CSV!', 'success');
    }

    convertToCSV(data) {
        const headers = Object.keys(data[0]).join(',');
        const rows = data.map(item => 
            Object.values(item).map(val => `"${val}"`).join(',')
        );
        return [headers, ...rows].join('\n');
    }

    downloadCSV(csv, filename) {
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    // ============ Rendering ============
    
    render() {
        this.updateStats();
        this.renderTodos();
    }

    renderTodos() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredTodos();

        if (filtered.length === 0) {
            todoList.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        todoList.innerHTML = filtered.map(todo => this.createTodoElement(todo)).join('');

        // Add event listeners to all checkboxes and buttons
        todoList.querySelectorAll('.todo-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.toggleTodo(parseInt(e.target.dataset.id));
            });
        });

        todoList.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.editTodo(parseInt(e.target.dataset.id));
            });
        });

        todoList.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.deleteTodo(parseInt(e.target.dataset.id));
            });
        });
    }

    createTodoElement(todo) {
        const date = new Date(todo.createdAt);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return `
            <li class="todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    data-id="${todo.id}"
                >
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-meta">
                        <span class="todo-priority">${todo.priority}</span>
                        <span class="todo-date">
                            <i class="fas fa-calendar-alt"></i> ${formattedDate}
                        </span>
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="todo-action-btn edit-btn" data-id="${todo.id}" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="todo-action-btn delete-btn" data-id="${todo.id}" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        `;
    }

    // ============ Utility Functions ============
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showAlert(message, type = 'info') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.setAttribute('role', 'alert');
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Insert after header
        document.querySelector('.app-header').insertAdjacentElement('afterend', alert);

        // Auto remove after 3 seconds
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker not available, app will still work
    });
}