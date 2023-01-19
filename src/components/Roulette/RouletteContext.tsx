import React, { createContext, useState } from 'react';

export type RouletteMessageInfo = {
	message: string;
	color: string;
	title: string;
};

type RouletteContextValue = {
	rouletteValue: RouletteMessageInfo;
	setRouletteValue: (value: any) => void;
	hasPlayed: () => boolean;
};

export const RouletteContext = createContext<RouletteContextValue>(
	{} as RouletteContextValue
);

export default function RouletteProvider({ children }: any) {
	const [rouletteValue, setRouletteValue] = useState<RouletteMessageInfo>({
		message: '',
		color: '',
		title: '',
	});

	const hasPlayed = () => {
		return rouletteValue.title !== '';
	};

	return (
		<RouletteContext.Provider
			value={{ rouletteValue, setRouletteValue, hasPlayed }}>
			{children}
		</RouletteContext.Provider>
	);
}
