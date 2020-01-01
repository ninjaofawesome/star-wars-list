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
}

const DownButton: React.FC<DownButtonProps> = props => {
	return (
		<StyledDownButton
			onClick={() => sortDescending(props.sortType)}
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
    sortDescending: sortDescending,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownButton);
