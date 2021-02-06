import react,{useEffect, useState} from 'react';
function Pagination(props){
    const [counter,setcounter]=useState(1);
    const [value,setValue]=useState(counter*props.showperpage)
    useEffect(()=>{
          setValue(counter*props.showperpage);
          props.changepage(value-props.showperpage,value);
    },[counter]);
    return(
        <div className="row m-4">
            <div className="col d-flex justify-content-center ">
                <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <button  disabled={counter===1}  onClick={()=>{setcounter(counter-1)}} className="btn btn-primary">Prev</button>
                    </li>
                    <li className="page-item">
                        <button disabled={counter===1}  onClick={()=>{setcounter(counter-1)}} className="page-link"  >{counter-1}</button>
                    </li>
                    <li className="page-item">
                        <button style={{backgroundColor:"blue"}} className="page-link" >{counter}</button>
                    </li>
                    <li className="page-item">
                        <button onClick={()=>{setcounter(counter+1)}} disabled={Math.ceil(props.end/props.showperpage)===counter} className="page-link"  >{counter+1}</button>
                    </li>
                    <li className="page-item">
                        <button onClick={()=>{setcounter(counter+2)}} disabled={Math.ceil(props.end/props.showperpage)-1<=counter} className="page-link"  >{counter+2}</button>
                    </li>
                    <li className="page-item">
                        <button  disabled={Math.ceil(props.end/props.showperpage)===counter} onClick={()=>{setcounter(counter+1)}}className="btn btn-primary">Next</button>
                    </li>
                </ul>
                </nav>
              
               
            </div>
        </div>
    )
}

export default Pagination;