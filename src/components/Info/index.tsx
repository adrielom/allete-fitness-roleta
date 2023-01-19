import React, { HTMLAttributes, useContext } from 'react';
import { RouletteContext } from '../Roulette/RouletteContext';
import styles from './index.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {};

export default function Info({ ...rest }: Props) {
	const { rouletteValue, hasPlayed } = useContext(RouletteContext);

	return (
		<div
			{...rest}
			style={{
				backgroundColor: rouletteValue.color,
				marginBottom: '3em',
			}}>
			{hasPlayed() && (
				<div className={styles.innerBox}>
					<h2>{rouletteValue.title}</h2>
					<p>{rouletteValue.message}</p>
				</div>
			)}
		</div>
	);
}
