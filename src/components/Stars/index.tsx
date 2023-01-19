import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
	image: string;
	alt?: string;
};

export default function Stars({ image, alt, ...rest }: Props) {
	return (
		<div {...rest}>
			<img
				style={{
					marginTop: '2em',
					objectFit: 'contain',
					overflowX: 'hidden',
				}}
				src={image}
				alt={alt}
			/>
		</div>
	);
}
