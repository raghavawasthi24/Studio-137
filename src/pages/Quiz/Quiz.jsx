import "./App.css";
import React, { useState } from "react";
import CustomSlider from "./CustomSlider.js";
function App() {
	let ques = [
		"I have ambitious aims of making a difference.",
		"My leadership journey has progressed as I anticipated.",
		"I have spent fewer than 4 years in full time service or ministry.",
	];

	const [quesNo, setQuesNo] = useState(1);
	const [quesContent, setQuesContent] = useState(ques[0]);
	const [sliderNone, setSliderNone] = useState(true);
	const [s1, setS1] = useState(true);
	const [s2, setS2] = useState(false);
	const [s3, setS3] = useState(false);
	const [s4, setS4] = useState(false);
	const [s5, setS5] = useState(false);
	const [q1, setQ1] = useState("s1");
	const [q2, setQ2] = useState("s1");
	const [q3, setQ3] = useState("s1");
	const handleQuestionChangeNext = () => {
		if (quesNo == 3) {
			if (s1) {
				setQ3("s1");
			} else if (s2) {
				setQ3("s2");
			} else if (s3) {
				setQ3("s3");
			} else if (s4) {
				setQ3("s4");
			} else if (s5) {
				setQ3("s5");
			}
			return;
		}
		if (quesNo == 1) {
			setQuesNo(2);
			setQuesContent(ques[1]);
			if (s1) {
				setQ1("s1");
			} else if (s2) {
				setQ1("s2");
			} else if (s3) {
				setQ1("s3");
			} else if (s4) {
				setQ1("s4");
			} else if (s5) {
				setQ1("s5");
			}

			if (q2 == "s1") {
				handleS1();
			} else if (q2 == "s2") {
				handleS2();
			} else if (q2 == "s3") {
				handleS3();
			} else if (q2 == "s4") {
				handleS4();
			} else if (q2 == "s5") {
				handleS5();
			}
		} else if (quesNo == 2) {
			setQuesNo(3);
			setQuesContent(ques[2]);

			if (s1) {
				setQ2("s1");
			} else if (s2) {
				setQ2("s2");
			} else if (s3) {
				setQ2("s3");
			} else if (s4) {
				setQ2("s4");
			} else if (s5) {
				setQ2("s5");
			}

			if (q3 == "s1") {
				handleS1();
			} else if (q3 == "s2") {
				handleS2();
			} else if (q3 == "s3") {
				handleS3();
			} else if (q3 == "s4") {
				handleS4();
			} else if (q3 == "s5") {
				handleS5();
			}
		}
	};

	const handleQuestionChangePrev = () => {
		if (quesNo == 2) {
			setQuesNo(1);
			setQuesContent(ques[0]);

			if (s1) {
				setQ2("s1");
			} else if (s2) {
				setQ2("s2");
			} else if (s3) {
				setQ2("s3");
			} else if (s4) {
				setQ2("s4");
			} else if (s5) {
				setQ2("s5");
			}

			if (q1 == "s1") {
				handleS1();
			} else if (q1 == "s2") {
				handleS2();
			} else if (q1 == "s3") {
				handleS3();
			} else if (q1 == "s4") {
				handleS4();
			} else if (q1 == "s5") {
				handleS5();
			}
		} else if (quesNo == 3) {
			setQuesNo(2);
			setQuesContent(ques[1]);

			if (s1) {
				setQ3("s1");
			} else if (s2) {
				setQ3("s2");
			} else if (s3) {
				setQ3("s3");
			} else if (s4) {
				setQ3("s4");
			} else if (s5) {
				setQ3("s5");
			}

			if (q2 == "s1") {
				handleS1();
			} else if (q2 == "s2") {
				handleS2();
			} else if (q2 == "s3") {
				handleS3();
			} else if (q2 == "s4") {
				handleS4();
			} else if (q2 == "s5") {
				handleS5();
			}
		} else {
			return;
		}
	};

	const handleS1 = () => {
		setS1(true);
		setS2(false);
		setS3(false);
		setS4(false);
		setS5(false);
	};

	const handleS2 = () => {
		setS2(true);
		setS1(false);
		setS3(false);
		setS4(false);
		setS5(false);
	};
	const handleS3 = () => {
		setS3(true);
		setS2(false);
		setS1(false);
		setS4(false);
		setS5(false);
	};
	const handleS4 = () => {
		setS4(true);
		setS2(false);
		setS3(false);
		setS1(false);
		setS5(false);
	};
	const handleS5 = () => {
		setS5(true);
		setS2(false);
		setS3(false);
		setS4(false);
		setS1(false);
	};
	return (
		<div className="App">
			<header id="header">
				<div
					className="assessment-title"
					id="assessment-title"
				>
					Are you Disillusioned?
				</div>
			</header>
			<main className="main-className">
				<div className="container assessment">
					<div>
						<div className="steps-container">
							<div>
								<div className="steps">
									<div className="spacer"></div>
									<div>
										<div className="progress-bar">
											<div className="bar-section">
												<div className="bar">
													<span
														className="MuiLinearProgress-root custom-bar css-7p5u54"
														role="progressbar"
													>
														<span
															className={`MuiLinearProgress-bar css-t752vm  ${
																quesNo == 1
																	? " p20"
																	: quesNo ==
																	  2
																	? " p40"
																	: " p60"
															}`}
														></span>
													</span>
												</div>
												<div className="section-title">
													IDEALISTIC
												</div>
											</div>
											<div className="bar-section">
												<div className="bar">
													<span
														className="MuiLinearProgress-root  custom-bar css-7p5u54"
														role="progressbar"
														aria-valuenow="20"
														aria-valuemin="0"
														aria-valuemax="100"
													>
														<span className=" disabled"></span>
													</span>
												</div>
												<div className="section-title-disabled">
													DISILLUSIONED
												</div>
											</div>
											<div className="bar-section">
												<div className="bar">
													<span
														className="MuiLinearProgress-root custom-bar css-7p5u54"
														role="progressbar"
														aria-valuenow="20"
														aria-valuemin="0"
														aria-valuemax="100"
													>
														<span className=" disabled"></span>
													</span>
												</div>
												<div className="section-title-disabled">
													CYNICAL
												</div>
											</div>
											<div className="bar-section">
												<div className="bar">
													<span
														className="MuiLinearProgress-root custom-bar css-7p5u54"
														role="progressbar"
														aria-valuenow="20"
														aria-valuemin="0"
														aria-valuemax="100"
													>
														<span className="disabled"></span>
													</span>
												</div>
												<div className="section-title-disabled">
													HOPEFUL
												</div>
											</div>
										</div>
									</div>
									<div className="progress-indicator">
										<strong>{quesNo}</strong>/20
									</div>

									<div>
										<div className="question">
											<p>{quesContent}</p>
										</div>
										<CustomSlider
											quesNo={quesNo}
											setQuesNo={setQuesNo}
											quesContent={quesContent}
											setQuesContent={setQuesContent}
											sliderNone={sliderNone}
											setSliderNone={setSliderNone}
											s1={s1}
											s2={s2}
											s3={s3}
											s4={s4}
											s5={s5}
											setS1={setS1}
											setS2={setS2}
											setS3={setS3}
											setS4={setS4}
											setS5={setS5}
											q1={q1}
											setQ1={setQ1}
											q2={q2}
											setQ2={setQ2}
											q3={q3}
											setQ3={setQ3}
											handleS1={handleS1}
											handleS2={handleS2}
											handleS3={handleS3}
											handleS4={handleS4}
											handleS5={handleS5}
										/>
									</div>
									<div className="step-buttons">
										<button
											onClick={handleQuestionChangePrev}
											className="  css-1ujsas3"
											tabindex="0"
											type="button"
										>
											<svg
												width="28"
												height="15"
												viewBox="0 0 28 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M27 7.5H2"
													stroke="#4A4A4A"
													stroke-width="1.5"
													stroke-linecap="square"
												/>
												<path
													d="M7.19653 1.13818L0.834688 7.50003L7.19653 13.8619"
													stroke="#4A4A4A"
													stroke-width="1.5"
												/>
											</svg>
											&nbsp;&nbsp;<span>Prev</span>
											<span className="MuiTouchRipple-root css-w0pj6f"></span>
										</button>
										<button
											onClick={handleQuestionChangeNext}
											className="css-1ujsas3"
											tabindex="-1"
											type="button"
											disabled=""
										>
											<span>Next</span>&nbsp;&nbsp;
											<svg
												width="28"
												height="15"
												viewBox="0 0 28 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 7.5H26"
													stroke="#4A4A4A"
													stroke-width="1.5"
													stroke-linecap="square"
												/>
												<path
													d="M20.8035 1.13818L27.1653 7.50003L20.8035 13.8619"
													stroke="#4A4A4A"
													stroke-width="1.5"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;