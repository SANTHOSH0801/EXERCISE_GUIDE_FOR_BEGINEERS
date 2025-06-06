import React, { useEffect, useState } from 'react';
import TrainingPage from '../Pages/TrainingPage.jsx';
import ExerciseData from '../Components/ExerciseInfo';
import { useSelected } from '../Components/SelectedContext';

function AllExercises() {
    const { selected, groupedVideos ,setGroupedVideos } = useSelected();
    console.log("Selected Exercise in AllExercises:", selected);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        if (selected && ExerciseData[selected]) {
            const data = Object.values(ExerciseData[selected]);
            console.log("Exercise Data:", data);
            setExercises(data);

            // Create video paths
            const paths = [];
            for (let i = 1; i <= 2; i++) {
                for (let j = 1; j <= 2; j++) {
                    let path = `/${selected}/VIDEO0${i}0${j}`;
                    console.log("VideoPath:", path);
                    paths.push(path);
                }
            }

            const grouped = [];
            for (let i = 0; i < paths.length; i += 2) {
                grouped.push([paths[i],paths[i+1]]);
            }
            setGroupedVideos(grouped);
        }
    }, [selected]);

    console.log("Exercises:", exercises);
    console.log("Video Paths:", groupedVideos);



    return (
        <div className="bg-slate-200">
            {exercises.map((exercise, index) => (
                <TrainingPage key={index} exercise={exercise} videoPath={groupedVideos[index]} exerciseGroupName = {exercises}  />
            ))}
        </div>
    );
}

export default AllExercises;
