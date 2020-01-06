import React from 'react';
import TableCell from '../TableCell/TableCell';
import {
	StyledTableRow,
} from './TableRowStyles';

interface TableRowProps {
	people?: any;
}

const TableRowCells = (entry: any) => (
	Object.entries(entry).map((item: any, index: number) => (
		<TableCell key={`TableCell-${index}`}>{item[1]}</TableCell>
	))
)

const TableRow: React.FC<TableRowProps> = (props) => {
	return (
		props.people.map((item: any, index: number) => (
			<StyledTableRow
				key={`styledTableRow-${index}`}
			>
				{TableRowCells(item)}
			</StyledTableRow>
		))
	);
}

export default TableRow;