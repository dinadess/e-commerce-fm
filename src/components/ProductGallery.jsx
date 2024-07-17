import { useState, useEffect } from 'react';

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

export default function ProductGallery({ isMobile }) {
	const [dialog, setDialog] = useState(false);

	const [index, setIndex] = useState(0);

	const handlePrevious = function () {
		if (index === 0) setIndex(products.length - 1);
		else setIndex((i) => i - 1);
	};

	const handleNext = function () {
		if (index === products.length - 1) setIndex(0);
		else setIndex((i) => i + 1);
	};

	useEffect(() => {
		function callback(e) {
			if (!dialog) return;

			if (e.code === 'ArrowLeft') {
				handlePrevious();
			}
			if (e.code === 'ArrowRight') handleNext();
		}

		document.addEventListener('keydown', callback);

		return function () {
			document.removeEventListener('keydown', callback);
		};
	}, [handlePrevious, handleNext]);

	return (
		<>
			{isMobile && (
				<div className="mb-4 md:mb-8 w-full relative">
					<button
						className="group absolute top-1/2 -translate-y-1/2 left-6 bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
						title="Previous"
						onClick={handlePrevious}>
						<svg
							width="12"
							height="18"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11 1 3 9l8 8"
								stroke="#1D2026"
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
								className="group-hover:stroke-orange transition-colors"
							/>
						</svg>
					</button>
					<img
						src={products.at(index)}
						alt="Shoes"
						className="w-full h-[300px] sm:h-auto max-h-[500px] object-cover"
					/>
					<button
						className="group absolute top-1/2 -translate-y-1/2 right-6 bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
						title="Next"
						onClick={handleNext}>
						<svg
							width="13"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<path
								d="m2 1 8 8-8 8"
								stroke="#1D2026"
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
								className="group-hover:stroke-orange transition-colors"
							/>
						</svg>
					</button>
				</div>
			)}
			{!isMobile && (
				<div className="desktop-gallery mb-8 md:mb-0">
					<div
						className="mb-8 w-full md:w-[28rem] rounded-xl"
						onClick={() => setDialog(true)}>
						<img
							src={products.at(index)}
							alt="Shoes"
							className="rounded-xl w-full"
						/>
					</div>
					<div className="flex justify-between w-full max-w-[450px] mx-auto">
						{thumbnails.map((t, i) => (
							<button
								key={i}
								className={`item item-${i} transition-all`}
								onClick={() => setIndex(i)}>
								<img
									src={t}
									alt="Shoes"
									className={`w-24 rounded-xl transition border-2 ${
										i === index
											? 'border-orange opacity-40'
											: 'border-transparent'
									}`}
								/>
							</button>
						))}
					</div>

					{dialog && (
						<>
							<div
								className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#00000095] cursor-pointer z-50"
								onClick={() => setDialog(false)}></div>

							<div className="w-auto h-auto absolute z-[150] left-1/2 -translate-x-1/2">
								<button
									title="Close"
									className="py-2 flex ml-auto"
									onClick={() => setDialog(false)}>
									<svg
										className="group"
										width="14"
										height="15"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
											fill="#fff"
											fillRule="evenodd"
											className="fill-white group-hover:fill-orange transition-colors"
										/>
									</svg>
								</button>
								<div className="mb-8 w-[28rem] rounded-xl relative">
									<button
										className="group absolute top-1/2 -translate-y-1/2 -left-6 bg-white rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
										title="Previous"
										onClick={handlePrevious}>
										<svg
											width="12"
											height="18"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M11 1 3 9l8 8"
												stroke="#1D2026"
												strokeWidth="3"
												fill="none"
												fillRule="evenodd"
												className="group-hover:stroke-orange transition-colors"
											/>
										</svg>
									</button>
									<img
										src={products.at(index)}
										alt="Shoes"
										className="rounded-xl w-full"
									/>
									<button
										className="group absolute top-1/2 -translate-y-1/2 -right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
										title="Next"
										onClick={handleNext}>
										<svg
											width="13"
											height="18"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true">
											<path
												d="m2 1 8 8-8 8"
												stroke="#1D2026"
												strokeWidth="3"
												fill="none"
												fillRule="evenodd"
												className="group-hover:stroke-orange transition-colors"
											/>
										</svg>
									</button>
								</div>
								<div className="flex justify-between w-full">
									{thumbnails.map((t, i) => (
										<button
											key={i}
											className={`item item-${i}`}
											onClick={() => setIndex(i)}>
											<img
												src={t}
												alt="Shoes"
												className={`w-24 rounded-xl transition border-2  ${
													i === index
														? 'border-orange opacity-80'
														: 'border-transparent'
												}`}
											/>
										</button>
									))}
								</div>
							</div>
						</>
					)}
				</div>
			)}
		</>
	);
}
