import React from 'react';
import TableCell from '../TableCell/TableCell';
import {
	StyledTableRow,
} from './TableRowStyles';

interface TableRowProps {
	item?: any;
	key?: string;
}

const TableRowCells = (entry: any) => {
	if (entry !== undefined) {
		return Object.entries(entry).map((item: any, index: number) => {
			return <TableCell key={`TableCell-${index}`}>{item[1]}</TableCell>
		})
	}
};

const TableRow: React.FC<TableRowProps> = (props) => {
	return (
		<StyledTableRow>
			{TableRowCells(props.item)}
		</StyledTableRow>
	);
}

export default TableRow;