import React, {useLayoutEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';

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
const BoldText = styled.Text`
    font-weight:bold;
`;
const DaysArea = styled.View`
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
`;


const Page = (props) => {

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            title:'',
            headerRight:()=>(<NextButton title="Próximo" onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        });
    },[]);

    const nextAction = () => {
        //alert(props.workoutDays);
        if(!props.workoutDays){
            alert('Você precisa treinar pelo menos 1 dia!');
            return
        }
        props.navigation.navigate('StarterNivel');
    }

    const toggleDay = (d) => {
        let newWorkoutDays = [...props.workoutDays];

        if(!props.workoutDays.includes(d)){
            //INSERIR
            newWorkoutDays.push(d);
        }else{
            //REMOVER
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }
        props.setWorkoutDays(newWorkoutDays);
        props.navigation.setParams({workoutDays:newWorkoutDays});
        //alert(props.workoutDays);
    }

    let firstName = props.name.split(' ')[0];

    return(
        <Container>
            <HeaderText>Opa, <BoldText>{firstName}</BoldText>, tudo bem?</HeaderText>
            <HeaderText>Quais <BoldText>dias da semana</BoldText> você pretende treinar?</HeaderText>
            <DaysArea>
                <DefaultButton bgcolor={props.workoutDays.includes(1)?'#a5e8bc':false} onPress={()=>toggleDay(1)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Segunda</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(2)?'#a5e8bc':false} onPress={()=>toggleDay(2)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Terça</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(3)?'#a5e8bc':false} onPress={()=>toggleDay(3)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Quarta</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(4)?'#a5e8bc':false} onPress={()=>toggleDay(4)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Quinta</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(5)?'#a5e8bc':false} onPress={()=>toggleDay(5)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Sexta</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(6)?'#a5e8bc':false} onPress={()=>toggleDay(6)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Sábado</Text></DefaultButton>
                <DefaultButton bgcolor={props.workoutDays.includes(0)?'#a5e8bc':false} onPress={()=>toggleDay(0)} width="100px" style={{marginBottom:20}} underlayColor="#cccccc"><Text>Domingo</Text></DefaultButton>
            </DaysArea>
        </Container>
    );
}

const mapStateToProps=(state)=>{
    return{
        name:state.userReducer.name,
        workoutDays:state.userReducer.workoutDays
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME',payload:{name}}),
        setWorkoutDays:(workoutDays)=>dispatch({type:'SET_WORKOUTDAYS',payload:{workoutDays}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);