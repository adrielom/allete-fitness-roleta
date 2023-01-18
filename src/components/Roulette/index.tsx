import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const PINK = '#FFB0D4';
const PURPLE = '#AAA0F0';
const YELLOW = '#FFE198';
const GREEN = '#B9FDA8';
const WHITE = 'white';

const data = [
	{
		option: '',
		color: 'green',
		style: { backgroundColor: GREEN, textColor: WHITE },
	},
	{
		option: '',
		color: 'purple',
		style: { backgroundColor: PURPLE, textColor: WHITE },
	},
	{
		option: '',
		color: 'yellow',
		style: { backgroundColor: YELLOW, textColor: WHITE },
	},
	{
		option: '',
		color: 'pink',
		style: { backgroundColor: PINK, textColor: WHITE },
	},
];

export default () => {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		console.log(data[newPrizeNumber].color);
		setMustSpin(true);
	};

	return (
		<>
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}
				radiusLineWidth={0}
				outerBorderWidth={20}
				outerBorderColor={WHITE}
				onStopSpinning={() => {
					setMustSpin(false);
				}}
			/>
			<button onClick={handleSpinClick}>SPIN</button>
		</>
	);
};
