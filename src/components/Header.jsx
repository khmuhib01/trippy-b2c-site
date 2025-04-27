// export default function Header() {
// 	return (
// 		<header className="bg-blue-600 text-white py-4">
// 			<div className="container mx-auto flex justify-between items-center px-4">
// 				<h1 className="text-xl font-bold">My Booking</h1>
// 				<nav className="space-x-4">
// 					<a href="/" className="hover:underline">
// 						Home
// 					</a>
// 					<a href="/car-booking" className="hover:underline">
// 						Cars
// 					</a>
// 					<a href="/hotel-rental" className="hover:underline">
// 						Hotels
// 					</a>
// 					<a href="/bike-sharing" className="hover:underline">
// 						Bikes
// 					</a>
// 				</nav>
// 			</div>
// 		</header>
// 	);
// }

import routes from '@/lib/routes'; // ✅ correct path
import Link from 'next/link';

export default function Header() {
	return (
		<header className="bg-blue-600 text-white py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<h1 className="text-xl font-bold">My Booking</h1>
				<nav className="space-x-4">
					<Link href={routes.home}>Home</Link>
					<Link href={routes.carBooking}>Cars</Link>
					<Link href={routes.hotelRental}>Hotels</Link>
					<Link href={routes.bikeSharing}>Bikes</Link>
					<Link href={routes.contact}>Contact</Link>
				</nav>
			</div>
		</header>
	);
}
