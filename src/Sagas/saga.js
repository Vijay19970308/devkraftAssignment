import {takeLatest,put,delay} from 'redux-saga/effects';
import {ADD_ALBUM_DATA} from '../Services/Constant/Constant'

function* albumSetAsync(){

    yield delay(3000);
    yield put({type:'ADD_ALBUM_DATA_ASYNC',data:1});
} 


export function* watchAlbumSet(){
    yield takeLatest(ADD_ALBUM_DATA,albumSetAsync);
}