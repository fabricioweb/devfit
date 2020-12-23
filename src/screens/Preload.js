import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Preload=(props)=>{
    //TEMPORARIO
    props.navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: 'StarterStack' }],
        })
    );
    /*
    if(!props.name){
        //MANDAR PARA STARTERSTACK
        props.navigation.dispatch(StackActions.reset({
            index:0,
            action:[
                NavigationActions.navigate({routeName:'StarterStack'})
            ]
        }));
    }else{
        //MANDAR PARA APPTAB
        props.navigation.dispatch(StackActions.reset({
            index:0,
            action:[
                NavigationActions.navigate({routeName:'AppTab'})
            ]
        }));
    }
    */
    return null;
}

const mapStateToProps=(state)=>{
    return{
        name:state.userReducer.name
    };
}

export default connect(mapStateToProps)(Preload);