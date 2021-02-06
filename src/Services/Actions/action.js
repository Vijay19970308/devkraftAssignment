import {ADD_ALBUM_DATA} from '../Constant/Constant';
export const setAlbum =(albumData)=>{
    //console.log(albumData);
   return {
       type:ADD_ALBUM_DATA,
       albumData:albumData,
   }
}
