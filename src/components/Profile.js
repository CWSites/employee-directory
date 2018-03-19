import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


class Profile extends React.Component {

  componentDidMount() {
    console.log('props', this.props);
  }

  onProfileClick = (key) => {
    // grab a copy of the employees array from state
    let employees = this.props.state.employees.slice();

    // determine if employee is currently active
    if (employees[key].isActive === true) {
      employees[key].isActive = false;
    } else {
      employees[key].isActive = true;
    }

    // update state with new array details
    this.setState({employees});
  }

  renderProfiles = (key) => {
    let employee = this.props.state.employees;

    return (
      <div key={key} className={employee[key].isActive ? 'thumbnail active' : 'thumbnail'} onClick={() => this.onProfileClick(key)}>
        <div className="picWrap" style={{backgroundImage: `url(${employee[key].hover})`}}>
          <img src={employee[key].pic} className="primary" alt={`${employee[key].first} ${employee[key].last}`} />
        </div>
        <span className="name">{employee[key].first} {employee[key].last}</span>
        <div className="details">
          <span className="title">{employee[key].title}</span>
          <span className="department">{employee[key].department}</span>
          <span className="location">{employee[key].location}</span>
          <span className="divider"></span>
          <span className="office">
            <strong>O: </strong>
            <a href="tel:{employee[key].office},{employee[key].office_ext}">
              {employee[key].office}
              <small>x</small>{employee[key].office_ext}
            </a>
          </span>
          <span className="mobile">
            <strong>M: </strong><a href="tel:{employee[key].mobile}">{employee[key].mobile}</a>
          </span>
          <span className="email">
            <a href="mailto:{employee[key].email}">Email {employee[key].first}</a>
          </span>
        </div>
      </div>
    )
  };

  render() {
    let employees = (this.props.state.employees !== undefined ? this.props.state.employees : []);

    return(
      <div>
        <ReactCSSTransitionGroup
          transitionName="profile"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          {Object.keys(employees).map(this.renderProfiles)}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Profile;
