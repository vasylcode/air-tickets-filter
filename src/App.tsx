import React from 'react';
import './sass/styles.sass';
import Filter from './components/Filter';
import Tickets from './components/Tickets';

export default function App() {
	return (
		<div className='wrapper'>
			<Filter />
			<Tickets />
		</div>
	);
}
