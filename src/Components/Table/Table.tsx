import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// utils
import { fetchPeople } from '../../Redux/Actions';
import { objEntries } from '../../Utils/utilityFunctions';

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


class Table extends Component<TableProps, {}> {

	componentDidMount() {
	  this.props.fetchPeople();
	}

	loading() {
		return <LoadingSpinner />
	}

	tableRow() {
		return (
			this.props.allPeople.map((person: any, index: number) => (
				<TableRow 
					key={`PersonTableRow-${index}`}
					item={person}
				/>
			)
		))
	}

	render() {
		return (
			<StyledTable>
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{objEntries(this.props.allPeople) !== false ? this.tableRow() : this.loading()}
				</tbody>
			</StyledTable>
		);
	}
}

const mapStateToProps = (state: any) => {
  return {
    allPeople: state.peopleReducer.people,
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchPeople: fetchPeople,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table);