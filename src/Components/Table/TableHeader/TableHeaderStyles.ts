import styled from "styled-components";
import { colors, sizes } from '../../../Utils/constants';

export const StyledTableHeader = styled.tr`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 3px solid ${colors.black};
	padding: ${sizes.small} 0;
`;

export const HeaderCell = styled.th`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 14%;
`;

export const StyledContentWrapper = styled.span`
	margin: 0 ${sizes.small};
`;