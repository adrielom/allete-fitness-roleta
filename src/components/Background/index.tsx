import React from 'react';
import styles from './index.module.scss';

import Stars from '../Stars';
import SideBlob from '../SideBlob';

import topStars from '../../assets/svgs/top-stars.svg';
import bottomStars from '../../assets/svgs/bottom-stars.svg';
import leftBlob from '../../assets/svgs/border-blob-left.svg';
import rightBlob from '../../assets/svgs/border-blob-right.svg';
import bg from '../../assets/svgs/bg-full.svg';

export default function Background() {
	return (
		<div className={styles.backgroundWrapper}>
			<img src={bg} className={styles.backgroundImage} />
		</div>
	);
}
