import axios from "axios";
import { useEffect, useState } from "react";
import InputOutput from "../InputOutput/InputOutput";
import Profile from "../Profile/Profile";
import styles from './User.module.css'

const User = () =>{

    const url = 'http://localhost:3006/data';
    const [users,setUser] = useState('');

    const [userName,setUserName] = useState('')

    const inputHandler = (event) =>{
        const values = event.target.value;
        console.log(values);
        setUserName(values);
    }


    useEffect(()=>{
        axios
        .get(url)
        .then(user =>{
            setUser(user.data);
        })
    },[users])

    const postHandler = () =>{
        const postData = {
           "name":userName
        }
        axios
         .post(url,postData)
         .then(res => res.data)
         setUserName('');
    }

   const userData = users.map((items)=>(
       <Profile
           key={items.id}
           fname = {items.name}
       />
   ))

    return(
        <>
        <div className={styles.header}>
            <h1 >Digikull Student</h1> 
        </div>

        <div>
        <h1>Hello User</h1>
        </div>
      
        <div>
          <InputOutput
              inputHandler={inputHandler}
              userName={userName}
              postHandler={postHandler}
          />
      </div>

        <div>
        {userData}
        </div>
  
        </>
    )
}

export default User;