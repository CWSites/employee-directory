import React from 'react';

// import components
import Profile from './Profile';

// import sample data
import employees from '../data/sample';

class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    this.loadSampleData();
  }

  loadSampleData = () => {
    this.setState({
      employees: employees
    });
  };

  render() {
    return(
      <div>
        <h1>Employee Directory</h1>
        <Profile state={this.state} />
      </div>
    )
  }
}

export default App;
