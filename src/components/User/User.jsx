import { faFileEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import InputOutput from "../InputOutput/InputOutput";
import Profile from "../Profile/Profile";
import styles from './User.module.css'

const User = () => {

    const url = 'http://localhost:3006/data';
    const [users, setUser] = useState([]);

    const [userName, setUserName] = useState('');
    const [search, setSearch] = useState('');
    const [tog, setTog] = useState(true);
    const [userIds, setUsersIds] = useState(null);

    const inputHandler = (event) => {
        const values = event.target.value;
        console.log(values);
        setUserName(values);
    }


    const getUsersdata = () =>{
        axios
        .get(url)
        .then(user =>{
            setUser(user.data)
        })
    }

    useEffect(() => {
        axios
            .get(url)
            .then(user => {
                setUser(user.data)
                setUsersIds(user.data.id)
            })
    }, [])

    const postHandler = () => {
        const postData = {
            "name": userName
        }
        axios
            .post(url, postData)
            .then(res => {
                const item = [...users]
                item.push(res.data)
                setUser(item)
            })

        setUserName('');
    }

    const deleteHandler = (id) => {
        console.log(id, 'deleteId');

        const ids = users[id].id;

        axios
            .delete(`${url}/${ids}`)
        const items = [...users]
        items.splice(id, 1);
        setUser(items)
    }

    const serachData = (event) => {
        const values = event.target.value
        // console.log(values);
        setSearch(values)
        fetch(`http://localhost:3006/data${search}`)
            .then(res => res.data)

    }


    const editHandler = (id) => {
        setUserName(users[id].name, 'name edit')
        setUsersIds(users[id].id)
        setTog(false)



    }

    const editSaveHandler = () => {
        const data = {
            "name": userName,
        }
        axios
            .put(`http://localhost:3006/data/${userIds}`, data)
            .then(res => {
                getUsersdata(res.data)
            })
        setUserName('')
        setTog(true);
    }
    console.log(userIds, "userIds");


    const searchdataHandler = () => {
        search.map((items) => {
            return <li>{items.name}</li>
        })
    }

    console.log(search, 'search');

    const userData = users.map((items, index) => (
        <Profile
            key={items.id}
            fname={items.name}
            editData={<FontAwesomeIcon icon={faFileEdit} onClick={() => { editHandler(index) }}></FontAwesomeIcon>}
            delteData={<FontAwesomeIcon icon={faTrash} onClick={() => { deleteHandler(index) }}></FontAwesomeIcon>}
            saveData={<FontAwesomeIcon icon={faSave} onClick={() => { editSaveHandler() }}></FontAwesomeIcon>}
            tog={tog}
        />
    ))


    return (
        <>
            <div className={styles.header}>
                <h1 >Digikull Student</h1>
            </div>


            <div className={styles.searchData}>
                <input type='text' onChange={serachData} />
                <Button variant="success" onClick={() => { searchdataHandler() }}>Search</Button>
            </div>

            <div>
                <h1>Hello User</h1>
            </div>



            <div>
                <InputOutput
                    inputHandler={inputHandler}
                    userName={userName}
                    postHandler={postHandler}
                    tog={tog}
                    editSaveHandler={editSaveHandler}
                />
            </div>

            <div>
                {userData}

            </div>

        </>
    )
}

export default User;