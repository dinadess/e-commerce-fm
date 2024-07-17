import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

export default function ProductDetails({ cart, onAddToCart }) {
	const [quantity, setQuantity] = useState(0);

	const notify = () =>
		toast.success('Product added successfully!', {
			autoClose: 3000,
			position: 'bottom-right',
		});

	const handleIncrement = function () {
		setQuantity((q) => q + 1);
	};

	const handleDecrement = function () {
		setQuantity((q) => (q > 0 ? q - 1 : q));
	};

	const handleAddToCart = function () {
		if (quantity === cart.quantity) return;
		onAddToCart(quantity);
		notify();
	};

	return (
		<section className="container md:max-w-md md:p-0 md:mt-16 mx-auto">
			<span className="uppercase text-orange text-sm font-bold inline-block mb-4 tracking-widest">
				Sneaker Company
			</span>
			<h1 className="text-[1.75rem] md:text-[2.75rem] font-semibold mb-4 md:mb-8 text-very-dark-blue">
				Fall Limited Edition Sneakers
			</h1>
			<p className="text-dark-grayish-blue font-bold">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<div className="my-8 flex justify-between items-center md:block">
				<p className="flex items-center gap-4 mb-1">
					<strong className="text-3xl">$125.00</strong>

					<span className="text-orange font-bold text bg-pale-orange py-1 px-2 rounded-md w-max">
						50%
					</span>
				</p>
				<p className="font-semibold text-dark-grayish-blue line-through">
					$250.00
				</p>
			</div>
			<div className="grid md:grid-cols-[auto_1fr] gap-4">
				<div className=" bg-light-grayish-blue rounded-md shadow-md w-full md:max-w-fit flex items-center justify-between">
					<button
						className="text-orange font-bold text-2xl py-2 px-4 hover:opacity-50"
						onClick={handleDecrement}>
						-
					</button>
					<p className="py-2 px-4 w-[72px] text-center font-bold">{quantity}</p>
					<button
						className="text-orange font-bold text-2xl py-2 px-4 hover:opacity-50"
						onClick={handleIncrement}>
						+
					</button>
				</div>
				<button
					className="btn-orange flex items-center justify-center gap-3 shadow-2xl shadow-pale-orange"
					onClick={handleAddToCart}
					disabled={quantity === 0}>
					<svg
						width="22"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path
							d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
							fill="#ffffff"
							fillRule="nonzero"
						/>
					</svg>
					Add to cart
				</button>
				<ToastContainer />
			</div>
		</section>
	);
}
