import React, { HTMLAttributes } from 'react';
import titleSVG from '../../assets/svgs/title.svg';

type Props = HTMLAttributes<HTMLDivElement> & {
	titlesvg: string;
};

export default function Title({ ...rest }: Props) {
	return (
		<div {...rest}>
			<img
				src={titleSVG}
				style={{
					objectFit: 'contain',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
}
