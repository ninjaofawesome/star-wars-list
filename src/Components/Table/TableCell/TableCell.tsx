import React from 'react';
import {
	StyledTableCell,
} from './TableCellStyles';

interface CellProps {
	children?: any;
}

const TableCell: React.FC<CellProps> = (children: any) => (
	<StyledTableCell>
		{children.children}
	</StyledTableCell>
);

export default TableCell;