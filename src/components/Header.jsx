import { useState } from 'react';

import Cart from './Cart';
import Logo from '../assets/images/logo.svg';
import MenuIcon from '../assets/images/icon-menu.svg';
import CloseIcon from '../assets/images/icon-close.svg';
import Avatar from '../assets/images/image-avatar.png';

export default function Header({ cart, emptyCart, isTablet }) {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const closeCart = function () {
		setShowCart(false);
	};

	return (
		<header className="tablet:relative py-3 mx-4 md:mx-[2.325rem] md:pt-6 md:pb-8 flex items-center gap-3 md:gap-14 md:border-b md:border-grayish-blue">
			<button
				className="menu-btn px-2 py-1 w-8 z-30"
				onClick={() => setMenuIsOpen((m) => !m)}>
				{menuIsOpen ? (
					<img src={CloseIcon} alt="Close menu" />
				) : (
					<img src={MenuIcon} alt="Open Menu" />
				)}
			</button>
			<a href="#" className="inline-block z-20">
				<img src={Logo} alt="Sneakers homepage" />
			</a>
			{menuIsOpen && isTablet && (
				<div
					className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#00000095] z-[15]"
					onClick={() => setMenuIsOpen((m) => !m)}></div>
			)}
			{((menuIsOpen && isTablet) || !isTablet) && (
				<nav className="header-nav z-20">
					<ul className="flex gap-4 tablet:gap-8 text-grayish-blue">
						<li>
							<a href="#" className="header-link">
								Collections
							</a>
						</li>
						<li>
							<a href="#" className="header-link">
								Men
							</a>
						</li>
						<li>
							<a href="#" className="header-link">
								Women
							</a>
						</li>
						<li>
							<a href="#" className="header-link">
								About
							</a>
						</li>
						<li>
							<a href="#" className="header-link">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			)}
			<menu className="flex items-center gap-2 md:gap-10 ml-auto">
				<li className="relative">
					{cart.quantity && (
						<span className="text-white font-semibold text-xs text-center bg-orange w-7 py-[.05rem] px-[8px] rounded-2xl absolute -right-2">
							{cart.quantity > 9 ? '+9' : cart.quantity}
						</span>
					)}
					<button
						title="Cart"
						onClick={() => setShowCart((s) => !s)}
						className="group p-2">
						<svg
							width="22"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<path
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								fillRule="nonzero"
								className="fill-[#69707D] group-hover:fill-black transition-colors"
							/>
						</svg>
					</button>
				</li>
				<li className="flex-shrink-0">
					<button className="rounded-full border-2 hover:border-orange">
						<img
							src={Avatar}
							alt="Profile"
							className="w-8 h-8 md:w-12 md:h-12"
						/>
					</button>
				</li>
			</menu>
			{showCart && (
				<Cart cart={cart} emptyCart={emptyCart} closeCart={closeCart} />
			)}
		</header>
	);
}
