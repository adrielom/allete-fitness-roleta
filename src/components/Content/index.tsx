import Title from '../Title';
import titleTextSVG from '../../assets/svgs/title.svg';
import styles from './index.module.scss';
import Roulette from '../Roulette';

export default function Content() {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} titlesvg={titleTextSVG} />
			<Roulette />
		</div>
	);
}
