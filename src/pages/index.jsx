import {useSelector} from 'react-redux';

export default function HomePage() {
	// Get user data from Redux store
	const user = useSelector((state) => state.user);

	console.log('user', user);

	return (
		<section className="space-y-8">
			<h1 className="text-4xl font-bold text-center">
				{user.isLoggedIn ? `Welcome back, ${user.name}! 👋` : 'Welcome to My Booking Platform'}
			</h1>

			<p className="text-center text-gray-600">
				{user.isLoggedIn ? 'Ready to book your next adventure?' : 'Book cars, hotels, and bikes with ease!'}
			</p>

			{/* Rest of your existing JSX */}
			<div className="grid md:grid-cols-3 gap-6">
				<a href="/car-booking" className="p-6 border rounded-xl shadow hover:bg-gray-50">
					<h2 className="text-2xl font-semibold">🚗 Car Booking</h2>
					<p>Find and book the perfect ride for your trip.</p>
				</a>

				<a href="/hotel-rental" className="p-6 border rounded-xl shadow hover:bg-gray-50">
					<h2 className="text-2xl font-semibold">🏨 Hotel Rental</h2>
					<p>Explore comfortable stays in your destination.</p>
				</a>

				<a href="/bike-sharing" className="p-6 border rounded-xl shadow hover:bg-gray-50">
					<h2 className="text-2xl font-semibold">🚴 Bike Sharing</h2>
					<p>Ride freely with our easy bike sharing service.</p>
				</a>
			</div>

			{/* Optional: Add login/logout button */}
			<div className="text-center">
				{user.isLoggedIn ? (
					<button onClick={() => dispatch(logout())} className="px-4 py-2 bg-red-500 text-white rounded">
						Logout
					</button>
				) : (
					<a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
						Login
					</a>
				)}
			</div>
		</section>
	);
}
