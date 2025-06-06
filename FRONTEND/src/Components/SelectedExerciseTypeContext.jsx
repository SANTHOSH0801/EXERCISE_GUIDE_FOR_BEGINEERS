import React, { createContext, useContext, useState } from "react";

// Step 1: Create context
const SelectedExerciseTypeContext = createContext();

// Step 2: Export the provider
export const ExerciseTypeProvider = ({ children }) => {
    const [exerciseName, setExerciseName] = useState("");
    let [exerciseIndex , setExerciseIndex] = useState(null);

    return (
        <SelectedExerciseTypeContext.Provider value={{ exerciseName, setExerciseName ,exerciseIndex , setExerciseIndex }}>
            {children}
        </SelectedExerciseTypeContext.Provider>
    );
};

// Step 3: Export the custom hook
export const useName = () => useContext(SelectedExerciseTypeContext);
