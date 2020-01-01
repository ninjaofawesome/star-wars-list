import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { sortAscending } from '../../../Redux/Actions';

// styles
import {
	StyledUpButton,
	UpButtonIcon,
} from './UpButtonStyles';

interface UpButtonProps {
	sortType: string;
}

const UpButton: React.FC<UpButtonProps> = props => {
	return (
		<StyledUpButton
			onClick={() => sortAscending(props.sortType)}
		>
			<UpButtonIcon />
		</StyledUpButton>
	);
}


const mapStateToProps = (state: any) => {
  return {
    allPeople: state.peopleReducer.people,
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    sortAscending: sortAscending,
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(UpButton);

