import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-white text-gray-700 pt-10">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
					{/* Company Info */}
					<div className="space-y-4">
						<img src="/logo.svg" alt="ShareTrip" className="h-8" />
						<p className="text-sm">
							ShareTrip is the country’s first and leading online travel aggregator (OTA). Since our inception, we have
							dreamt of making travel easier for people of all ages and we move forward to make that dream into reality.
						</p>
					</div>

					{/* Explore */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Explore</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Hotel Sitemap
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Medical Tourism
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									Flight
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Hotel
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Holiday
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa
								</a>
							</li>
						</ul>
					</div>

					{/* Useful Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Useful Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									Travel Guide
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Travel Advisory
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa Guide
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa Application
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									ST Pay
								</a>
							</li>
						</ul>
					</div>

					{/* Promotions */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Promotions</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									News
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Promotions
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									VAS
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Payment icons */}
				<div className="mb-10">
					<h4 className="text-lg font-semibold mb-4">We accept</h4>
					<div className="flex flex-wrap items-center gap-3">
						<img src="/payments/stpay.svg" alt="ST Pay" className="h-6" />
						<img src="/payments/visa.svg" alt="Visa" className="h-6" />
						<img src="/payments/mastercard.svg" alt="Mastercard" className="h-6" />
						<img src="/payments/bkash.svg" alt="bKash" className="h-6" />
						{/* Add more payment icons similarly */}
					</div>
				</div>

				{/* Contact & Offices */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<p className="text-sm">
							Email:{' '}
							<a href="mailto:ask@sharetrip.net" className="text-blue-600">
								ask@sharetrip.net
							</a>
						</p>
						<p className="text-sm">
							Phone:{' '}
							<a href="tel:+8809617617617" className="text-blue-600">
								+880 9617 617617
							</a>
						</p>
						<p className="text-sm">
							WhatsApp:{' '}
							<a href="#" className="text-blue-600">
								Message us
							</a>
						</p>

						<div className="flex space-x-4 mt-4">
							<a href="#">
								<FaFacebookF className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaTwitter className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaInstagram className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaYoutube className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaLinkedinIn className="w-5 h-5 hover:text-blue-600" />
							</a>
						</div>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">ShareTrip Lounge (Dhaka)</h4>
						<p className="text-sm">
							3rd Floor, House 1,
							<br />
							Road 17, Block C, Banani,
							<br />
							Dhaka 1213, Bangladesh
						</p>
						<a href="#" className="flex items-center text-blue-600 text-sm mt-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
								<path d="M5 8a7 7 0 1114 0c0 5-7 11-7 11S5 13 5 8z" />
								<path d="M8 8a2 2 0 104 0 2 2 0 00-4 0z" />
							</svg>
							View Map
						</a>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">Chattogram Office</h4>
						<p className="text-sm">
							BM Height 5th Floor,
							<br />
							318 Sheikh Mujib Road,
							<br />
							Chattogram 4100, Bangladesh
						</p>
						<a href="#" className="flex items-center text-blue-600 text-sm mt-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
								<path d="M5 8a7 7 0 1114 0c0 5-7 11-7 11S5 13 5 8z" />
								<path d="M8 8a2 2 0 104 0 2 2 0 00-4 0z" />
							</svg>
							View Map
						</a>
					</div>
				</div>

				{/* Certifications */}
				<div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6 text-center">
					<div className="text-sm">Accredited Member</div>
					<div className="text-sm">Verified by</div>
					<div className="text-sm">Our Partners</div>
					<div className="text-sm">Authorised by</div>
					<div className="text-sm">Registered at</div>
					<div className="text-sm">Certified By</div>
				</div>

				{/* Bottom Links */}
				<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
					<a href="#" className="hover:text-blue-600">
						Support Center
					</a>
					<a href="#" className="hover:text-blue-600">
						Payment Security
					</a>
					<a href="#" className="hover:text-blue-600">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-blue-600">
						EMI
					</a>
				</div>

				{/* Copyright */}
				<div className="text-center text-xs text-gray-500 py-4 border-t">
					Copyright © 2025.{' '}
					<a href="#" className="text-blue-600">
						ShareTrip
					</a>
					. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
