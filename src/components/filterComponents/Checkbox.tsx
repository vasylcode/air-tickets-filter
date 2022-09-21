import { useState } from 'react';
import { ICheckbox } from '../../types';

export default function Checkbox({ name, only = false }: ICheckbox) {
	const [isChecked, setIsChecked] = useState(false);

	const handleOnly = () => {
		setIsChecked(true);
		// setIsChecked(!isChecked);
		// all others checkboxes to false
	};

	return (
		<div className='checkbox'>
			<label>
				<input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
				{name}
			</label>
			{only && <span onClick={() => handleOnly()}>only</span>}
		</div>
	);
}
