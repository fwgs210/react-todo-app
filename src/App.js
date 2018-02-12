import React from 'react';
import Data from './Data.js';
import Display from './Display.js';


class App extends React.Component {

    constructor() {
        super();
        // here is our constructor lifecycle method
        this.state = {
          goals: [],
          goal: ''
        }
    }

    componentDidMount() {
        // here is anything we want to happen after the component renders - like grab our AJAX data
        this.setState({
          goals: Data
        })

        
    }

    handleChange = (e) => {
      this.setState({
        goal: e.target.value
      })
    }

    AddGoal = (e) => {
              e.preventDefault();
              const newData = this.state.goals;
              newData.push({goal: this.state.goal});
              this.setState({
                goals: newData,
                goal: ''
              })
              console.log(this.state.goals)
    };

    DeleteOneGoal = (i) => {
      const newData = this.state.goals;
      newData.splice(i,1)
      console.log(i)
      this.setState({
                  goals: newData
          })
    }


    render() {
      return (
        <div>
          
          <Display data={this.state.goals} deleteGoal={this.DeleteOneGoal} />
          
          <form onSubmit={this.AddGoal}>
            <input type='text' onChange={this.handleChange} value={this.state.goal} required />
            <button type='submit'>Add Goal</button>
          </form>
        </div>
        )
    }
}

export default App;