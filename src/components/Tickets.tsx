import React from 'react';
import Ticket from './ticketComponents/Ticket';
import { useGetApiQuery } from '../redux';

const Tickets: React.FC = () => {
	const { data } = useGetApiQuery();
	return (
		<div className='tickets'>
			<>
				{data?.map((ticket: any) => (
					<Ticket key={ticket.id} transfers={ticket.transfers} />
				))}
			</>
		</div>
	);
};

export default Tickets;
