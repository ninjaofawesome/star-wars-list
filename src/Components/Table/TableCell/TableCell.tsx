import React from 'react';
import {
	StyledTableCell,
} from './TableCellStyles';

interface CellProps {
	children?: any;
}

const TableCell: React.FC<CellProps> = (props) => (
	<StyledTableCell>
		{props.children}
	</StyledTableCell>
);

export default TableCell;