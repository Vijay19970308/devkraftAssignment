import App from '../App';
import {connect} from 'react-redux';
import {setAlbum} from '../Services/Actions/action';

//This is use to connect component to store to use data from store
const mapStateToProps = state =>({
   data:state.albumAdd.albumData
})

//This is use to send data from event to store
const mapDispatchToProps = dispatch=>({
 setAlbumId : data => dispatch(setAlbum(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(App)