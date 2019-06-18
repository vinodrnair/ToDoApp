import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      newTaskName: ''
    }
  }

  onNewTaskChange(e) {
    this.setState({
      newTaskName: e.target.value
    })
  }

  addTask() {
    let taskList = this.state.taskList
    taskList.push(this.state.newTaskName)
    this.setState({
      taskList,
      newTaskName: '' //resetting
    })
  }

  createTaskList() {
    if(this.state.taskList.length === 0) {
      return <p>You do not have any task!</p>
    }

    return (
      <div className="taskList">
        {this.state.taskList.map((task, i) => {
          return <div key={'tsk'+i}>{task}</div>
        })}
      </div>
    )
  }

  render() {

    return (
      <div className="AppContainer">
        <h1>Task List</h1>
        {this.createTaskList()}
        <div className="newTaskSection">
          <h2>New Task</h2>
          <input type="text" value={this.state.newTaskName} onChange={this.onNewTaskChange.bind(this)}/>
          <br/>
          <button onClick={this.addTask.bind(this)}>Create New Task</button>
        </div>
      </div>
    )
  }
}

export default App;
