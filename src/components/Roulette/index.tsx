import React, { HTMLAttributes, useState, useContext } from 'react';
import { Wheel } from 'react-custom-roulette';

import SpinButton from '../SpinButton';
import { RouletteContext } from './RouletteContext';

const PINK = '#FFB0D4';
const PURPLE = '#AAA0F0';
const YELLOW = '#FFE198';
const GREEN = '#B9FDA8';
const WHITE = 'white';

const data = [
	{
		option: '',
		title: 'Verde livre',
		style: { backgroundColor: GREEN, textColor: WHITE },
		color: GREEN,
		message:
			'Verde nos entrega esperança, liberdade, saúde, vitalidade. Que possamos fazer como a natureza, em que  tudo tem seu tempo perfeito. Que encontremos equilíbrio, PACIÊNCIA e paz para nossas decisoes, e que nosso espírito seja natureza viva em nós.',
	},
	{
		option: '',
		title: 'Lilás espiritual',
		style: { backgroundColor: PURPLE, textColor: WHITE },
		color: PURPLE,
		message:
			'O lilás dentre muitas coisas, simboliza a espiritualidade, purificação e a transformação. Que possamos estar em eterno aprendizado e EVOLUÇÃO, percebendo o que se passa  em nosso interior e alimentando nosso espírito',
	},
	{
		option: '',
		title: 'Amarelo alegre',
		style: { backgroundColor: YELLOW, textColor: WHITE },
		color: YELLOW,
		message:
			'O amarelo tráz consigo a luz, o calor e a alegria. O otimismo por tempos melhores, a felicidade da prosperidade e ABUNDÂNCIA. Que o amarelo nos traga inspiraçao para perserguirmos nossos sonhos, com otimismo e alegria.',
	},
	{
		option: '',
		title: 'Rosa afetivo',
		style: { backgroundColor: PINK, textColor: WHITE },
		color: PINK,
		message:
			'rosa é força afetiva, emocional, potente e feminina, é pura energia da CRIAÇÃO, fertilidade, amor e PERDÃO. Dentro de nós existe essa força que nos move e acalenta, que nos faz acreditar que somos capazes de qualquer coisa.',
	},
	{
		option: '',
		title: 'Verde livre',
		style: { backgroundColor: GREEN, textColor: WHITE },
		color: GREEN,
		message:
			'Verde nos entrega esperança, liberdade, saúde, vitalidade. Que possamos fazer como a natureza, em que  tudo tem seu tempo perfeito. Que encontremos equilíbrio, PACIÊNCIA e paz para nossas decisoes, e que nosso espírito seja natureza viva em nós.',
	},
	{
		option: '',
		title: 'Lilás espiritual',
		style: { backgroundColor: PURPLE, textColor: WHITE },
		color: PURPLE,
		message:
			'O lilás dentre muitas coisas, simboliza a espiritualidade, purificação e a transformação. Que possamos estar em eterno aprendizado e EVOLUÇÃO, percebendo o que se passa  em nosso interior e alimentando nosso espírito',
	},
	{
		option: '',
		title: 'Amarelo alegre',
		style: { backgroundColor: YELLOW, textColor: WHITE },
		color: YELLOW,
		message:
			'O amarelo tráz consigo a luz, o calor e a alegria. O otimismo por tempos melhores, a felicidade da prosperidade e ABUNDÂNCIA. Que o amarelo nos traga inspiraçao para perserguirmos nossos sonhos, com otimismo e alegria.',
	},
	{
		option: '',
		title: 'Rosa afetivo',
		style: { backgroundColor: PINK, textColor: WHITE },
		color: PINK,
		message:
			'rosa é força afetiva, emocional, potente e feminina, é pura energia da CRIAÇÃO, fertilidade, amor e PERDÃO. Dentro de nós existe essa força que nos move e acalenta, que nos faz acreditar que somos capazes de qualquer coisa.',
	},
];

type Props = HTMLAttributes<HTMLDivElement> & {};

export default ({ ...rest }: Props) => {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const { setRouletteValue } = useContext(RouletteContext);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		console.log(data[newPrizeNumber].title);
		setMustSpin(true);
		setRouletteValue({
			message: data[newPrizeNumber].message,
			title: data[newPrizeNumber].title,
			color: data[newPrizeNumber].color,
		});
	};

	return (
		<div {...rest}>
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
			<SpinButton onClick={handleSpinClick} disabled={mustSpin} />
		</div>
	);
};
