import React from 'react';
import {
	StyledTableHeader,
	HeaderCell,
} from './TableHeaderStyles';

const labelArr = ['name', 'height', 'mass', 'eye color', 'hair color', 'created', 'edited'];

const TableHeader: React.FC = () => {
	return (
		<StyledTableHeader>
			{labelArr.map((cellContent: string) => (
				<HeaderCell>
					{cellContent}
				</HeaderCell>
			))}
		</StyledTableHeader>
	);
}

export default TableHeader;