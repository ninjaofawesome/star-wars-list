import styled from "styled-components";
import { colors, sizes } from '../../../Utils/constants';

export const StyledTableCell = styled.td`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: auto;
	min-width: 150px;
	border-right: 1px solid ${colors.borderGray};
	padding: ${sizes.small} 0;
	&:last-of-type{
		border-right: none;
	}
`;