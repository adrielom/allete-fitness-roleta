import React, { useContext } from 'react';
import { RouletteContext } from '../Roulette/RouletteContext';

import insta from './../../assets/svgs/instagram.svg';
import donwload from './../../assets/svgs/download.svg';
import { useScreenshot } from 'use-screenshot-hook';
// @ts-ignore
import { createFileName } from 'use-react-screenshot';
import html2canvas from 'html2canvas';

export default function Social() {
	const { hasPlayed } = useContext(RouletteContext);

	const { image, takeScreenshot } = useScreenshot();

	const screenshot = () => {
		// takeScreenshot('jpg').then((e) => {
		// 	console.log(e);
		// 	downloadBase64File(e!, 'download');
		// });
		html2canvas(document.body).then((canvas) => {
			let a = document.createElement('a');
			a.download = 'ss.png';
			a.href = canvas.toDataURL('image/png');
			a.click();
		});
	};

	function downloadBase64File(contentBase64: string, fileName: string) {
		const downloadLink = document.createElement('a');
		document.body.appendChild(downloadLink);

		downloadLink.href = `data:application/jpg;base64,${contentBase64}`;
		downloadLink.download = createFileName('jpg', fileName);
		downloadLink.click();
	}

	function downloadImage(img: string) {
		const linkSource = `data:application/jpg;base64,${img}`;
		const downloadLink = document.createElement('a');
		const fileName = 'donwload.jpg';
		downloadLink.href = linkSource;
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
