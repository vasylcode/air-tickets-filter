import React from 'react';

interface ICheckbox {
	name: string;
	only: boolean;
}

export default function Checkbox({ name, only = false }: ICheckbox) {
	return (
		<div className='checkbox'>
			<label>
				<input type='checkbox' />
				{name}
			</label>
			{only && <span>only</span>}
		</div>
	);
}
