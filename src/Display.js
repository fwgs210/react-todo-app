import React from 'react';
import DeleteGoal from './DeleteGoal.js'
import App from './App.js'


class Display extends React.Component {



	render() {
		return (
		  <ul>
		      {this.props.data.map((each, key) => {
		              return (
		                <li key={key}>{each.goal} <DeleteGoal order={key} deleteGoal={this.props.deleteGoal} /></li>
					  )
					  console.log(this.props.data)
	      	  })}
      	  </ul>
      	)
      	
	}

}

export default Display




