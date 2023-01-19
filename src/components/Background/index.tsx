import styles from './index.module.scss';

import bg from '../../assets/svgs/bg-full.svg';

export default function Background() {
	return (
		<div className={styles.backgroundWrapper}>
			<img src={bg} className={styles.backgroundImage} />
		</div>
	);
}
