import Title from '../Title';
import titleTextSVG from '../../assets/svgs/title.svg';
import styles from './index.module.scss';
import Roulette from '../Roulette';
import Info from '../Info';

export default function Content() {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} titlesvg={titleTextSVG} />
			<Roulette className={styles.roulette} />
			<Info className={styles.info} />
		</div>
	);
}
