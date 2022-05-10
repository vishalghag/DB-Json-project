import styles from './Profile.module.css'
const Profile = ({fname, editData, delteData, tog, saveData}) =>{

    return(
        <>
        <div className={styles.container}>
        {tog ? 
        <>
            <div className={styles.txt}>{fname}
           
           </div>
           <span className={styles.editIcon}>{editData}</span>
           <span className={styles.deleteIcon}>{delteData}</span>
       </>
       :
       <>
            <div className={styles.txt}>{fname}
           
           </div>
           <span className={styles.editIcon}>{saveData}</span>
           <span className={styles.deleteIcon}>{delteData}</span>
       </>
        }

        </div>
        </>
    )
}

export default Profile;