const ExerciseData = {
    ChestPressPage: {
        PushUps: {
            name: "Push Ups",
            steps: [
                " Place your hands firmly on the ground, directly under shoulders.",
                " Flatten your back so your entire body is straight and slowly lower your body",
                " Draw shoulder blades back and down, keeping elbows tucked close to your body",
                " Exhale as you push back to the starting position."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [12,14,16], //right-hand
                SecondSide: [11,13,15]//left-hand
            }
        },
        KneePushUps: {
            name: "Knee Push Ups",
            steps: [
                " Begin in a push-up position on your knees. Break at the elbow and shoulder joint.",
                " Lower your body, keeping elbows close.",
                " Push back up to the starting position."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [12,14,16], //right-hand
                SecondSide: [11,13,15]//left-hand
            }
        }
    },
    AbdominalsPage: {
        LayingLegRaises: {
            name: "Laying Leg Raises",
            steps: [
                " Lay on your back with your arms palms down on either side.",
                " Keep your legs together and as straight as possible.",
                " Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down.",
                " Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise."
            ],
            angle1: "90",
            angle2: "90",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [12,24,26], //right-hip-side
                SecondSide: [11,23,25]//left-hip-side
            }
        },
        CableRowBarKneelingCrunch: {
            name: "Cable Row Bar Kneeling Crunch",
            steps: [
                "Use a double handle attachment and set the cable all the way to the top.",
                "Walk a few steps forward then fall into a kneeling position.",
                "Push your hips back and flex your abs, then push hips forward until in the starting position."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [12,24,26], //right-hip-side
                SecondSide: [11,23,25]//left--hip-side
            }
        }
    },
    BicepsPage: {
        DumbbellCurls: {
            name: "Dumbbell Curls",
            steps: [
                " Grab the bar shoulder width apart with a supinated grip (palms facing you)",
                " With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.",
                " Slowly return to starting position. Repeat."
            ],
            angle1: "70",
            angle2: "70",
            angle3: "160",
            angle4: "160",
            coordinates: {
                FirstSide: [12,14,16], //right-hand
                SecondSide: [11,13,15] //left-hand
            }
        },
        DumbbellHammerCurl: {
            name: "Dumbbell Hammer Curl",
            steps: [
                " Hold the dumbbells with a neutral grip (thumbs facing the ceiling).",
                " Slowly lift the dumbbell up to chest height",
                " Return to starting position and repeat."
            ],
            angle1: "70",
            angle2: "70",
            angle3: "160",
            angle4: "160",
            coordinates: {
                FirstSide: [12,14,16], //left-hand
                SecondSide: [11,13,15] //right-hand
            }
        }
    },
    CalvesPage: {
        CalfRaises: {
            name: "Calf Raises",
            steps: [
                " Balance on the balls of your feet on the platform or plates, leaning forward to use the wall to assist with balance.",
                " Lower the heels of your feet towards the ground and pause, then push through the balls of your feet like you are standing tip toe, pausing at the apex of the motion.",
                " Repeat as necessary."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [11,13,15], //right-leg
                SecondSide: [12,14,16]//left-leg
            }
        },
        DumbbellCalfRaise: {
            name: "Dumbbell Calf Raise",
            steps: [
                " Stand tall with your feet on the ground. You can put the the balls of your feet on top of a plate to extend the range of motion.",
                " Imagine you have a string attached to your heels and pull your heels up toward the ceiling.",
                " Push your hips back and flex your abs, then push hips forward until in the starting position."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [11,13,15], //right-leg
                SecondSide: [12,14,16]//left-leg
            }
        }
    },
    ForeArmsPage: {
        DumbbellRowUnilateral: {
            name: "Dumbbell Row Unilateral",
            steps: [
                " Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back",
                " Try to get your torso to parallel with the ground. That will extend your range of motion.",
                " Let your arm hang freely and then pull your elbow back. Imagine you've got a tennis ball in your armpit and squeeze it each rep."
            ],
            angle1: "70",
            angle2: "70",
            angle3: "175",
            angle4: "175",
            coordinates: {
                FirstSide: [11,13,15], //right-hand
                SecondSide: [12,14,16]//left-hand
            }
        },
        DumbbellReverseCurl: {
            name: "Dumbbell Reverse Curl",
            steps: [
                " Grab the dumbbells with a pronated (overhand) grip. You can do this exercise thumbless if it's more comfortable on your wrists.",
                " Flex at the elbows until your biceps touch your forearms. Try not to let your elbows flair outward."
            ],
            angle1: "70",
            angle2: "70",
            angle3: "175",
            angle4: "175",
            coordinates: {
                FirstSide: [11,13,15], //right-leg
                SecondSide: [12,14,16]//left-leg
            }
        }
    },
    HandsPage: {
        PlatePinchGripDeadlift: {
            name: "Plate Pinch Grip Deadlift",
            steps: [
                " Stand facing the plate with your feet shoulder-width apart and the plate positioned between your feet.",
                " Bend down and grasp the plate from the top edges with both hands, making sure your thumbs and fingers are evenly spaced.",
                " Keep your back straight, chest up and core engaged, and stand up with the plate, keeping it close to your body.",
                " Lower the plate back down to the ground, keeping control and maintaining good posture."
            ],
            angle1: "125",
            angle2: "125",
            angle3: "160",
            angle4: "160",
            coordinates: {
                FirstSide: [24,26,28], //right-leg
                SecondSide: [23,25,27] //left-leg
            }
        },
        BarbellSuitcaseDeadlift: {
            name: "Barbell Suitcase Deadlift",
            steps: [
                " Begin by standing with your feet hip-width apart and holding a barbell at one side of your body, with your palms facing your thighs.",
                " Keeping your core engaged and your back straight, bend at the hips and knees to lower the barbell down towards the ground.",
                " As the barbell reaches the ground, use your legs and glutes to push through your heels and extend your hips and knees to raise your body back to the starting position",
                " Repeat the movement for the desired number of reps, then switch sides and repeat the exercise with the barbell on the opposite side of your body."
            ],
            angle1: "110",
            angle2: "110",
            angle3: "165",
            angle4: "160",
            coordinates: {
                FirstSide: [24,26,28], //right-leg
                SecondSide: [23,25,27] //left-leg
            }
        }
    },
    ObliquePage: {
        BarbellSilverbackShrug: {
            name: "Barbell Silverback Shrug",
            steps: [
                " Stand with a shoulder width stance. Begin with the dumbbell near one of your quads.",
                " Rotate at your upper spine to engage the obliques.",
                " You can pivot your back foot to keep from generating too much torque at the knee."
            ],
            angle1: "60",
            angle2: "60",
            angle3: "175",
            angle4: "175",
            coordinates: {
                FirstSide: [12,14,16], //right-hand
                SecondSide: [11,13,15] //left-hand
            }
        }
    },
    QuadsPage: {
        BarbellSquat: {
            name: "Barbell Squat",
            steps: [
                " Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.",
                " Grip the bar across your shoulders and support it on your upper back. Unrack the bar by straightening your legs, and take a step back.",
                " Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.",
                " Raise the bar back to starting position, lift with your legs and exhale at the top."
            ],
            angle1: "90",
            angle2: "90",
            angle3: "160",
            angle4: "160",
            coordinates: {
                FirstSide: [24,26,28], //right-leg
                SecondSide: [23,25,27]//left-leg
            }
        },
        DumbbellGobletSquat: {
            name: "Dumbbell Goblet Squat",
            steps: [
                " Hold the weight tucked into your upper chest area, keeping your elbows in. Your feet should be slightly wider than shoulder width.",
                " Sink down into the squat, keeping your elbows inside the track of your knees.",
                " Push through your heels while keeping your chest up and return to starting position."
            ],
            angle1: "95",
            angle2: "95",
            angle3: "170",
            angle4: "170",
            coordinates: {
                FirstSide: [24,26,28], //right-leg
                SecondSide: [23,25,27] //left-leg
            }
        }
    },
    FrontShouldersPage: {
        DumbbellSeatedOverheadPress: {
            name: "Dumbbell Seated Overhead Press",
            steps: [
                " Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.",
                " Raise the dumbbells upwards and pause at the contracted position.",
                " Lower the weights back to starting position."
            ],
            angle1: "70",
            angle2: "70",
            angle3: "140",
            angle4: "140",
            coordinates: {
                FirstSide: [11,13,15], //right-leg
                SecondSide: [12,14,16]//left-leg
            }
        },
        DumbbellLateralRaise: {
            name: "Dumbbell Lateral Raise",
            steps: [
                " Slowly return your arms down to starting position.",
                " Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion.",
                " Stand up straight with dumbbells at either side, palms facing your hips"
            ],
            angle1: "",
            angle2: "20",
            angle3: "95",
            angle4: "95",
            coordinates: {
                FirstSide: [24,12,14], //right-leg
                SecondSide: [23,11,13]//left-leg
            }
        }
    },
    TrapsPage: {
        BarbellSilverbackShrug: {
            name: "Barbell Silverback Shrug",
            steps: [
                " Release the shrug.",
                " Engage your shoulder blades, as if you are trying to touch them together.",
                " Bend forward at the hips with a slight bend in your knees, keeping your back straight.",
                " Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width"
            ],
            angle1: "50",
            angle2: "50",
            angle3: "165",
            angle4: "165",
            coordinates: {
                FirstSide: [11,13,15], //right-leg
                SecondSide: [12,14,16]//left-leg
            }
        },
        BarbellUprightRow: {
            name: "Barbell Upright Row",
            steps: [
                " Take a double overhand roughly shoulder width grip",
                " Pull your elbows straight up the ceiling. Aim to get the bar to chin level or slightly higher."
            ],
            angle1: "50",
            angle2: "50",
            angle3: "170",
            angle4: "170",
            coordinates: {
                FirstSide: [12,14,16], //right-hand
                SecondSide: [11,13,15] //left-hand
            }
        }
    }
};

export default ExerciseData;
