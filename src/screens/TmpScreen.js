import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    padding-left:30px;
    padding-right:30px;
`;
const WelcomeText = styled.Text`
    font-size:22px;
    color:#333333;
    margin-top:50px;
`;

export default()=>{

    return(
        <Container>
            <WelcomeText>PÁGINA TEMPORÁRIA</WelcomeText>
        </Container>
    );
}