import { HTMLAttributes, useContext } from 'react';
import titleTextSVG from '../../assets/svgs/title.svg';
import Info from '../Info';
import Roulette from '../Roulette';
import { RouletteContext } from '../Roulette/RouletteContext';
import Title from '../Title';
import styles from './index.module.scss';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Content(props: Props) {
	const { hasPlayed } = useContext(RouletteContext);

	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} titlesvg={titleTextSVG} />
			<Roulette className={styles.roulette} />
			{hasPlayed() && <Info className={styles.info} />}
			<div className={styles.spacing}></div>
		</div>
	);
}
