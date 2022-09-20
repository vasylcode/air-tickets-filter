import React from 'react';
import Checkbox from './filterComponents/Checkbox';

interface ICheckboxes {
	name: string;
	only: boolean;
}

const checkboxes: ICheckboxes[] = [
	{ name: 'all', only: false },
	{ name: 'no transfers', only: true },
	{ name: '1 transfer', only: true },
	{ name: '2 transfers', only: true },
	{ name: '3 transfers', only: true },
];

const Filter: React.FC = () => {
	return (
		<div className='filter'>
			<>
				<div className='filter__title'>number of transfers</div>
				<div className='filter__checkboxes'></div>
				{checkboxes.map(box => (
					<Checkbox key={box.name} name={box.name} only={box.only} />
				))}
			</>
		</div>
	);
};

export default Filter;
