import React from 'react';
import Navigation from '../components/Navigation';
import UserList from '../components/UserList';

const Accueil = () => {
    return (
        <div className='accueil'>
            <Navigation />
            <h1>Accueil</h1>
            <UserList />
        </div>
    );
};

export default Accueil;