import React from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useState } from 'react';

const AddUser = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/reactcrud/add_user.php', inputs);
        console.log(inputs)
    }

    return (
        <div className='adduser'>
            <Navigation />
            <form onSubmit={handleSubmit}>
                <table cellSpacing="20">
                    <tbody>
                        <tr>
                            <th><label htmlFor="nom">Nom : </label></th>
                            <td><input type="text" name="nom" id="nom" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="email">Email : </label></th>
                            <td><input type="email" name="email" id="nom" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="phone">Phone : </label></th>
                            <td><input type="phone" name="phone" id="phone" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Enregistrer" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default AddUser;