import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useName } from '../Components/SelectedExerciseTypeContext.jsx';
import { AppRoutes } from '../utils/Constant.js';
import { useSelected } from '../Components/SelectedContext.jsx';
import ExerciseData from '../Components/ExerciseInfo.js'


function TrainingPage({ exercise, videoPath, exerciseGroupName }) {
    if (!exercise) return null;

    const { selected, groupedVideos } = useSelected();
    const { setExerciseName, setExerciseIndex } = useName();

    const navigate = useNavigate();

    // console.log(ExerciseData[${exercise}].index());
    // Helper to get group name from exercise name
    function getGroupNameByExerciseName(name) {
        for (const group in ExerciseData) {
            if (ExerciseData[group][name]) return group;
        }
        return null;
    }

    const RealTimePage = (name) =>{
        navigate(AppRoutes.RealTimePage);
    }

    const TrailPage = (name) => {
        let tempname = name.replace(/\s+/g, '');
        const groupName = getGroupNameByExerciseName(tempname);
        // console.log("Tempname:", tempname);
        if (!groupName) {
            console.error("Group not found for", tempname);
            return;
        }

        const keys = Object.keys(ExerciseData[groupName]);
        // console.log("Keys:",keys);
        const indexExercise = keys.indexOf(tempname);
        let correctIndex = indexExercise + 1;
        setExerciseName(name);
        setExerciseIndex(correctIndex);

        console.log("Index:", indexExercise);
        navigate(AppRoutes.TrailPage);
    };


    return (
        <div className="bg-gray-950">
            <div className="workout ml-4 " style={{ marginRight: "450px" }}>
                <div className="mx-auto w-auto px-6 rounded-t-lg bg-mw-blue flex justify-between items-center"
                    style={{ backgroundColor: "rgb(32 64 154)", fontSize: "20px", marginTop: "20px", position: "sticky" }}>
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl py-3">
                        {exercise.name}
                    </h2>
                </div>

                {/* Videos */}
                <div className="video flex gap-6 justify-center mt-4">
                    {videoPath.map((video, i) => {
                        // console.log("Video Path:", video);
                        return (
                            <video key={i} autoPlay muted loop className="rounded-lg w-1/2 max-w-[450px]">
                                <source src={video + '.mp4'} type="video/mp4" />
                            </video>
                        );
                    })}
                </div>


                {/* Steps */}
                <div className="sm:pb-5 mt-5 relative lg:px-0 flex flex-col rounded-lg">
                    <dl className="my-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:gap-y-5 sm:flex flex-col">
                        {exercise.steps.map((step, index) => (
                            <div key={index} className="border-gray-200 flex items-center">
                                <dt className="font-medium text-gray-900 dark:text-white">
                                    <button
                                        className="bg-mw-blue-400 hover:bg-mw-blue-500 text-white px-5 py-2 rounded font-bold mt-5"
                                    >
                                        {index + 1}
                                    </button>
                                </dt>
                                <dd className="text-gray-500 font-medium bg-white pl-4 pr-1 py-2 sm:py-4 w-full rounded-lg">
                                    {step}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* TRY NOW Button */}

                    <div className="flex space-x-4 mt4">
                        <a onClick={() => TrailPage(exercise.name)}>
                            <button className="mt-4 px-5 py-2 rounded text-white font-bold space-x-7" style={{ backgroundColor: "rgb(32 64 154)" }}>
                                TRIAL
                            </button>
                        </a>
                        <a onClick={() => RealTimePage(exercise.name)}>
                            <button className="mt-4 px-5 py-2 rounded text-white font-bold space-y-11" style={{ backgroundColor: "rgb(32 64 154)" }}>
                                TRY NOW
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default TrainingPage;
