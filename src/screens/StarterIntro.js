import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`

`;
const WelcomeText = styled.Text`

`;
const WelcomeImage = styled.View`

`;
const WelcomeLogo = styled.Image`

`;
const BeginConfigArea = styled.View`

`;

export default()=>{
    return(
        <Container>
            <WelcomeText>Bem-vindo(a) ao DevFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../assets/boneco.png')} />
            </WelcomeImage>
            <BeginConfigArea>

            </BeginConfigArea>
        </Container>
    );
}