import React from 'react';
import styles from './index.module.scss';

import Stars from '../Stars';
import SideBlob from '../SideBlob';

import topStars from '../../assets/svgs/top-stars.svg';
import bottomStars from '../../assets/svgs/bottom-stars.svg';
import leftBlob from '../../assets/svgs/border-blob-left.svg';
import rightBlob from '../../assets/svgs/border-blob-right.svg';
import bg from '../../assets/svgs/bg.svg';

export default function Background() {
	return (
		<div className={styles.backgroundWrapper}>
			<Stars
				image={topStars}
				style={{
					position: 'absolute',
					width: '90%',
					height: 'auto',
					zIndex: 3,
				}}
			/>
			<img src={bg} className={styles.backgroundImage} />
			<SideBlob
				image={leftBlob}
				style={{ position: 'absolute', zIndex: 2, top: 0, left: 0 }}
			/>
			<SideBlob
				image={rightBlob}
				style={{ position: 'absolute', zIndex: 2, top: 0, right: 0 }}
			/>
			<Stars
				image={bottomStars}
				style={{
					position: 'absolute',
					width: '90%',
					bottom: 0,
					zIndex: 3,
				}}
			/>
		</div>
	);
}
