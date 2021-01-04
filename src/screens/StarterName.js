import React, {useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#ffffff;
    padding-left:30px;
    padding-right:30px;
`;
const HeaderText = styled.Text`
    font-size:22px;
    color:#333333;
    margin-top:50px;
    margin-bottom:50px;
`;
const NameInput = styled.TextInput`
    width:100%;
    height:50px;
    font-size:16px;
    padding:10px;
    border:1px solid #cccccc;
    border-radius:10px;
`;
const NextButton = styled.Button`
`;


const Page = (props) => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'',
            headerRight:()=>(<NextButton title="Próximo" onPress={nextAction} />),
            headerRightContainerStyle:{
                marginRight:10
            }
        });
    },[]);

    const nextAction = () => {
        if(!props.name){
            alert('Você precisa de um nome!');
            return
        }
        props.navigation.navigate('StarterDias');
    }
    const handleChangeName = (t) => {
        props.setName(t);
        props.navigation.setParams({name:t});
    }

    return(
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput
                value={props.name}
                onChangeText={handleChangeName}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            />
        </Container>
    );
}

const mapStateToProps=(state)=>{
    return{
        name:state.userReducer.name
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME',payload:{name}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);