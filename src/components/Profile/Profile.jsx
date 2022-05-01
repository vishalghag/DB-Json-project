import styles from './Profile.module.css'
const Profile = ({fname}) =>{

    return(
        <>
        <div className={styles.container}>
            <div className={styles.txt}>{fname}</div>
        </div>
        </>
    )
}

export default Profile;