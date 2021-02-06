import {ADD_ALBUM_DATA} from '../Constant/Constant';
const initialState={};
export const albumAdd =(state=initialState,action)=>{
    
    switch(action.type)
    {
        case ADD_ALBUM_DATA: return{
                          ...state,
                          albumData:action.albumData,
        }
          break  
        default : return state
    }

}