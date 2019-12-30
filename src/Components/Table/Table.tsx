import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// utils
import { fetchPeople } from '../../Redux/Actions';

// components
import TableRow from './TableRow/TableRow';
import TableHeader from './TableHeader/TableHeader';
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

	loadedContent() {
		const { allPeople } = this.props;
		if (allPeople.length > 0) {
			return allPeople.map((person: any, index: number) => {
				return (
					<TableRow 
						key={`PersonTableRow-${index}`}
						item={person}
					>
					</TableRow>
				)
			}
		)
		} else {
			return(
				<TableRow />
				
			)
		}
	}

	render() {
		return (
			<StyledTable>
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{this.loadedContent()}
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