import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { sortDescending } from '../../../Redux/Actions/Actions';

// styles
import {
	StyledDownButton,
	DownButtonIcon,
} from './DownButtonStyles';

interface DownButtonProps {
	sortType: string;
	sortDescending(data: string, arr: any): any;
	allPeople?: Array<Object>;
}

const DownButton: React.FC<DownButtonProps> = props => {
	const {
		sortType,
		sortDescending,
		allPeople,
	} = props;
	return (
		<StyledDownButton
			onClick={() => sortDescending(sortType, allPeople)}
		>
			<DownButtonIcon />
		</StyledDownButton>
	);
}

const mapStateToProps = (state: any) => {
  return {
    allPeople: state.peopleReducer.people,
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    sortDescending: (data, arr) => sortDescending(data, arr),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownButton);
