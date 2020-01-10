import React from 'react';
import {
	StyledSpinner,
	StyledSpinnerRow,
	StyledSpinnerCell,
} from './LoadingSpinnerStyles';

const LoadingSpinner: React.FC = () => {
	return (
		<StyledSpinnerRow>
			<StyledSpinnerCell>
				<StyledSpinner viewBox="0 0 50 50">
				  <circle
				    className="path"
				    cx="25"
				    cy="25"
				    r="20"
				    fill="none"
				    strokeWidth="4"
				  />
				</StyledSpinner>
			</StyledSpinnerCell>
		</StyledSpinnerRow>
	);
}

export default LoadingSpinner;

