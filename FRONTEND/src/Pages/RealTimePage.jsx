import React, { useRef, useEffect, useState } from "react";
import { useSelected } from "../Components/SelectedContext.jsx";
import { useName } from "../Components/SelectedExerciseTypeContext.jsx";
import ExerciseData from "../Components/ExerciseInfo.js";

function RealTimePage() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const downRef = useRef(false);
    const [count, setCount] = useState(0);
    const [angles, setAngles] = useState([0, 0]);
    const { selected } = useSelected();
    const { exerciseName } = useName();
    let tempName = exerciseName.replace(/\s+/g, "");

    const exerciseInfo = ExerciseData[selected]?.[tempName];
    const ReqAngle1 = Number(exerciseInfo?.angle1);
    const ReqAngle2 = Number(exerciseInfo?.angle2);
    const ReqAngle3 = Number(exerciseInfo?.angle3);
    const ReqAngle4 = Number(exerciseInfo?.angle4);

    const detectAngle = (angle1, angle2) => {
        if (angle1 < ReqAngle1 && angle2 < ReqAngle2) {
            downRef.current = true;
        } else if (downRef.current && angle1 > ReqAngle3 && angle2 > ReqAngle4) {
            setCount((prev) => prev + 1);
            downRef.current = false;
        }
        setAngles([Math.round(angle1), Math.round(angle2)]);
    };

    const findAngle = (lmList, p1, p2, p3, width, height) => {
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

    useEffect(() => {
        let pose = null;
        let animationId;

        const loadScripts = () => {
            return new Promise((resolve, reject) => {
                if (window.Pose && window.drawConnectors && window.drawLandmarks) return resolve();

                const poseScript = document.createElement("script");
                poseScript.src = "https://cdn.jsdelivr.net/npm/@mediapipe/pose";
                const drawingScript = document.createElement("script");
                drawingScript.src = "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils";

                poseScript.onload = () => {
                    drawingScript.onload = resolve;
                    drawingScript.onerror = reject;
                    document.body.appendChild(drawingScript);
                };
                poseScript.onerror = reject;
                document.body.appendChild(poseScript);
            });
        };

        const setupCamera = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            return new Promise((resolve) => {
                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play();
                    resolve();
                };
            });
        };

        const startApp = async () => {
            await loadScripts();
            await setupCamera();

            pose = new window.Pose({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
            });

            pose.setOptions({
                modelComplexity: 1,
                smoothLandmarks: true,
                enableSegmentation: false,
                minDetectionConfidence: 0.6,
                minTrackingConfidence: 0.6,
            });

            pose.onResults((results) => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                const video = videoRef.current;

                if (!results.poseLandmarks || !canvas || !video) return;

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const lmList = results.poseLandmarks;
                const coordinates1 = ExerciseData[selected]?.[tempName]?.coordinates?.FirstSide;
                const coordinates2 = ExerciseData[selected]?.[tempName]?.coordinates?.SecondSide;

                if (!coordinates1 || !coordinates2) return;

                const [a1, a2, a3] = coordinates1;
                const [b1, b2, b3] = coordinates2;

                const rightAngle = findAngle(lmList, a1, a2, a3, canvas.width, canvas.height);
                const leftAngle = findAngle(lmList, b1, b2, b3, canvas.width, canvas.height);
                detectAngle(rightAngle, leftAngle);

                const drawPoints = (p1, p2, p3) => {
                    ctx.beginPath();
                    ctx.moveTo(lmList[p1].x * canvas.width, lmList[p1].y * canvas.height);
                    ctx.lineTo(lmList[p2].x * canvas.width, lmList[p2].y * canvas.height);
                    ctx.lineTo(lmList[p3].x * canvas.width, lmList[p3].y * canvas.height);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 4;
                    ctx.stroke();

                    [p1, p2, p3].forEach((p) => {
                        ctx.beginPath();
                        ctx.arc(lmList[p].x * canvas.width, lmList[p].y * canvas.height, 6, 0, 2 * Math.PI);
                        ctx.fillStyle = "red";
                        ctx.fill();
                    });
                };

                drawPoints(a1, a2, a3);
                drawPoints(b1, b2, b3);
            });

            const detectFrame = async () => {
                if (!videoRef.current.paused && !videoRef.current.ended) {
                    await pose.send({ image: videoRef.current });
                    animationId = requestAnimationFrame(detectFrame);
                }
            };

            detectFrame();
        };

        startApp().catch(console.error);
        return () => cancelAnimationFrame(animationId);
    }, [selected, exerciseName]);

    return (
        <div>
            <h1>Real-Time Exercise Detector</h1>
            <div style={{ position: "relative", width: "800px", height: "600px" }}>
                <video
                    ref={videoRef}
                    muted
                    style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}
                />
                <canvas
                    ref={canvasRef}
                    style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "300px",
                }}
            >
                <p>Count: {count}</p>
                <p>Left Armpit Angle: {angles[1]}°</p>
                <p>Right Armpit Angle: {angles[0]}°</p>
            </div>
        </div>
    );
}

export default RealTimePage;
