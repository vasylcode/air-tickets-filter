import React from 'react';

const formatTransfers = (num: number): string => {
	let result = `${num} transfers`;
	if (num === 0) result = 'no transfers';
	if (num === 1) result = `${num} transfer`;
	return result;
};

export default function Ticket({ transfers }: any) {
	return (
		<>
			<div className='ticket'>{formatTransfers(transfers)}</div>
		</>
	);
}
