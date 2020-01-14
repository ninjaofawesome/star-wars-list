import styled from "styled-components";
import { colors, sizes } from '../../../Utils/constants';

export const StyledDownButton = styled.button`
	display: block;
	border: none;
	background-color: transparent;
	width: ${sizes.medium};
	height: ${sizes.medium};
	margin: 2px;
`;

export const DownButtonIcon = styled.div`
	width: 0;
	height: 0;
	border-left: ${sizes.small} solid transparent;
	border-right: ${sizes.small} solid transparent;
	border-top: ${sizes.medium} solid ${colors.red};
`;

