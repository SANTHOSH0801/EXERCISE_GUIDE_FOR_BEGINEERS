import React, { createContext, useContext, useState } from 'react';

// Create context
const SelectedContext = createContext();

// Provider component
export const SelectProvider = ({ children }) => {
    const [selected, setSelected] = useState("");
    const [groupedVideos, setGroupedVideos] = useState([]);
    
    // console.log("Selected Exercise:", selected);
    return (
        <SelectedContext.Provider value={{ selected, setSelected , groupedVideos, setGroupedVideos}}>
            {children}
        </SelectedContext.Provider>
    );
};

// Custom hook to use context
export const useSelected = () => useContext(SelectedContext);
