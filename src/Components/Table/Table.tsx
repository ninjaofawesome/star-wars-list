import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// utils
import { fetchPeople } from '../../Redux/Actions';

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

	componentDidUpdate(prevProps: any) {
	  	// Typical usage (don't forget to compare props):
	  	if (this.props.allPeople[0] !== prevProps.allPeople[0]) {
	  		return <TableRow people={this.props.allPeople} />
	  	}
	}


	render() {
		console.log("props", this.props.allPeople)
		return (
			<StyledTable>
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{this.props.allPeople.length > 0 ? <TableRow people={this.props.allPeople} /> : <LoadingSpinner />}
				</tbody>
			</StyledTable>
		);
	}
}

const mapStateToProps = (state: any) => {
	console.log('state', state.peopleReducer.people)
  return {
    allPeople: state.peopleReducer.people,
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchPeople: fetchPeople,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table);