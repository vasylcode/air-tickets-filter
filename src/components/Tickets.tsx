import { useMemo } from 'react';
import Ticket from './ticketComponents/Ticket';
import { useAppSelector } from '../redux/hooks';
import { useGetApiQuery } from '../redux';
import { ITicket } from '../types/ticket';
import { ITransfer } from '../types/transfer';

export default function Tickets() {
	// * FOR FRONT-END FILTERING
	function filterTickets(tickets: ITicket[], stops: ITransfer[]) {
		const activeStops = stops.filter(item => item.status);
		const activeStopsNumbers = [...Array.from(new Set(activeStops.map(item => item.value || 0)))];
		if (activeStops.some(item => item.name === 'all')) return tickets;
		return tickets.filter(item => activeStopsNumbers.includes(item.transfers));
	}
	const transfers = useAppSelector(state => state.transfers.transfers);
	const { data } = useGetApiQuery();
	const tickets = useMemo(() => filterTickets(data!, transfers), [data, transfers]);

	// * FOR BACK-END FILTERING
	// const getStatus = (transfers: ITransfer[]) => {
	// 	return transfers.filter(transfer => transfer.status).map(transfer => transfer.value);
	// };
	// const transfers = useAppSelector(state => state.transfers.transfers);
	// const tickets = useMemo(() => getStatus(transfers), [transfers]);
	// console.log(tickets);
	// const { data } = useGetApiQuery(tickets);
	return (
		<div className='tickets'>
			<>
				{tickets?.map((ticket: any) => (
					<Ticket key={ticket.id} transfers={ticket.transfers} />
				))}
			</>
		</div>
	);
}
