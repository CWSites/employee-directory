import React from 'react';

// import components
import Profile from './Profile';
import Table from './Table';

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
      <div className="app-wrapper">
        <header>
          <h1>Employee Directory</h1>
          <button className="btn tile">Tile</button>
          <button className="btn list">List</button>
          <input type="text" className="filter" placeholder="Type here to filter" />
        </header>
        <section className="tiles">
          <Profile state={this.state} />
        </section>
        <section className="list">
          <Table state={this.state} />
        </section>
      </div>
    )
  }
}

export default App;
