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
	sortAscending(data: string, arr: any): any;
	allPeople?: Array<Object>;
}

const UpButton: React.FC<UpButtonProps> = props => {
	const {
		sortType,
		sortAscending,
		allPeople,
	} = props;

	return (
		<StyledUpButton
			onClick={() => sortAscending(sortType, allPeople)}
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
    sortAscending: (data, arr) => sortAscending(data, arr),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpButton);

