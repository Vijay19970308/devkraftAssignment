import react,{useEffect, useState} from 'react';
function Pagination(props){
    const [counter,setCounter]=useState(1);
    const [value,setValue]=useState(counter*props.showperpage);
    useEffect(()=>{
          setValue(counter*props.showperpage);
          props.changepage(value-props.showperpage,value);
    },[counter*value]);
    return(
        <div className="row m-4">
            <div className="col d-flex justify-content-center ">
                <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <button  disabled={counter===1}  onClick={()=>{setCounter(counter-1)}} className="btn btn-primary">Prev</button>
                    </li>
                     {
                       new Array(Math.ceil(props.end/props.showperpage)).fill(" ").map((items,index)=>{
                         return (
                            <li className={`page-item ${counter===index+1 ?"active":null}`}>
                                <button  onClick={()=>{setCounter(index+1)}} className="page-link"  >{index+1}</button>
                           </li>
                         )
                     })
                    }
                    <li className="page-item">
                        <button  disabled={Math.ceil(props.end/props.showperpage)===counter} onClick={()=>{setCounter(counter+1)}}className="btn btn-primary">Next</button>
                    </li>
                </ul>
                </nav>
              
               
            </div>
        </div>
    )
}

export default Pagination;