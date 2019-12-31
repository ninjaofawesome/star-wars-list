import React from 'react';
import {
	StyledUpButton,
	UpButtonIcon,
} from './UpButtonStyles';

const UpButton: React.FC = () => {
	return (
		<StyledUpButton
			onClick={() => console.log('up!')}
		>
			<UpButtonIcon />
		</StyledUpButton>
	);
}

export default UpButton;

