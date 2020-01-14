import styled from "styled-components";
import { colors } from '../../../Utils/constants';

export const StyledTableRow = styled.tr`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${colors.borderGray}
	&:last-of-type{
		border-bottom: none;
	}
`;