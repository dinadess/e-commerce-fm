import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import DeleteIcon from '../assets/images/icon-delete.svg';
import ProductImg from '../assets/images/image-product-1-thumbnail.jpg';

import { ToastContainer, toast } from 'react-toastify';

export default function Cart({ cart, emptyCart, closeCart }) {
	const [isExploding, setIsExploding] = useState(false);

	const notify = () =>
		toast.success('Product deleted!', {
			autoClose: 3000,
			position: 'bottom-right',
		});

	const handleDelete = function () {
		emptyCart();
		notify();
		closeCart();
	};

	const handleCheckout = function () {
		setIsExploding(true);
	};

	const emptyTheCart = function () {
		setIsExploding(false);
		emptyCart();
	};

	return (
		<div className="bg-white absolute right-2 tablet:right-0 top-[4.5rem] md:top-24 w-[calc(100%_-_1rem)] sm:w-80 h-56 shadow-2xl rounded-lg flex flex-col z-10">
			<p className="font-semibold px-4 py-4 text-left border-b-2 border-bottom border-light-grayish-blue">
				Cart
			</p>
			{cart.title ? (
				<div className="px-4 py-6 flex flex-col h-full">
					<div className="grid gap-3 grid-col grid-cols-[48px_auto_1rem] text-sm">
						<img
							src={ProductImg}
							alt="Shoes"
							className="w-12 h-12 rounded-md"
						/>
						<div className="text-dark-grayish-blue">
							<p>{cart.title}</p>
							<p>
								${cart.price}.00 x {cart.quantity}
								<strong className="text-black">
									&nbsp; ${Number(cart.price) * cart.quantity}.00
								</strong>
							</p>
						</div>
						<button onClick={handleDelete}>
							<img src={DeleteIcon} alt="Delete" />
						</button>
					</div>
					<button
						className="btn-orange mt-auto disabled:bg-gray-600"
						onClick={handleCheckout}
						disabled={isExploding}>
						{isExploding ? 'Checking out...' : 'Checkout'}
					</button>

					{isExploding && (
						<ConfettiExplosion
							force={0.8}
							duration={3000}
							particleCount={250}
							width={1600}
							onComplete={emptyTheCart}
						/>
					)}
					<ToastContainer />
				</div>
			) : (
				<div className="px-4 py-6 text-dark-grayish-blue h-full flex items-center justify-center">
					<p className="font-semibold text-sm">Your cart is empty.</p>
				</div>
			)}
		</div>
	);
}
