// src/layout.jsx
import Header from '@/components/inc/Header';
import Footer from '@/components/inc/Footer';

export default function Layout({children}) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="">{children}</main>
			<Footer />
		</div>
	);
}
