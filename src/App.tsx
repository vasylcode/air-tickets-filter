import React from 'react';
import './sass/styles.sass';
import Transfers from './components/Transfers';
import Tickets from './components/Tickets';

export default function App() {
	return (
		<div className='wrapper'>
			<Transfers />
			<Tickets />
		</div>
	);
}
