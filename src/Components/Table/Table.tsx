import React from 'react';
import TableRow from './TableRow/TableRow';
import TableHeader from './TableHeader/TableHeader';
import {
	StyledTable,
} from './TableStyles';

const Table: React.FC = () => (
	<StyledTable>
		<TableHeader />
		<TableRow />
	</StyledTable>
);

export default Table;