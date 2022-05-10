import { Button } from "react-bootstrap";

const InputOutput = ({inputHandler, userName, postHandler, tog,editSaveHandler}) =>{

    return(
        <>
            {tog ?
            <>
             <input type='text' style={{height:'38px', width:'300px'}} value={userName} onChange={inputHandler}/>
            <Button variant="success" style={{marginLeft:'3px'}} onClick={()=>{postHandler()}}>Add </Button>
            </>
            :
            <>
            <input type='text' style={{height:'38px', width:'300px'}} value={userName} onChange={inputHandler}/>
            <Button variant="success" style={{marginLeft:'3px'}} onClick={()=>{editSaveHandler()}}>Save </Button>
            </>
            }

        </>
    )
}

export default InputOutput;