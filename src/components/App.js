import React from 'react';

// import components
import Profile from './Profile';
import Table from './Table';

// import sample data
import employees from '../data/sample';

class App extends React.Component {

  state = {
    view: 'tile',
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

  viewChange = (view) => {
    // grab a copy of the current view from state
    let currentView = this.state.view;

    // determine if view clicked is not currently active
    if (currentView !== view) {
      currentView = view;
    }

    // update state with new view
    this.setState({view: currentView});
  }

  render() {
    return(
      <div className="app-wrapper">
        <header>
          <h1>Employee Directory</h1>
          <button className="btn tile" onClick={() => this.viewChange('tile')}>Tile</button>
          <button className="btn list" onClick={() => this.viewChange('list')}>List</button>
          <input type="text" className="filter" placeholder="Type here to filter" />
        </header>
        <section className={this.state.view == 'tile' ? 'tiles active' : 'tiles'}>
          <Profile state={this.state} />
        </section>
        <section className={this.state.view == 'list' ? 'list active' : 'list'}>
          <Table state={this.state} />
        </section>
      </div>
    )
  }
}

export default App;
