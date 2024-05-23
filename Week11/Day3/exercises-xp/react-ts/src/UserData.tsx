import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserData: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data: User[] = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>User Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserData;
