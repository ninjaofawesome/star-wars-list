import React from 'react';
import TableCell from '../TableCell/TableCell';
import {
	StyledTableRow,
} from './TableRowStyles';

interface TableRowProps {
	item?: any;
	key?: string;
}

const TableRowMap = (entry: any) => {
	if (entry=== undefined) {
		return <TableCell key='TableCell-Loading'>Loading...</TableCell>
	}

	return Object.entries(entry).map((item: any, index: number) => {
		return <TableCell key={`TableCell-${index}`}>{item[1]}</TableCell>
	})
}
const TableRow: React.FC<TableRowProps> = (
		item: any,
		key: number,
	) => {
	console.log(TableRowMap(item.item))
	return (
		<StyledTableRow key={key}>
			{TableRowMap(item.item)}
		</StyledTableRow>
	);
}

export default TableRow;