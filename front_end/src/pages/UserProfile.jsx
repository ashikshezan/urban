import React from 'react';

const UserProfile = ({ match }) => {
    console.log(match)
    return (<div>User Profile for id #{match.params.slug}</div>);
}

export default UserProfile;