import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateUser(){
    let navigate = useNavigate()
    const [input, setInput] = useState({
         Fname: '',
         Lname: '',
         Gender: '',
         DoB: '',
         City: '',
         Phone: '',
         Email: ''
        })

      const handleChange = e =>{
          console.log(e);
          const {name, value} = e.target
          setInput({
            ...input,
            [name]: value 
          })
          
      }

      function handleClick(e){
            e.preventDefault();
            const newUser= {
                Fname: input.Fname,
                Lname: input.Lname,
                Gender: input.Gender,
                DoB: input.DoB,
                City: input.City,
                Phone: input.Phone,
                Email: input.Email
            }
            const users = getUsers();
            users.push(newUser);
            localStorage.setItem("users_list", JSON.stringify(users));
            console.log("Users", users);

            
            navigate('/users');
        }
        const getUsers = () => {
            const data = JSON.parse(localStorage.getItem("users_list"));
            if(data)
              return data;
            else 
              return [];
        }  

    return <div className='container'>
        <h1>Create User page</h1>
        <form>
            <div className='form-group my-2'> 
              <input onChange={handleChange} name='Fname' value={input.Fname} className='form-control' placeholder='Enter First Name'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='Lname' value={input.Lname} className='form-control' placeholder='Enter Last Name'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='Gender' value={input.Gender} className='form-control' placeholder='Enter Gender'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='DoB' value={input.DoB} className='form-control' placeholder='Enter your date of birth (DD-MM-YYYY)'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='City' value={input.City} className='form-control' placeholder='Enter your city'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='Phone' value={input.Phone} className='form-control' placeholder='Enter your phone number'></input>
            </div>
            <div className='form-group my-2'>
              <input onChange={handleChange} name='Email' value={input.Email} className='form-control' placeholder='Enter your email'></input>
            </div>
            <button onClick={handleClick} className='btn btn-lg btn-info'>Add User</button>
        </form>
    </div>

}

export default CreateUser;