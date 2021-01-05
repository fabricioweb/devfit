import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Preload=(props)=>{    
    if(!props.name){
        //MANDAR PARA STARTERSTACK
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'StarterStack' }],
            })
        );
    }else{
        //MANDAR PARA APPTAB
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'AppTab' }],
            })
        );
    }
    
    return null;
}

const mapStateToProps=(state)=>{
    return{
        name:state.userReducer.name
    };
}

export default connect(mapStateToProps)(Preload);