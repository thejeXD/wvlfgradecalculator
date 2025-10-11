# 🎓 Grade Calculator Maangas

A powerful, feature-rich grade calculator and predictor designed for students to track their academic performance across multiple subjects with ease.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 📊 Core Functionality
- **Multi-Subject Management**: Track up to 15 subjects simultaneously
- **Flexible Grading Periods**: Calculate grades across Prelim, Midterm, Pre-Finals, and Finals
- **Real-Time GWA Calculation**: Instant computation of Grade Weighted Average
- **Grade Prediction**: Automatically calculate required grades to pass
- **Custom Weight Distribution**: Adjust percentage weights for each grading period

### 🎨 User Experience
- **Light & Dark Theme**: Toggle between themes for comfortable viewing
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded grade indicators (pass/fail highlighting)
- **Motivational Messages**: Fun, encouraging messages based on performance
- **Meme Integration**: Random memes displayed based on pass/fail status

### 🛠️ Advanced Features
- **Custom Formula Support**: Define your own GWA calculation formula
- **Grade Requirements Mode**: Automatically fill missing grades with required scores
- **Smart Field Editing**: Manual edits prevent auto-fill overrides
- **Export Options**: Print or save grades as PDF
- **Data Persistence**: Settings saved locally in browser
- **Below Passing Highlights**: Visual indicators for grades below threshold

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thejeXD/wvlfgradecalculator.git
   cd wvlfgradecalculator
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   ```

   Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **Start calculating!**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or directly open `index.html` in your browser

### File Structure

```
wvlfgradecalculator/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and themes
├── script.js           # Core functionality and logic
│
└── memes/             # Meme images (optional)
    ├── passed1.jpg
    ├── passed2.jpg
    ├── failed1.jpg
    └── ...
```

## 📖 Usage Guide

### Basic Usage

1. **Add Subjects**: Click the "+ Add Subject" button to add new subjects (up to 15)
2. **Enter Grades**: Input your grades for each grading period (0-100)
3. **View Results**: GWA is calculated automatically in real-time
4. **Check Status**: Overall passing status shown with visual indicators

### Settings Configuration

Access settings by clicking the ⚙️ Settings button:

#### Weight Distribution
Customize the percentage weight for each grading period:
- Prelim: Default 20%
- Midterm: Default 20%
- Pre-Finals: Default 20%
- Finals: Default 40%

**Note**: Total must equal 100%

#### Passing Grade
Set your institution's passing grade threshold (default: 59.50)

#### Custom Formula
Define your own GWA calculation formula using placeholders:
- `{prelim}` - Prelim grade
- `{midterm}` - Midterm grade
- `{prefinals}` - Pre-Finals grade
- `{finals}` - Finals grade

Example: `({prelim} + {midterm} + {prefinals} + {finals}) / 4`

#### Grade Requirements Mode
When enabled:
- Automatically calculates required grades for empty fields
- Fields remain editable after auto-fill
- Once manually edited, fields won't auto-fill again
- Shows "Needed" column with required scores

### Action Buttons

- **🖨️ Print**: Print your grade report
- **💾 Save**: Generate and save PDF report
- **🗑️ Clear Grades**: Clear all grade inputs (keeps subjects)
- **🗑️ Clear Subjects**: Remove all subjects except one
- **⚙️ Settings**: Open settings panel

## 🎯 Key Features Explained

### Auto-Fill Grade Requirements

The grade requirements feature intelligently calculates what you need to achieve:

1. Enter grades for some periods (leave others blank)
2. Enable "Grade Requirements" in settings
3. System calculates required grades to reach passing threshold
4. Auto-filled grades appear in orange highlight
5. Edit any auto-filled grade to override (won't auto-fill again)

### Grade Highlighting

- **Red Background**: Grade below passing threshold
- **Orange Background**: Auto-calculated required grade
- **Green Result**: Passing grade
- **Red Result**: Failing grade

### Theme Toggle

Switch between light and dark themes:
- Click the 🌙/☀️ icon in the header
- Theme preference saved automatically
- Optimized for both day and night viewing

## 🔧 Customization

### Modifying Maximum Subjects

Edit `script.js`:
```javascript
const MAX_SUBJECTS = 15; // Change to your desired maximum
```

### Customizing Meme Images

1. Create a `memes/` folder in the project directory
2. Add images named:
   - `passed1.jpg`, `passed2.jpg`, etc. (success memes)
   - `failed1.jpg`, `failed2.jpg`, etc. (encouragement memes)
3. Update arrays in `script.js`:

```javascript
const passedMemes = [
    'memes/passed1.jpg',
    'memes/passed2.jpg',
    // Add more...
];

const failedMemes = [
    'memes/failed1.jpg',
    'memes/failed2.jpg',
    // Add more...
];
```

### Customizing Messages

Edit the message arrays in `script.js`:

```javascript
const passedMessages = [
    "Your custom success message!",
    // Add more...
];

const failedMessages = [
    "Your custom encouragement!",
    // Add more...
];
```

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📱 Mobile Support

Fully responsive design optimized for:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Test thoroughly across different browsers
- Update documentation for new features
- Keep commits atomic and well-described

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- 🐛 [Report Bug](https://github.com/thejeXD/wvlfgradecalculator/issues)
- 💡 [Request Feature](https://github.com/thejeXD/wvlfgradecalculator/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Wolf**
- GitHub: [@thejeXD](https://github.com/thejeXD)
- Project Link: [Grade Calculator Maangas](https://github.com/thejeXD/wvlfgradecalculator)

## 🙏 Acknowledgments

- Inspired by the need for a flexible, student-friendly grade calculator
- Built with vanilla JavaScript for maximum compatibility
- Thanks to all contributors and users for feedback and suggestions

## 📞 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

<div align="center">

**Made with ❤️ by Wolf**

© 2025 All Rights Reserved

[⬆ Back to Top](#-grade-calculator-maangas)

</div>