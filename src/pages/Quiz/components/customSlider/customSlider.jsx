import React from "react";
import "./customSlider.css";
const CustomSlider = ({
	s1,
	s2,
	s3,
	s4,
	s5,

	handleS1,
	handleS2,
	handleS3,
	handleS4,
	handleS5,
}) => {
	return (
		<div className="slider-container">
			<div class="slider">
				<span class="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root custom-slider css-exkjcx">
					<span class="MuiSlider-rail css-b04pc9"></span>
					<span
						class={`MuiSlider-track css-1t2bqnt ${
							s1
								? "track-0"
								: s2
								? "track-25"
								: s3
								? "track-50"
								: s4
								? "track-75"
								: s5
								? "track-100"
								: " "
						}`}
					></span>
					<span
						data-index="0"
						class={`MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp 
						 ${
								s1
									? "thumb-0"
									: s2
									? "thumb-25"
									: s3
									? "thumb-50"
									: s4
									? "thumb-75"
									: s5
									? "thumb-100"
									: " "
							}`}
					></span>
				</span>

				<div class="slider-points">
					<a class="point point1"></a>
					<a class="point point2"></a>
					<a class="point point3"></a>
					<a class="point point4"></a>
					<a class="point point5"></a>
				</div>
				<span
					class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate custom-bar css-7p5u54"
					role="progressbar"
					aria-valuenow="0"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					<span class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm-slider"></span>
				</span>
			</div>
			<div class="slider-labels">
				<div class={`label1 ${s1 ? "active" : ""} `}>
					<p
						class="label-text"
						onClick={handleS1}
					>
						Strongly Disagree
					</p>
				</div>
				<div class={`label2 ${s2 ? "active" : ""} `}>
					<p
						class="label-text"
						onClick={handleS2}
					>
						Disagree
					</p>
				</div>
				<div class={`label3 ${s3 ? "active" : ""} `}>
					<p
						class="label-text"
						onClick={handleS3}
					>
						Neutral
					</p>
				</div>
				<div class={`label4 ${s4 ? "active" : ""} `}>
					<p
						class="label-text"
						onClick={handleS4}
					>
						Agree
					</p>
				</div>
				<div class={`label5 ${s5 ? "active" : ""} `}>
					<p
						class="label-text"
						onClick={handleS5}
					>
						Strongly Agree
					</p>
				</div>
			</div>
		</div>
	);
};

export default CustomSlider;
