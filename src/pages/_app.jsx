// src/pages/_app.jsx
import './../styles/globals.css';
import Layout from '@/layout';
import {Provider} from 'react-redux';
import store from '@/store/index'; // Adjust the import path as needed

export default function MyApp({Component, pageProps}) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
