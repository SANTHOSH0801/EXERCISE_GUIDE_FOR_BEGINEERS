import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SelectProvider } from './Components/SelectedContext.jsx'
import { ExerciseTypeProvider } from './Components/SelectedExerciseTypeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectProvider>
      <ExerciseTypeProvider>
        <App />
      </ExerciseTypeProvider>
    </SelectProvider>
  </StrictMode>,
)
