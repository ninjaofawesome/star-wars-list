import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// utils
import { fetchPeople } from '../../Redux/Actions';

// components
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';
import TableHeader from './TableHeader/TableHeader';
import {
	StyledTable,
} from './TableStyles';

interface TableProps {
	fetchPeople(): any;
	allPeople: Array<Object>;
}

interface TableState {
}

class Table extends Component<TableProps, TableState> {

	componentDidMount() {
	  this.props.fetchPeople();
	}

	loadedContent() {
		const { allPeople } = this.props;
		if (allPeople.length > 0) {
			return allPeople.map((person: any, index: number) => {
				console.log('person', person)
				return (
					<TableRow 
						key={`PersonTableRow-${index}`}
					>
						<TableCell>{person.name}</TableCell>
						<TableCell>{person.height}</TableCell>
						<TableCell>{person.mass}</TableCell>
						<TableCell>{person.hair_color}</TableCell>
					</TableRow>
				)
			}
		)
		} else {
			return(
				<TableRow>
					<TableCell>Loading...</TableCell>
				</TableRow>
			)
		}
	}

	render() {
		return (
			<StyledTable>
				<TableHeader />
				{this.loadedContent()}
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