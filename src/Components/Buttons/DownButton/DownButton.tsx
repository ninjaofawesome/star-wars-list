import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { sortDescending } from '../../../Redux/Actions';

// styles
import {
	StyledDownButton,
	DownButtonIcon,
} from './DownButtonStyles';

interface DownButtonProps {
	sortType: string;
	sortDescending(data: string, arr: Array<Object>): any;
	allPeople: Array<Object>;
}

const DownButton: React.FC<DownButtonProps> = props => {
	const {
		sortType,
		sortDescending,
		allPeople,
	} = props;
	return (
		<StyledDownButton
			onClick={() => sortDescending(sortType)}
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
    sortDescending: (data) => sortDescending(data),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownButton);
