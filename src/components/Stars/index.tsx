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
					objectFit: 'contain',
				}}
				src={image}
				alt={alt}
			/>
		</div>
	);
}
