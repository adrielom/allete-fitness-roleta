import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
	image: string;
};

export default function SideBlob({ image, ...rest }: Props) {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
			}}
			{...rest}>
			<img src={image} />
		</div>
	);
}
