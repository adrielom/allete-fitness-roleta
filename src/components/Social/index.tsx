import React, { useContext } from 'react';
import { RouletteContext } from '../Roulette/RouletteContext';

import insta from './../../assets/svgs/instagram.svg';
import donwload from './../../assets/svgs/download.svg';
import { useScreenshot } from 'use-screenshot-hook';

export default function Social() {
	const { hasPlayed } = useContext(RouletteContext);

	const { image, takeScreenshot } = useScreenshot();

	const screenshot = () => {
		takeScreenshot('jpg').then((e) => {
			console.log(e);
			downloadBase64File(e!, 'download.jpg');
		});
	};

	function downloadBase64File(contentBase64: string, fileName: string) {
		const linkSource = `data:application/pdf;base64,${contentBase64}`;
		const downloadLink = document.createElement('a');
		document.body.appendChild(downloadLink);

		downloadLink.href = linkSource;
		downloadLink.target = '_self';
		downloadLink.download = fileName;
		downloadLink.click();
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				marginTop: '2em',
			}}>
			{hasPlayed() && (
				<>
					<button
						style={{
							backgroundColor: 'transparent',
							height: 'auto',
							width: '5em',
						}}
						onClick={() => {
							console.log('screen shot');
							screenshot();
						}}>
						<img src={insta} alt='instagram' />
					</button>
					<button
						style={{
							backgroundColor: 'transparent',
							height: 'auto',
							width: '5em',
						}}
						onClick={() => {
							console.log('screen shot');
							screenshot();
						}}>
						<img src={donwload} alt='download' />
					</button>
					{image && <img src={image} />}
				</>
			)}
		</div>
	);
}
