import React from 'react';
import {
	StyledDownButton,
	DownButtonIcon,
} from './DownButtonStyles';

const DownButton: React.FC = () => {
	return (
		<StyledDownButton
			onClick={() => console.log('down!')}
		>
			<DownButtonIcon />
		</StyledDownButton>
	);
}

export default DownButton;

