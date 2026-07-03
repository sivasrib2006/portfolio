# My Portfolio Website

A modern, responsive, mobile-friendly personal portfolio website built with HTML5, CSS3, Bootstrap, and JavaScript.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Navigation**: Sticky navbar with smooth scroll navigation
- **Sections**:
  - **Home**: Hero section with call-to-action buttons
  - **Skills**: Showcase of technical skills with progress bars and skill cards
  - **Projects**: Portfolio of projects with descriptions, tags, and links
  - **Contact**: Contact form and social media links
- **Interactive Elements**: Smooth scrolling, hover effects, form validation
- **Optimized Performance**: Lightweight and fast-loading
- **Dark Mode Support**: Optional dark mode for better user experience

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Extra Small**: Below 360px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Bootstrap 5**: Responsive framework for UI components
- **JavaScript**: Interactive features and smooth scrolling
- **Font Awesome**: Icon library for visual enhancements

## 📦 Project Structure

```
portfolio/
├── index.html              # Portfolio main page
├── styles.css              # Portfolio styles
├── script.js               # Portfolio functionality
├── todo-index.html         # To-Do List app
├── todo-styles.css         # To-Do List styles
├── todo-script.js          # To-Do List functionality
├── sw.js                   # Service Worker (offline support)
├── README.md               # Portfolio documentation
└── README-todo.md          # To-Do List documentation
```

## 🌐 Live Demos

### 1. **Personal Portfolio Website**
- **URL**: https://sivasrib2006.github.io/portfolio/
- **Features**: Showcase projects, skills, and contact info
- **Files**: `index.html`, `styles.css`, `script.js`

### 2. **To-Do List Application**
- **URL**: https://sivasrib2006.github.io/portfolio/todo-index.html
- **Features**: Task management with local storage
- **Files**: `todo-index.html`, `todo-styles.css`, `todo-script.js`
- **Documentation**: See `README-todo.md`

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sivasrib2006/portfolio.git
cd portfolio
```

### 2. Open Locally
Simply open `index.html` in your web browser for the portfolio, or `todo-index.html` for the to-do app.

### 3. Deploy to GitHub Pages

1. Push your code to GitHub (if not already done):
```bash
git add .
git commit -m "Initial portfolio and todo app commit"
git push -u origin main
```

2. Go to your repository settings on GitHub
3. Scroll to "GitHub Pages" section
4. Select `main` branch as source
5. Your sites will be live at:
   - Portfolio: `https://sivasrib2006.github.io/portfolio/`
   - To-Do App: `https://sivasrib2006.github.io/portfolio/todo-index.html`

---

## 📋 Project 1: Personal Portfolio

### Features
- ✅ Hero section with animations
- ✅ Skills showcase with progress bars
- ✅ Projects portfolio with descriptions
- ✅ Contact form with email integration
- ✅ Social media links
- ✅ Smooth scroll navigation
- ✅ Fully responsive design

### Customization

**In `index.html`:**
- Replace "Welcome to My Portfolio" with your name
- Update "Full-Stack Developer | UI/UX Enthusiast | Problem Solver" with your tagline
- Update profile image URL
- Customize skills, projects, and social links

**In `styles.css`:**
- Modify color variables in `:root`
- Adjust fonts and sizes
- Customize animations

**In `script.js`:**
- Update email address in contact form
- Modify form validation logic

---

## ✅ Project 2: To-Do List Application

### Features
- ✅ Add, edit, delete tasks
- ✅ Task priorities (Low, Medium, High)
- ✅ Filter by status and priority
- ✅ Sort by date, priority, alphabetically
- ✅ Real-time statistics
- ✅ Progress tracking
- ✅ Export as CSV
- ✅ Local storage persistence
- ✅ Fully responsive design

### Quick Start
1. Open `todo-index.html` in browser
2. Type task and select priority
3. Click "Add" or press Enter
4. Manage tasks with edit/delete buttons
5. Use filters to organize
6. Export tasks as needed

### Data Storage
- All tasks saved automatically to browser
- Data persists across sessions
- Clear anytime with "Clear All"
- Export as CSV for backup

For detailed documentation, see: `README-todo.md`

---

## 🎨 Customization

### Portfolio Website

#### Update Personal Information
- Name and tagline
- Profile picture
- Skills and proficiency levels
- Projects with descriptions
- Social media links
- Color scheme

#### Edit Sections
- Skills Section: Add more skill cards
- Projects Section: Update projects with your work
- Contact Section: Update email and social links

### To-Do List Application

#### Customize Features
- Priority levels
- Filter options
- Sort methods
- Statistics display
- Export format

---

## 📋 Customization Checklist

### Portfolio
- [ ] Update your name and tagline
- [ ] Add your profile picture (replace placeholder)
- [ ] Update skills list
- [ ] Add your projects with descriptions
- [ ] Update social media links
- [ ] Change color scheme if desired
- [ ] Update email address for contact form
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages

### To-Do List
- [ ] Test add/edit/delete functionality
- [ ] Verify local storage works
- [ ] Check responsive design
- [ ] Test filters and sorting
- [ ] Export and review CSV

---

## ⚡ Performance Optimization

- Minified CSS and JavaScript
- Optimized images
- Lazy loading support
- Smooth animations with CSS transforms
- Mobile-first responsive design
- Service Worker for offline support (To-Do App)

## 🎯 Portfolio Features Breakdown

### Navigation
- Sticky navbar that stays at top while scrolling
- Smooth scroll to sections
- Active link indicator
- Mobile hamburger menu

### Home Section
- Full-screen hero with gradient background
- Profile image with hover effect
- Call-to-action buttons
- Animated text entrance

### Skills Section
- Interactive skill cards with icons
- Skill progress bars with percentages
- Hover animations
- Responsive grid layout

### Projects Section
- Project cards with images/gradients
- Technology badges
- Project descriptions
- Links to project details

### Contact Section
- Contact form with validation
- Email integration
- Social media links
- Responsive form layout

---

## 🎯 To-Do App Features Breakdown

### Task Management
- Create tasks with text and priority
- Edit existing tasks
- Mark complete/incomplete
- Delete individual tasks
- Bulk operations (clear completed/all)

### Filtering System
- All tasks
- Active tasks
- Completed tasks
- High-priority tasks

### Sorting Options
- Newest first
- Oldest first
- By priority
- Alphabetical order

### Statistics Dashboard
- Total tasks count
- Active tasks count
- Completed tasks count
- Completion rate percentage

---

## 🔒 Security Considerations

- Form submissions use mailto links (client-side only)
- No backend server required for basic functionality
- Local storage is browser-specific and private
- For enhanced security, integrate with a backend service

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Optimization

- Touch-friendly buttons and links
- Optimized font sizes for readability
- Responsive images
- Mobile-specific navigation
- Fast load times

## 🎓 Learning Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🐛 Troubleshooting

### Portfolio Website

**Navbar not working**
- Ensure Bootstrap JS is loaded
- Check for console errors

**Smooth scroll not working**
- Ensure JavaScript file is linked correctly
- Check for JavaScript errors in browser console

**Images not displaying**
- Update image URLs
- Check file paths

### To-Do List Application

**Tasks not saving**
- Ensure local storage is enabled
- Check browser settings
- Try clearing cache and reload

**Tasks not displaying**
- Refresh the page
- Check browser console for errors
- Verify JavaScript is enabled

## 📈 Future Enhancements

### Portfolio
- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add filtering for projects
- [ ] Integrate with backend for contact form
- [ ] Add testimonials section
- [ ] Implement search functionality
- [ ] Add animations library (AOS)
- [ ] SEO optimization

### To-Do List
- [ ] Categories/Projects
- [ ] Due dates and reminders
- [ ] Recurring tasks
- [ ] Subtasks
- [ ] Tags and labels
- [ ] Search functionality
- [ ] Sync across devices
- [ ] Dark mode toggle

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**

- GitHub: [@sivasrib2006](https://github.com/sivasrib2006)
- LinkedIn: [Your Profile](https://linkedin.com)
- Email: your.email@example.com
- Portfolio: https://sivasrib2006.github.io/portfolio/

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork and submit a pull request.

## ⭐ Support

If you found these projects helpful, please give them a star! ⭐

---

## 📚 Documentation

- **Portfolio**: See main `README.md` (this file) for complete portfolio documentation
- **To-Do App**: See `README-todo.md` for complete to-do app documentation

---

**Made with ❤️ using HTML, CSS & JavaScript**