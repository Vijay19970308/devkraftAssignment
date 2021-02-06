import Album from '../Album';
import {connect} from 'react-redux';
//This is use to connect component to store to use data from store
const mapStateToProps = state =>({
   data:state.albumAdd.albumData
})

export default connect(mapStateToProps)(Album)