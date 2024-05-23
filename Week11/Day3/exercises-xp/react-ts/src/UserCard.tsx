import React from 'react';

// defining an interface with optional props in TypeScript
interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    return (
        <div className="user-card">
            <h2>User Card</h2>
            {name && <p>Name: {name}</p>}
            {age && <p>Age: {age}</p>}
            {!name && !age && <p>No user information available</p>}
        </div>
    );
};

export default UserCard;
