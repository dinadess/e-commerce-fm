import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

gsap.registerPlugin(useGSAP, Flip);

import { Fancybox, Carousel } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fancyapps/ui/dist/carousel/carousel.css';

import Product1 from '../assets/images/image-product-1.jpg';
import Product2 from '../assets/images/image-product-2.jpg';
import Product3 from '../assets/images/image-product-3.jpg';
import Product4 from '../assets/images/image-product-4.jpg';
import Thumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import Thumb2 from '../assets/images/image-product-2-thumbnail.jpg';
import Thumb3 from '../assets/images/image-product-3-thumbnail.jpg';
import Thumb4 from '../assets/images/image-product-4-thumbnail.jpg';

const thumbnails = [Thumb1, Thumb2, Thumb3, Thumb4];
const products = [Product1, Product2, Product3, Product4];

export default function ProductGallery() {
	const [productImg, setProductImg] = useState(Product1);
	const wrapper = useRef(null);

	Fancybox.bind('[data-fancybox]', {
		// Your custom options
	});
	const container = document.getElementById('myCarousel');
	const options = { infinite: false };
	console.log(container);

	new Carousel(container, options);

	// useGSAP(
	// 	(context, contextSafe) => {
	// 		const items = gsap.utils.toArray('.item');
	// 		const fullSize = document.querySelector('.full-size');
	// 		let activeItem = items[0];

	// 		const onClick = contextSafe((e) => {
	// 			console.log(Array.from(e.classList)[1]);
	// 			let active = Array.from(e.classList)[1];

	// 			const state = Flip.getState(`.${active}, .full-size`);
	// 			console.log(state);

	// 			// fullSize.classList.toggle('active');
	// 			// fullSize.appendChild(e);
	// 			fullSize.replaceChild(e, fullSize.querySelector('img'));
	// 			// e.classList.toggle('active');

	// 			Flip.from(state, {
	// 				duration: 0.6,
	// 				fade: true,
	// 				scale: true,
	// 				absolute: false,
	// 				toggleClass: 'flipping',
	// 				ease: 'power1.inOut',
	// 			});
	// 		});

	// 		wrapper.current?.addEventListener('click', function (e) {
	// 			const clickedBtn = e?.target.closest('button.item');
	// 			if (!clickedBtn) return;
	// 			onClick(clickedBtn);
	// 		});

	// 		// 👍 we remove the event listener in the cleanup function below.
	// 		return () => {
	// 			// <-- cleanup
	// 			wrapper.current?.removeEventListener('click', onClick);
	// 		};
	// 	},
	// 	{ scope: wrapper }
	// );

	const onInit = function () {
		console.log('Bla bla bla');
	};

	return (
		<div ref={wrapper} className="w-full">
			{/* <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail]}>
				<a
					href={productImg}
					className="full-size mb-8 w-[28rem] rounded-xl inline-block">
					<img src={productImg} alt="Shoes" className="rounded-xl w-full" />
				</a>
				<div className="flex justify-between w-full">
					{thumbnails.map((t, i) => (
						<button
							key={i}
							className={`item item-${i} transition-all`}
							onClick={() => setProductImg(products.at(i))}>
							<img
								src={t}
								alt="Shoes"
								className={`w-24 rounded-xl transition-all ${
									t.replace('-thumbnail', '') === productImg
										? 'border-2 border-orange opacity-40'
										: ''
								}`}
							/>
						</button>
					))}
				</div>
				{/* {thumbnails.map((t, i) => (
					<a href={products.at(i)} key={i}>
						<img alt="img1" src={t} />
					</a>
				))} }
			</LightGallery> */}
			<div id="myCarousel">
				{thumbnails.map((t, i) => (
					<div
						className="f-carousel__slide"
						data-thumb-src={t}
						data-src={products.at(i)}
						key={i}
						data-fancybox="gallery"
						data-caption={'Caption #1'}>
						<img alt="img1" src={products.at(i)} />
					</div>
				))}
			</div>

			{/* <div className="full-size mb-8 w-[28rem] rounded-xl">
				<img src={productImg} alt="Shoes" className="rounded-xl w-full" />
			</div>
			<div className="flex justify-between w-full">
				{thumbnails.map((t, i) => (
					<button
						key={i}
						className={`item item-${i} transition-all`}
						onClick={() => setProductImg(products.at(i))}>
						<img
							src={t}
							alt="Shoes"
							className={`w-24 rounded-xl transition-all ${
								t.replace('-thumbnail', '') === productImg
									? 'border-2 border-orange opacity-40'
									: ''
							}`}
						/>
					</button>
				))}
			</div> */}
		</div>
	);
}
