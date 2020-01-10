import React from 'react';
import { connect } from 'react-redux';
import TableCell from '../TableCell/TableCell';
import {
	StyledTableRow,
} from './TableRowStyles';

interface TableRowProps {
	allPeople?: any;
}

const TableRowCells = (entry: any) => (
	Object.entries(entry).map((item: any, index: number) => (
		<TableCell key={`TableCell-${index}`}>{item[1]}</TableCell>
	))
)

const TableRow: React.FC<TableRowProps> = (props) => {
	const { allPeople } = props;
	return (
		allPeople.map((item: any, index: number) => (
			<StyledTableRow
				key={`styledTableRow-${index}`}
			>
				{TableRowCells(item)}
			</StyledTableRow>
		))
	);
}

const mapStateToProps = (state: any) => {
  return {
    allPeople: state.peopleReducer.people,
  }
};

export default connect(mapStateToProps)(TableRow);