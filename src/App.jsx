import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutesWithLayouts from './AppRoutesWithLayouts';
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <Router>
      <AppRoutesWithLayouts />
    </Router>
  );
}

export default App;
