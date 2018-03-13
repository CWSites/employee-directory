import React from 'react';

class Profile extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return(
      <div>Profile Component Loads Here...</div>
    )
  }
}

export default Profile;
