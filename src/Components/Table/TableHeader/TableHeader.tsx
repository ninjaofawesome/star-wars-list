import React from 'react';
import UpButton from '../../Buttons/UpButton/UpButton';
import DownButton from '../../Buttons/DownButton/DownButton';
import {
	StyledTableHeader,
	HeaderCell,
} from './TableHeaderStyles';


const labelArr = ['name', 'height', 'mass', 'eye color', 'hair color', 'created', 'edited'];

const TableHeader: React.FC = () => {
	return (
		<StyledTableHeader>
			{labelArr.map((cellContent: string, index: number) => (
				<HeaderCell key={`headerCell-${index}`}>
					<UpButton sortType={cellContent} />
					<DownButton sortType={cellContent} />
					{cellContent}
				</HeaderCell>
			))}
		</StyledTableHeader>
	);
}

export default TableHeader;