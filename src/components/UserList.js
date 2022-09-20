import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserList = () => {

const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/RecyclerViewBD/get_book.php').then((res) => setData(res.data));
    }, [])

    return (
        <div className='userList'>
        {
            data.map((user,id)=><li key={user.id}>{user.title}<br />{user.rating}</li>)
        }
        </div>
    );
};

export default UserList;