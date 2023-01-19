import React, { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import buttonText from '../../assets/svgs/spin_bt.svg';

type Props = HTMLAttributes<HTMLButtonElement> & {
	disabled: boolean;
};

export default function SpinButton({ disabled, ...rest }: Props) {
	return (
		<button
			{...rest}
			style={{
				zIndex: 10,
				backgroundColor: 'transparent',
				cursor: 'pointer',
				maxWidth: '35%',
			}}
			className={!disabled ? styles.spinButton : ''}
			disabled={disabled}>
			<img
				className={disabled ? styles.disabled : ''}
				draggable={false}
				src={buttonText}
			/>
		</button>
	);
}
