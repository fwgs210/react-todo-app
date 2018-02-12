import React from 'react';


class DeleteGoal extends React.Component {


	render() {
		return (<button onClick={()=> this.props.deleteGoal(this.props.order)} href=''>delete</button>)
    }
      	
}



export default DeleteGoal