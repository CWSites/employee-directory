import React from 'react';

class Profile extends React.Component {

  componentDidMount() {
    console.log('props', this.props);
  }

  renderProfiles = (key) => {
    let employee = this.props.state.employees;

    return (
      <div key={key} className="thumbnail">
        <div className="picWrap" style={{backgroundImage: `url(${employee[key].hover})`}}>
          <img src={employee[key].pic} className="primary" />
        </div>
        <span className="name">{employee[key].first} {employee[key].last}</span>
        <div className="details animate-show">
          <span className="title">{employee[key].title}</span>
          <span className="department">{employee[key].department}</span>
          <span className="location">{employee[key].location}</span>
          <span className="divider"></span>
          <span className="office">
            <strong>O: </strong>
            <a href="tel:{employee[key].office},{employee[key].office_ext}">
              {employee[key].office}
              <span className="extension">x{employee[key].office_ext}</span>
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
        {Object.keys(employees).map(this.renderProfiles)}
      </div>
    )
  }
}

export default Profile;
