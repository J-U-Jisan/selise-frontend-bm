import React, {useEffect, useState} from 'react'

function Users(){
    const [users, setUsers] = useState([{
        Fname: '',
        Lname: '',
        Gender: '',
        DoB: '',
        City: '',
        Phone: '',
        Email: ''
    }])

    useEffect(() =>{
        setUsers(getUser())
    },[])
    const getUser = () => {
        const users = JSON.parse(localStorage.getItem("users_list"))
        if(users)
            return users;
        else 
            return [];
    }

    return <div className='container'>
        <h1>Users</h1>
        <table className="table table-stripped">
        <thead>
        <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user,index) =>
        <tr key={index}>
            <td><b>{user.Fname} {user.Lname}</b></td>
            <td>{user.Gender}</td>
            <td>{user.DoB}</td>
            <td>{user.Email}</td>
            <td>{user.Phone}</td>
        </tr>

            )}
        </tbody>
        </table>
    </div>
}

export default Users;