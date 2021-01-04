import React, {useEffect, useLayoutEffect} from 'react';
import { CommonActions } from '@react-navigation/native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Workout from '../components/Workout';
import workoutJson from '../presetWorkouts.json';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#ffffff;
    padding-left:30px;
    padding-right:30px;
    padding-top:50px;
`;
const HeaderText = styled.Text`
    font-size:15px;
    color:#333333;
    text-align:center;
    margin-bottom:30px;
`;
const NextButton = styled.Button`
`;
const WorkoutList = styled.FlatList`
    width:100%;
`;


const Page = (props) => {

    useEffect(()=>{
        props.navigation.setParams({myWorkouts:props.myWorkouts});
    },[props.myWorkouts]);

    useLayoutEffect(()=>{
        let btnNext = 'Ignorar';
        if(props.myWorkouts.length > 0){
            btnNext = 'Concluir';
        }

        props.navigation.setOptions({
            title:'',
            headerRight:()=>(<NextButton title={btnNext} onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        });
    },[props.myWorkouts]);

    const nextAction = () => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'AppTab' }],
            })
        ); 
    }
    const addWorkout = (item) => {
        if(props.myWorkouts.findIndex(i=>i.id == item.id) < 0){
            props.addWorkout(item);
        }else{
            props.delWorkout(item);
        }
    }

    return(
        <Container>
            <HeaderText>Opções de treinos pré-criados para o seu nível.</HeaderText>
            <HeaderText>Você selecionou {props.myWorkouts.length} treino(s)</HeaderText>
            <WorkoutList
                data={workoutJson}
                renderItem={({item})=><Workout data={item} addAction={()=>addWorkout(item)} />}
                keyExtractor={item=>item.id}
            />
        </Container>
    );
}

const mapStateToProps=(state)=>{
    return{
        myWorkouts:state.userReducer.myWorkouts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout:(workout)=>dispatch({type:'ADD_WORKOUT',payload:{workout}}),
        delWorkout:(workout)=>dispatch({type:'DEL_WORKOUT',payload:{workout}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);