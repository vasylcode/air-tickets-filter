import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { setTransfer, toggleTransferItem } from '../redux/slice';

export default function Transfers() {
	const transfers = useAppSelector(state => state.transfers.transfers);
	console.log(transfers);
	return (
		<div className='filter'>
			<div className='filter__title'>number of transfers</div>
			<div className='filter__checkboxes'>
				{transfers.map((box: any) => (
					<div className='checkbox' key={box.id}>
						<label>
							<input type='checkbox' checked={box.status} onChange={() => toggleTransferItem!(box)} />
							{box.name}
						</label>
						{box.only && <span onClick={() => setTransfer!(box)}>only</span>}
					</div>
				))}
			</div>
		</div>
	);
}
