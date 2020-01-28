import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// utils
import { fetchPeople } from '../../Redux/Actions/Actions';

// components
import TableRow from './TableRow/TableRow';
import TableHeader from './TableHeader/TableHeader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {
	StyledTable,
} from './TableStyles';

interface TableProps {
	fetchPeople(): any;
	allPeople: Array<Object>;
}

class Table extends Component<TableProps> {

	componentDidMount() {
	  this.props.fetchPeople();
	}

	render() {
		return (
			<StyledTable>
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{this.props.allPeople.length > 0 ? <TableRow /> : <LoadingSpinner />}
				</tbody>
			</StyledTable>
		);
	}
}

const mapStateToProps = (state: any) => {
  return {
    allPeople: state.peopleReducer.people || [{}],
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchPeople: fetchPeople,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table);