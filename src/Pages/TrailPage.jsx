import React, { useRef, useEffect, useState } from "react";
import { useSelected } from "../Components/SelectedContext.jsx";
import { useName } from "../Components/SelectedExerciseTypeContext.jsx";
import ExerciseData from "../Components/ExerciseInfo.js";
import { useNavigate } from "react-router-dom";

function TrailPage() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [count, setCount] = useState(0);
    const [angles, setAngles] = useState([0, 0]);
    const downRef = useRef(false);
    const [error, setError] = useState("");

    const { selected } = useSelected();
    const { exerciseName,exerciseIndex } = useName();
    let actualIndex = "";
    if (exerciseIndex >= 0 && exerciseIndex < 10) {
        actualIndex = "0" + exerciseIndex;
    }
    else {
        actualIndex = exerciseIndex;
    }
    const video_path = `/${selected}/VIDEO${actualIndex}01.mp4`;
    // console.log("videoPath:" ,video_path );
    let tempName = exerciseName.replace(/\s+/g, "");

    // console.log("Selected Page:", selected);
    // console.log("Exercise Name:", tempName);
    // console.log("ExerciseData[selected]:", ExerciseData[selected]);
    // console.log("ExerciseData[selected][exerciseName]:", ExerciseData[selected]?.[tempName]);

    const exerciseInfo = ExerciseData[selected]?.[tempName];
    // console.log("ExerciseName:",exerciseInfo);
    const ReqAngle1 = Number(exerciseInfo?.angle1);
    const ReqAngle2 = Number(exerciseInfo?.angle2);
    const ReqAngle3 = Number(exerciseInfo?.angle3);
    const ReqAngle4 = Number(exerciseInfo?.angle4);

    // console.log("ReqAngle1:", ReqAngle1)
    // console.log("ReqAngle3:",ReqAngle3)

    const findAngle = (lmList, p1, p2, p3, width, height) => {
        // console.log(p1,p2,p3)
        const x1 = lmList[p1].x * width;
        const y1 = lmList[p1].y * height;
        const x2 = lmList[p2].x * width;
        const y2 = lmList[p2].y * height;
        const x3 = lmList[p3].x * width;
        const y3 = lmList[p3].y * height;

        let angle = Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y1 - y2, x1 - x2);
        angle = Math.abs((angle * 180) / Math.PI);
        return angle > 180 ? 360 - angle : angle;
    };

    const detectAngleForLateral = (angle1,angle2) =>{
        if (angle1 < ReqAngle1 || angle2 < ReqAngle2 ){
            downRef.current = false;
            console.log("Down");
        }else if(downRef.current && angle1 > ReqAngle3 || angle2 > ReqAngle4){
            setCount((prev) => prev + 1);
            console.log("Up")
            downRef.current = true;
        }
        setAngles([Math.round(angle1),Math.round(angle2)]);
    }

    const detectAngle = (angle1, angle2) => {
        if (angle1 < ReqAngle1 && angle2 < ReqAngle2) {
            downRef.current = true;
            console.log("Down");
        } else if (downRef.current && angle1 > ReqAngle3 && angle2 > ReqAngle4) {
            setCount((prev) => prev + 1);
            console.log("Up");
            downRef.current = false;
        }
        setAngles([Math.round(angle1), Math.round(angle2)]);
    };

    useEffect(() => {
        let animationId;

        const loadScripts = async () => {
            return new Promise((resolve, reject) => {
                if (window.Pose && window.drawConnectors && window.drawLandmarks) {
                    return resolve();
                }

                const poseScript = document.createElement("script");
                poseScript.src = "https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js";
                poseScript.crossOrigin = "anonymous";

                const drawScript = document.createElement("script");
                drawScript.src =
                    "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js";
                drawScript.crossOrigin = "anonymous";

                let loaded = 0;
                const checkLoaded = () => {
                    loaded++;
                    if (loaded === 2) resolve();
                };

                poseScript.onload = checkLoaded;
                drawScript.onload = checkLoaded;

                poseScript.onerror = reject;
                drawScript.onerror = reject;

                document.body.appendChild(poseScript);
                document.body.appendChild(drawScript);
            });
        };

        const setupPose = async () => {
            await loadScripts();

            const pose = new window.Pose({
                locateFile: (file) =>
                    `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
            });

            pose.setOptions({
                modelComplexity: 1,
                smoothLandmarks: true,
                enableSegmentation: false,
                minDetectionConfidence: 0.9,
                minTrackingConfidence: 0.3,
            });

            pose.onResults((results) => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                const video = videoRef.current;

                if (!results.poseLandmarks || !canvas || !video) return;

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // console.log("selectedExercis:",selected);
                // console.log("exerciseName:" ,exerciseName);

                
                const lmList = results.poseLandmarks;

                const coordinates1 = ExerciseData[selected]?.[tempName]?.coordinates?.FirstSide;
                const coordinates2 = ExerciseData[selected]?.[tempName]?.coordinates?.SecondSide;

                if (!coordinates1 || !coordinates2) {
                    console.error("Coordinates not found for", selected, tempName);
                    return;
                }
                let a1 = coordinates1[0];
                let a2 = coordinates1[1];
                let a3 = coordinates1[2];

                let b1 = coordinates2[0];
                let b2 = coordinates2[1];
                let b3 = coordinates2[2];

                const rightAngle = findAngle(
                    lmList,
                    a1,
                    a2,
                    a3,
                    canvas.width,
                    canvas.height
                );
                const leftAngle = findAngle(
                    lmList,
                    b1,
                    b2,
                    b3,
                    canvas.width,
                    canvas.height
                );
                if (tempName === "DumbbellRowUnilateral"){
                    detectAngle(rightAngle,leftAngle);
                    console.log("DumbbellRowUnilateral")
                }
                else{
                    detectAngle(rightAngle, leftAngle);
                }
                

                ctx.strokeStyle = "blue";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(lmList[a1].x * canvas.width, lmList[a1].y * canvas.height);
                ctx.lineTo(lmList[a2].x * canvas.width, lmList[a2].y * canvas.height);
                ctx.lineTo(lmList[a3].x * canvas.width, lmList[a3].y * canvas.height);
                ctx.moveTo(lmList[b1].x * canvas.width, lmList[b1].y * canvas.height);
                ctx.lineTo(lmList[b2].x * canvas.width, lmList[b2].y * canvas.height);
                ctx.lineTo(lmList[b3].x * canvas.width, lmList[b3].y * canvas.height);
                ctx.stroke();

                const drawPoint = (x, y) => {
                    ctx.beginPath();
                    ctx.arc(x, y, 6, 0, 2 * Math.PI);
                    ctx.fillStyle = "red";
                    ctx.fill();
                };

                drawPoint(lmList[a1].x * canvas.width, lmList[a1].y * canvas.height);
                drawPoint(lmList[a2].x * canvas.width, lmList[a2].y * canvas.height);
                drawPoint(lmList[a3].x * canvas.width, lmList[a3].y * canvas.height);
                drawPoint(lmList[b1].x * canvas.width, lmList[b1].y * canvas.height);
                drawPoint(lmList[b2].x * canvas.width, lmList[b2].y * canvas.height);
                drawPoint(lmList[b3].x * canvas.width, lmList[b3].y * canvas.height);
            });

            const detectFrame = () => {
                if (!videoRef.current.paused && !videoRef.current.ended) {
                    pose.send({ image: videoRef.current }).then(() => {
                        animationId = requestAnimationFrame(detectFrame);
                    });
                }
            };

            detectFrame();
        };

        const initializeVideo = async () => {
            const video = videoRef.current;
            if (video) {
                // Construct the video path
                const videoPath =  video_path// Adjust as needed
                console.log("Video Path:", videoPath);
                video.src = videoPath;

                await video.play();
                setupPose();
            }
        };

        initializeVideo();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    const initializeVideo = async () => {
        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.error("Error playing the video:", error);
                });
            }
        }, []);
    };

    initializeVideo();

    return (
        <div
            // style={{
            //     position: "relative",
            //     width: "800px",
            //     height: "800px",
            //     margin: "auto",
            //     marginTop: "10",
            // }}
        >
            

            <canvas
                ref={canvasRef}
                width="800"
                height="800"
                style={{
                    position: "absolute",
                    top: 10,
                    left: 150,
                    zIndexb: 11,
                    pointeb2vents: "none",
                    width:"75%",
                    height:"75%"
                }}
            ></canvas>

            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", /* Semi-transparent background */
                    padding: "10px",
                    borderRadius: "10px",
                    width: "300px",  /* Set a fixed width */
                    textAlign: "left", /* Align text properly */
                    whiteSpace: "nowrap"
                }}
            >
                <p>Count: {count}</p>
                <p>Left Armpit Angle: {angles[1]}°</p>
                <p>Right Armpit Angle: {angles[0]}°</p>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}

export default TrailPage;
