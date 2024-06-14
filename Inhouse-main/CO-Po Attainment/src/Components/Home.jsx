import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/addteacher/teachers');
            const currentUserData = response.data.teachers[0]; // Assuming the backend returns an array with one user object
            setCurrentUser(currentUserData);
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    };

    const navigateToSubject = (subject) => {
        const courseCoordinator = currentUser.name;
        navigate(`/subject/${subject}`, { state: { courseCoordinator } });
    };

    return (
        <Card>
            {currentUser && (
                <Component>
                    <h1>WELCOME,<span style={{ color: '#a30c0d' }}> {currentUser.name}</span> </h1>
                    <h3>Subjects</h3>
                    {currentUser.subject.map((subject, idx) => (
                        <button key={idx} onClick={() => navigateToSubject(subject.name)}>
                            {subject.name}
                        </button>
                    ))}
                </Component>
            )}
        </Card>
    );
}

export default Home;

const Card = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    .text {
        text-align: center;
    }
`;

const Component = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;

    button {
        margin-left: 10px;
        margin-bottom: 10px;
        width: 200px;
        height: 60px;
        background-color: #023948;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    h1 {
        margin-top: 10px;
    }
`;
