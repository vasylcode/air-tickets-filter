import React from 'react';
import Checkbox from './filterComponents/Checkbox';

export default function Filter() {
	return (
		<div className='filter'>
			<div className='filter__title'>number of transfers</div>
			<div className='filter__checkboxes'>
				<Checkbox name='all' only={false} />
				<Checkbox name='no transfers' only={true} />
				<Checkbox name='1 transfer' only={true} />
				<Checkbox name='2 transfers' only={true} />
				<Checkbox name='3 transfers' only={true} />
			</div>
		</div>
	);
}
