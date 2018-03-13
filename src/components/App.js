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
      <section className="tiles">
        <Profile state={this.state} />
      </section>
    )
  }
}

export default App;
