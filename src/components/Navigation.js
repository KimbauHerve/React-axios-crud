import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <table>
                <tr>
                    <NavLink to="/"><th>Accueil</th></NavLink>
                    <NavLink to="/add-user">
                        <th>Ajouter utilisateur</th>
                    </NavLink>
                </tr>
            </table>
        </div>
    );
};

export default Navigation;