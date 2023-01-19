import titleTextSVG from '../../assets/svgs/title.svg';
import Info from '../Info';
import Roulette from '../Roulette';
import Social from '../Social';
import Title from '../Title';
import styles from './index.module.scss';

export default function Content() {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} titlesvg={titleTextSVG} />
			<Roulette className={styles.roulette} />
			<Info className={styles.info} />
		</div>
	);
}
