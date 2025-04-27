// src/lib/routes.js

const routes = {
	home: '/',
	carBooking: '/car-booking',
	hotelRental: '/hotel-rental',
	bikeSharing: '/bike-sharing',
	contact: '/contact',
};

export default routes;

/* 

const routes = {
  home: '/',
  
  carBooking: {
    base: '/car-booking',
    checkout: '/car-booking/checkout',
    details: (id) => `/car-booking/${id}`, // Dynamic route
  },
  
  hotelRental: {
    base: '/hotel-rental',
    search: '/hotel-rental/search',
    book: (hotelId) => `/hotel-rental/book/${hotelId}`,
  },
  
  bikeSharing: '/bike-sharing',
  contact: '/contact',
};

export default routes;



=========How to use==============
import routes from '@/lib/routes';

// Static route
<Link href={routes.carBooking.checkout}>Checkout</Link>

// Dynamic route
<Link href={routes.hotelRental.book("123")}>Book Hotel 123</Link>

*/
