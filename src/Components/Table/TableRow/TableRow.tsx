import React from 'react';
import {
	StyledTableRow,
} from './TableRowStyles';


const TableRow: React.FC = (
		children: any,
		key: number,
	) => {
	return (
		<StyledTableRow key={key}>
			{children}
		</StyledTableRow>
	);
}

export default TableRow;