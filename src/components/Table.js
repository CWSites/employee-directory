import React from 'react';

class Profile extends React.Component {

  renderTableBody = (key) => {
    let employee = this.props.state.employees;

    return (
      <tr key={key}>
        <td className="pic">
          <div className="picWrap"><img src={employee[key].pic} alt="name" /></div>
        </td>
        <td className="first">{employee[key].first}</td>
        <td className="last">{employee[key].last}</td>
        <td className="title">{employee[key].title}</td>
        <td className="department">{employee[key].department}</td>
        <td className="office">
          <span>{employee[key].office}</span>
          <span> <small>x</small>{employee[key].office_ext}</span>
        </td>
        <td className="mobile"><a href={`tel:${employee[key].mobile}`}>{employee[key].mobile}</a></td>
        <td className="email"><a href={`mailto:${employee[key].email}`}>{employee[key].email}</a></td>
      </tr>
    )
  };

  render() {
    let employees = (this.props.state.employees !== undefined ? this.props.state.employees : []);

    return(
      <table>
        <thead>
          <tr>
            <th className="pic" width="60"></th>
            <th className="first">First Name</th>
            <th className="last">Last Name</th>
            <th className="title">Title</th>
            <th className="department">Department</th>
            <th className="office">Office Phone</th>
            <th className="mobile">Mobile Phone</th>
            <th className="email">Email</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(employees).map(this.renderTableBody)}
        </tbody>
      </table>
    )
  }
}

export default Profile;
