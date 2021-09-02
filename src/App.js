import React, { useState } from "react";
import "./styles.css";

export default function App() {
	const [outputTxt, setOutputTxt] = useState("");

	function onChangeHandler() {
		var initialPrice = Number.parseFloat(
			document.getElementById("inputInitialPrice").value
		);
		var quantity = Number.parseFloat(
			document.getElementById("inputQuantity").value
		);
		var currentPrice = Number.parseFloat(
			document.getElementById("inputCurrentPrice").value
		);

		if (initialPrice === currentPrice) {
			output.style.color = "black";
			setOutputTxt("No Change in Value!");
		} else if (
			initialPrice === "" ||
			quantity === "" ||
			currentPrice === ""
		) {
			setOutputTxt("");
		} else if (
			initialPrice !== "" &&
			quantity >= 0 &&
			currentPrice !== ""
		) {
			var numChange = (quantity * (currentPrice - initialPrice)).toFixed(
				2
			);
			var percentChange = Math.trunc(
				(100 * (currentPrice - initialPrice)) / initialPrice
			);
			var outputDisplay = "";
			if (numChange < 0) {
				output.style.color = "red";
				outputDisplay =
					"😭 There is an Overall Loss of " +
					Math.abs(numChange) +
					" and the percent loss is of " +
					Math.abs(percentChange) +
					"% 😭";
				setOutputTxt(outputDisplay);
			} else if (numChange > 0) {
				output.style.color = "green";
				outputDisplay =
					"🤩 There is an Overall Profit of " +
					numChange +
					" and the percent profit is of " +
					percentChange +
					"% 🤩";
				setOutputTxt(outputDisplay);
			} else {
				setOutputTxt("");
			}
		} else if (quantity < 0) {
			output.style.color = "black";
			setOutputTxt(
				"✋Please enter a positive value for the quantity of stocks✋"
			);
		}
	}

	return (
		<div className="App">
			<h1>Profit & Loss Calculator</h1>
			<hr />
			<div>
				<div>
					<label>Initial Price</label>
				</div>
				<input
					type="number"
					id="inputInitialPrice"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<div>
					<label>Quantity of Stocks</label>
				</div>
				<input
					type="number"
					id="inputQuantity"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<div>
					<label>Current Price</label>
				</div>
				<input
					type="number"
					id="inputCurrentPrice"
					onChange={onChangeHandler}
				/>
			</div>
			<div id="output">{outputTxt}</div>
			<hr />
			<div>
				Made with{"  "}
				<span role="img" aria-label="Red Heart">
					❤️{" "}
				</span>
				by <a href="https://bruh.dev">Chaitanya</a>
			</div>
			<a href="https://twitter.com/ChhikaraBRUH">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/ChhikaraBRUH">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://linkedin.com/in/ChaitanyaChhikara">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
			<div id="cautionNotice">
				💡 We don't store any data. Nothing to worry about! 💡
			</div>
		</div>
	);
}
