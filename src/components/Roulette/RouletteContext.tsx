import React, { createContext, useState } from 'react';

type RouletteMessageInfo = {
	message: string;
	color: string;
	title: string;
};

type RouletteContextValue = {
	rouletteValue: RouletteMessageInfo;
	setRouletteValue: (value: any) => void;
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

	return (
		<RouletteContext.Provider value={{ rouletteValue, setRouletteValue }}>
			{children}
		</RouletteContext.Provider>
	);
}
