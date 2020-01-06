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
	sortType: any;
	sortAscending(data: string): any;
}

const UpButton: React.FC<UpButtonProps> = props => {
	const {
		sortType,
		sortAscending,
	} = props;

	return (
		<StyledUpButton
			onClick={() => sortAscending(sortType)}
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
    sortAscending: (data) => sortAscending(data),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpButton);

