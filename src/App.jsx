import { useState, useEffect } from 'react';
// import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductGallery from './components/ProductGallery';

import 'react-toastify/dist/ReactToastify.css';

const item = {
	title: 'Fall Limited Edition Sneakers',
	price: '125',
	quantity: 0,
};

function App() {
	const [cart, setCart] = useState({});
	const [isMobile, setIsMobile] = useState(null);
	const [isTablet, setIsTablet] = useState(null);

	const handleAddToCart = function (quantity) {
		setCart((cart) => {
			if (cart.title) return { ...cart, quantity };
			else return { ...item, quantity };
		});
	};

	const emptyCart = function () {
		setCart({});
	};

	useEffect(() => {
		// let mql = window.matchMedia('(max-width: 600px)');
		function callback() {
			if (window.innerWidth < 900) {
				setIsTablet(true);
			} else {
				setIsTablet(false);
			}

			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		callback();

		window.addEventListener('resize', callback);

		return function () {
			window.removeEventListener('resize', callback);
		};
	}, [setIsMobile]);

	return (
		<>
			<Header cart={cart} emptyCart={emptyCart} isTablet={isTablet} />
			<main className="pb-20 md:pt-[5.5rem]">
				<ProductGallery isMobile={isMobile} />
				<ProductDetails cart={cart} onAddToCart={handleAddToCart} />
			</main>
			<footer className="text-center">
				<div className="attribution">
					Challenge by{' '}
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a
						href="https://www.frontendmentor.io/profile/dinadess"
						target="_blank">
						Oshyeld
					</a>
					.
				</div>
			</footer>
		</>
	);
}

export default App;
