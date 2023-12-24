import React, { useEffect, useState } from "react";
import forwardIcon from "../../assests/forward.svg";
import backIcon from "../../assests/back.svg";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

let customQuestions = [
    { Statement: "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.", num: 1 },
    {
        Statement: "Our leadership team knows of the potential risks and rewardsof leveraging AI.",
        num: 2,
    },
    {
        Statement:
            "Our leadership team understands the value of tapping experts to educate our staff about AI.",
        num: 3,
    },
    {
        Statement:
            "Our leadership team understands the value of tapping experts to educate our staff about AI.",
        num: 4,
    },
    {
        Statement:
            "Our s to educate our staff about AI.",
        num: 5,
    },
    {
        Statement:
            "Our leadership team understands the value of e our staff about AI.",
        num: 6,
    },
];

function Quiz() {
    const [isSmallScreen, setSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);
    const navigate = useNavigate();

    const handleNavigationClick = () => {
        navigate("/");
    }

    useEffect(() => {
        const handleScreenSizeChange = (e) => setSmallScreen(e.matches);
        const mediaQueryList = window.matchMedia("(max-width: 768px)");

        mediaQueryList.addEventListener('change', handleScreenSizeChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleScreenSizeChange);
        };
    }, []);

    const [currentQuestionNum, setCurrentQuestionNum] = useState(1);

    const [progressBars, setProgressBars] = useState([
        { name: "STRATEGY", score: 20, key: 1 },
        { name: "UNDERSTANDING", score: 0, key: 2 },
        { name: "APPLICATION", score: 0, key: 3 },
        { name: "DIRECTION", score: 0, key: 4 },
    ]);

    const [sliderValue, setSliderValue] = useState("0");
    const [responseRecords, setResponseRecords] = useState([]);

    function handleQuestionNavigation(direction) {
        let matchingRecord = checkMatchingRecord(currentQuestionNum);

        if (
            direction === "forward" &&
            currentQuestionNum !== 6 &&
            matchingRecord.length > 0
        ) {
            let nextQuestionRecord = checkMatchingRecord(currentQuestionNum + 1);

            if (nextQuestionRecord.length > 0) {
                setSliderValue(nextQuestionRecord[0].sliderValue);
            } else {
                setSliderValue("0");
            }

            handleProgressBarUpdate("Increase");
            setCurrentQuestionNum((prev) => prev + 1);
        } else if (direction === "back" && currentQuestionNum !== 1) {
            let previousQuestionRecord = checkMatchingRecord(currentQuestionNum - 1);
            setSliderValue(previousQuestionRecord[0].sliderValue);
            handleProgressBarUpdate("Decrease");
            setCurrentQuestionNum((prev) => prev - 1);
        } else if (direction === "back" && currentQuestionNum === 1) {
            handleNavigationClick();
        }
    }

    function handleSliderChange(event) {
        if (responseRecords.length === 0) {
            setResponseRecords([
                { ques: currentQuestionNum, sliderValue: event.target.value },
            ]);
        } else {
            let matchingRecord = checkMatchingRecord(currentQuestionNum);

            if (matchingRecord.length > 0) {
                setResponseRecords((prev) =>
                    prev.map((element) =>
                        element.ques === currentQuestionNum
                            ? { ...element, sliderValue: event.target.value }
                            : { ...element }
                    )
                );
            } else {
                setResponseRecords((prev) => [
                    ...prev,
                    { ques: currentQuestionNum, sliderValue: event.target.value },
                ]);
            }
        }

        setSliderValue(event.target.value);
        setTimeout(() => {
            setSliderValue("0");
        }, 250);

        if (currentQuestionNum !== 6) {
            handleProgressBarUpdate("Increase");
            setCurrentQuestionNum((prev) => prev + 1);
        }
    }

    function checkMatchingRecord(num) {
        return responseRecords.filter((element) => num === element.ques);
    }

    let currentQuestionStatement = customQuestions.filter(
        (element) => currentQuestionNum === element.num
    );

    function handleProgressBarUpdate(state) {
        if (state === "Increase") {
            setProgressBars((prev) =>
                prev.map((element) =>
                    element.name === "STRATEGY"
                        ? { ...element, score: element.score + 20 }
                        : { ...element }
                )
            );
        } else {
            setProgressBars((prev) =>
                prev.map((element) =>
                    element.name === "STRATEGY"
                        ? { ...element, score: element.score - 20 }
                        : { ...element }
                )
            );
        }
    }

    return (
        <section className="CustomQuestionnaire">
            <div className="QuestionnaireContainer">
                {isSmallScreen && (
                    <div className="ProgressBars2">
                        <p className="progress-percent-text" variant="determinate" style={{ marginLeft: `${currentQuestionNum === 6 ? `calc(${(17 * currentQuestionNum) + 3}% - 2ch)` : `calc(${17 * currentQuestionNum}% - 2ch)`}`, marginBottom: "0px" }}>
                            {progressBars[0].score - 14 * currentQuestionNum}%
                        </p>
                    </div>
                )}
                {!isSmallScreen && (
                    <div className="ProgressBars2">
                        <p className="progress-percent-text" variant="determinate" style={{ marginLeft: `${currentQuestionNum === 1 ? `calc(${progressBars[0].score - 14 * currentQuestionNum - 2}% - 2ch)` : `calc(${progressBars[0].score - 14 * currentQuestionNum - 4}% - 2ch)`}`, marginBottom: "0px" }}>
                            {progressBars[0].score - 14 * currentQuestionNum}%
                        </p>
                    </div>
                )}
                <div className="ProgressBars">
                    {progressBars.map((element) => (
                        <div style={{ display: `${isSmallScreen && element.name !== "STRATEGY" ? "none" : "flex"}` }} key={element.key} className="ProgressBarWrapper">
                            <progress id={element.name} max="100" value={element.score}></progress>
                            <label style={{ color: `${element.name === "STRATEGY" ? "rgb(110, 12, 249)" : "black"}`, marginTop: "12px" }} htmlFor={element.name}>
                                {element.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="QuestionNumber">
                    <p>{currentQuestionNum} / 6</p>
                </div>
                <p className="QuestionStatement">{currentQuestionStatement[0].Statement}</p>
                <div className="SliderWrapper">
                    <input
                        id="Slider"
                        step={25}
                        value={sliderValue}
                        type="range"
                        list="sliderOptions"
                        onChange={handleSliderChange}
                    />
                    <datalist id="sliderOptions">
                        <option value="0" label="Strongly Disagree"></option>
                        <option value="25" label="Disagree"></option>
                        <option value="50" label="Neutral"></option>
                        <option value="75" label="Agree"></option>
                        <option value="100" label="Strongly Agree"></option>
                    </datalist>
                </div>
                <div className="NavigationButtons">
                    <div
                        onClick={() => {
                            handleQuestionNavigation("back");
                        }}
                        className="ButtonWrapper"
                    >
                        <img src={backIcon} alt="Back arrow" />
                        <p>PREV</p>
                    </div>
                    {checkMatchingRecord(currentQuestionNum).length > 0 && currentQuestionNum !== 6 && (
                        <div
                            onClick={() => {
                                handleQuestionNavigation("forward");
                            }}
                            className="ButtonWrapper"
                        >
                            <p style={{ borderBottom: "1px solid rgb(110, 12, 249)" }}>NEXT</p>
                            <img src={forwardIcon} alt="Forward arrow" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Quiz;
