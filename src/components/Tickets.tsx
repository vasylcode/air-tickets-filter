import React from 'react';
import Ticket from './ticketComponents/Ticket';
import { useGetApiQuery } from '../redux';

export default function Tickets() {
	const { data } = useGetApiQuery(-1);
	return (
		<div className='tickets'>
			<>
				{data?.map((ticket: any) => (
					<Ticket key={ticket.id} transfers={ticket.transfers} />
				))}
			</>
		</div>
	);
}
