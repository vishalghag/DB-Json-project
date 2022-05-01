import { Button } from "react-bootstrap";

const InputOutput = ({inputHandler, userName, postHandler}) =>{

    return(
        <>
            <input type='text' style={{height:'38px', width:'300px'}} value={userName} onChange={inputHandler}/>
            <Button variant="success" style={{marginLeft:'3px'}} onClick={()=>{postHandler()}}>Add </Button>
        </>
    )
}

export default InputOutput;