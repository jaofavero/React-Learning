import React, { useEffect } from "react";

function UserProfileTest({ userId }) {
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
            //.catch(error => console.error('Error fetching user:', error)); 
    }, [userId]);

    if (!user) {
        return <div>Loading user profile...</div>;
    }
    return (
        <div className="user-profile-test">
            <h1>User Profile Test</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );

}

export default UserProfileTest;