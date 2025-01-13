
![Alt text for the image](./images/Screenshot-1.png)


# Fun Color-Changing Circle Project

This project is a React-based interactive app where a circular element changes its color and background dynamically when clicked. The application features smooth animations and transitions, making it visually engaging and fun to use.

## Features

- **Interactive Circle**: Click the circle to trigger a random change in its color and the background color.
- **Animations**:
  - The circle scales up and down when clicked.
  - A glowing effect and spinning rings surround the circle.
  - Smooth transitions between colors and animations.
- **Random Colors**: Colors for the circle and background are chosen randomly from predefined sets.

## Technologies Used

- **React**: For building the UI and managing state.
- **Tailwind CSS**: For styling and animations.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_name>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## How It Works

1. **Random Color Selection**: When the circle is clicked, the `getRandomColor` function selects random colors for both the circle and the background from predefined arrays.
2. **State Management**: The React `useState` hook manages the current colors and active state of the circle.
3. **Animations**: Tailwind CSS classes handle the scaling, glowing, and spinning animations dynamically based on the state.

## Folder Structure

```
.
├── src
│   ├── App.js       # Main React component
│   ├── index.js     # Entry point
│   └── index.css    # Tailwind CSS configuration
├── public
│   ├── index.html   # HTML template
│   └── favicon.ico  # Icon
└── package.json     # Project configuration
```

## Customization

To modify the color sets:

- Edit the `colors` and `bgColors` arrays in `App.js` to include your preferred colors:
  ```javascript
  const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500'];
  const bgColors = ['bg-black', 'bg-gray-800'];
  ```

## Dependencies

- **React**: For the component-based architecture.
- **Tailwind CSS**: For utility-first styling and animations.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspiration from modern UI/UX animations and color design.

---

Have fun exploring the app and customizing it to your liking!
