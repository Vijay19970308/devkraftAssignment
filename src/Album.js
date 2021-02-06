import react, { useState,useEffect } from 'react';
import './App.css';
import Pagination from './Pagination';
function Album (props){
  const [photos,setPhotos] = useState([]);
  const [length,setlength]=useState(0);
  const [showperpage,setshowperpage]=useState(9);
  const [page,setpage]=useState({
    start:0,
    end:showperpage
  });
  const changepage=(startindex,endindex)=>{
    setpage({
      start:startindex,
      end:endindex
    })
  }
  async function fetchPhotos(){
    await fetch(`https://jsonplaceholder.typicode.com/albums/${props.data.id}/photos`)
    .then(response => response.json())
    .then(data => {
    setPhotos([...data])
    setlength(data.length);
    });
  }
  useEffect(()=>{
    fetchPhotos();
},[]);
return(
   <div className="App" >
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <h1>{props.data.title.toUpperCase()}</h1>
            <h5>Uploaded by: {props.data.username}</h5>
          </div>
        </div>
        <div className="row">
            {
              photos.slice(page.start,page.end).map((photos)=>{
               return(
                 <div className="col-md-4 mb-4">
                  <div className="card p-4 m-4">
                     <div className="card body">
                       <img  className="image" src={photos.url} alt="image"></img>
                     </div>
                  </div>
                  <h5>{photos.title}</h5>
                 </div>
             )
            })
          }
          </div>
          <Pagination showperpage={showperpage} changepage={changepage} end={length}/>
      </div>
   </div>

)
}
export default Album;